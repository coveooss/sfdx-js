import {
  ICommandExecutioner,
  CommandExecutioner
} from "./core/CommandExecutioner"
import { CommandRunner } from "./core/commandRunner"
import { GeneratedSFDX } from "./generated/generatedSFDX"

export class SFDX extends GeneratedSFDX {
  private static defaultOptions: Object = { json: true }

  constructor(requestExecutioner?: ICommandExecutioner) {
    super()
    if (requestExecutioner === undefined) {
      const commandRunner = new CommandRunner("sfdx")
      this.requestExecutioner = new CommandExecutioner(
        commandRunner,
        SFDX.defaultOptions
      )
    } else {
      this.requestExecutioner = requestExecutioner
    }

    this.initializeModules()
  }

  public static createUsingPath(SFDXPath: string) {
    const commandRunner = new CommandRunner(SFDXPath)
    const requestExecutioner = new CommandExecutioner(
      commandRunner,
      SFDX.defaultOptions
    )

    return new SFDX(requestExecutioner)
  }
}
