import {
  ICommandExecutioner,
  CommandExecutioner
} from "./core/CommandExecutioner"
import { CommandRunner } from "./core/commandRunner"
import { Apex } from "./generatedModules/apex"

export class SFDX {
  private static defaultOptions: Object = { json: true }

  public apex: Apex

  private requestExecutioner: ICommandExecutioner

  constructor(requestExecutioner?: ICommandExecutioner) {
    if (requestExecutioner === undefined) {
      const commandRunner = new CommandRunner("sfdx")
      this.requestExecutioner = new CommandExecutioner(
        commandRunner,
        SFDX.defaultOptions
      )
    } else {
      this.requestExecutioner = requestExecutioner
    }

    this.apex = new Apex(this.requestExecutioner)
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
