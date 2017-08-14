import { execSync, ExecSyncOptions } from "child_process"
import * as _ from "underscore"

export interface ICommandRunner {
  runCommand(command: string, options?: ExecSyncOptions): Promise<string>
}

export class CommandRunner implements ICommandRunner {
  constructor(private SFDXPath: string) {}

  public runCommand(
    command: string,
    options?: ExecSyncOptions
  ): Promise<string> {
    let executePromise = new Promise<string>((resolve, reject) => {
      const fullCommand = this.SFDXPath + " " + command

      let actualOptions: ExecSyncOptions = {
        stdio: "pipe"
      }

      if (options !== undefined) {
        actualOptions = Object.assign(actualOptions, options)
      }

      try {
        let buffer = execSync(fullCommand, actualOptions)
        resolve((buffer as Buffer).toString("utf8"))
      } catch (e) {
        let message: string
        if (e !== undefined && e.stderr !== undefined) {
          message = e["stderr"].toString("utf8")
        } else {
          message = e
        }

        reject(message)
      }
    })
    return executePromise
  }
}
