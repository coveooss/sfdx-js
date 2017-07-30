import { exec, ExecOptions } from "child_process"
import * as _ from "underscore"

export interface ICommandRunner {
  runCommand(command: string, options?: ExecOptions): Promise<string>
}

export class CommandRunner implements ICommandRunner {
  constructor(private SFDXPath: string) {}

  public runCommand(command: string, options?: ExecOptions): Promise<string> {
    let executePromise = new Promise<string>((resolve, reject) => {
      const fullCommand = this.SFDXPath + " " + command
      exec(fullCommand, (error, stdout, stderr) => {
        if (!_.isEmpty(stderr) || error !== null) {
          console.log(error)
          console.log(stderr)
          reject(error)
        } else {
          resolve(stdout)
        }
      })
    })
    return executePromise
  }
}
