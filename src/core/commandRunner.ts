import { execSync, ExecSyncOptions } from "child_process";
import * as _ from "underscore";

export interface ICommandRunner {
  runCommand(command: string, options?: ExecSyncOptions): Promise<string>;
}

export class CommandRunner implements ICommandRunner {
  constructor(private SFDXPath: string) {}

  public runCommand(command: string, options?: ExecSyncOptions): Promise<string> {
    let executePromise = new Promise<string>((resolve, reject) => {
      const fullCommand = this.SFDXPath + " " + command;

      let actualOptions: ExecSyncOptions = {
        stdio: "pipe",
        env: this.getCommandEnv()
      };

      if (options !== undefined) {
        actualOptions = Object.assign(actualOptions, options);
      }

      try {
        let buffer = execSync(fullCommand, actualOptions);
        resolve((buffer as Buffer).toString("utf8"));
      } catch (e) {
        let message: string;
        if (e !== undefined && e.stderr !== undefined) {
          message = e["stderr"].toString("utf8");
        } else {
          message = e;
        }

        reject(message);
      }
    });
    return executePromise;
  }

  private getCommandEnv(): NodeJS.ProcessEnv {
    const env = process.env;
    // https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_env_variables.htm

    // Return everything has JSON.
    env["SFDX_CONTENT_TYPE"] = "JSON";

    //  Specify this variable when using the CLI with ssh or "headless" in a CI environment.
    env["SFDX_USE_GENERIC_UNIX_KEYCHAIN"] = "true";

    // Disable updates.
    env["SFDX_AUTOUPDATE_DISABLE"] = "true";

    return env;
  }
}
