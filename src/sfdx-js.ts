import { ICommandExecutioner, CommandExecutioner } from "./core/commandExecutioner"
import { CommandRunner, CustomLogger } from "./core/commandRunner"
import { GeneratedClient } from "./generated/generatedClient"

export class Client extends GeneratedClient {
  private static defaultOptions: Object = { json: true }

  constructor(
    requestExecutioner?: ICommandExecutioner,
    useLiveLog: boolean = false,
    customLogger: CustomLogger = console
  ) {
    super()
    if (requestExecutioner === undefined) {
      const commandRunner = new CommandRunner("sfdx", useLiveLog, customLogger)
      this.requestExecutioner = new CommandExecutioner(commandRunner, Client.defaultOptions)
    } else {
      this.requestExecutioner = requestExecutioner
    }

    this.initializeModules()
  }

  public static createUsingPath(
    SFDXPath: string,
    useLiveLog: boolean = false,
    customLogger: CustomLogger = console
  ) {
    const commandRunner = new CommandRunner(SFDXPath, useLiveLog, customLogger)
    const requestExecutioner = new CommandExecutioner(commandRunner, Client.defaultOptions)

    return new Client(requestExecutioner)
  }
}
