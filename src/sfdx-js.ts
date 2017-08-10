import {
  ICommandExecutioner,
  CommandExecutioner
} from "./core/commandExecutioner"
import { CommandRunner } from "./core/commandRunner"
import { GeneratedClient } from "./generated/generatedClient"

export class Client extends GeneratedClient {
  private static defaultOptions: Object = { json: true }

  constructor(requestExecutioner?: ICommandExecutioner) {
    super()
    if (requestExecutioner === undefined) {
      const commandRunner = new CommandRunner("sfdx")
      this.requestExecutioner = new CommandExecutioner(
        commandRunner,
        Client.defaultOptions
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
      Client.defaultOptions
    )

    return new Client(requestExecutioner)
  }
}
