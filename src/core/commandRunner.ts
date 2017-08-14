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

      try {
        let buffer = execSync(fullCommand, options)
        resolve((buffer as Buffer).toString("utf8"))
      } catch (e) {
        reject(e)
      }
    })
    return executePromise
  }
}
