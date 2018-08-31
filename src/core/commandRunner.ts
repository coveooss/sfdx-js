import { exec, ExecOptions } from "child_process"
import * as _ from "underscore"
export interface ICommandRunner {
  runCommand(command: string, options?: ExecOptions): Promise<string>
}

export interface CustomLogger {
  error(data: string): void
  info(data: string): void
}

export class CommandRunner implements ICommandRunner {
  constructor(
    private SFDXPath: string,
    private useLiveLog: boolean = false,
    private customLogger: CustomLogger = console
  ) {}

  public runCommand(command: string, options?: ExecOptions): Promise<string> {
    let executePromise = new Promise<string>((resolve, reject) => {
      const fullCommand = this.SFDXPath + " " + command

      let actualOptions: ExecOptions = {
        env: this.getCommandEnv()
      }

      if (options !== undefined) {
        actualOptions = Object.assign(actualOptions, options)
      }

      let execProcess = exec(fullCommand, actualOptions, (error, stdout, stderr) => {
        const errorMessage = stderr.toString()
        if (error || errorMessage !== "") {
          reject(stderr)
        } else {
          resolve(stdout)
        }
      })
      if (this.useLiveLog) {
        execProcess.stdout.on("data", data => {
          this.customLogger.info(`${data}`)
        })

        execProcess.stderr.on("data", data => {
          this.customLogger.error(`${data}`)
        })

        execProcess.on("close", code => {
          this.customLogger.info(`${fullCommand} exited with code ${code}`)
        })
      }
    })
    return executePromise
  }

  private getCommandEnv(): NodeJS.ProcessEnv {
    const env = process.env
    // https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_env_variables.htm

    // Return everything has JSON.
    env["SFDX_CONTENT_TYPE"] = "JSON"

    //  Specify this variable when using the CLI with ssh or "headless" in a CI environment.
    env["SFDX_USE_GENERIC_UNIX_KEYCHAIN"] = "true"

    // Disable updates.
    env["SFDX_AUTOUPDATE_DISABLE"] = "true"

    return env
  }
}
