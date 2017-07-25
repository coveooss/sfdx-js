const { spawn } = require("child_process")

export class CommandRunner {
  constructor(private SFDXPath: string) {}

  public runCommand(command: string): string | undefined {
    const returnValue = spawn.child_process(this.SFDXPath + " " + command)

    return returnValue
  }
}
