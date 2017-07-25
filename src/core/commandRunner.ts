import { exec, ExecResult } from "process-promises"
import { PromiseWithEvents } from "process-promises/lib/PromiseWithEvents"

export interface ICommandRunner {
  runCommand(command: string): PromiseWithEvents<ExecResult>
}

export class CommandRunner implements ICommandRunner {
  constructor(private SFDXPath: string) {}

  public runCommand(command: string): PromiseWithEvents<ExecResult> {
    const fullCommand = this.SFDXPath + " " + command
    return exec(fullCommand)
  }
}
