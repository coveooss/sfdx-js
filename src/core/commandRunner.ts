import { exec, ExecResult } from "process-promises"

export interface ICommandRunner {
  runCommand(command: string): Promise<ExecResult>
}

export class CommandRunner implements ICommandRunner {
  constructor(private SFDXPath: string) {}

  public runCommand(command: string): Promise<ExecResult> {
    let executePromise = new Promise<ExecResult>((resolve, reject) => {
      const fullCommand = this.SFDXPath + " " + command
      exec(fullCommand).then(result => {
        if (result.stderr !== undefined) {
          reject(result.stderr)
          return
        }

        // Let's parse the response.
        if (result.stdout === undefined) {
          resolve(undefined)
        } else {
          resolve(result)
        }
      })
    })
    return executePromise
  }
}
