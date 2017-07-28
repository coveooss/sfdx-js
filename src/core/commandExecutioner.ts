import { ICommandRunner } from "./commandRunner"
import { ResponseParser } from "./responseParser"
import { CommandBuilder } from "./commandBuilder"

export interface ICommandExecutioner {
  execute<T>(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ): Promise<T | void>
}

export class CommandExecutioner implements ICommandExecutioner {
  constructor(
    private commandRunner: ICommandRunner,
    private defaultOptions?: Object
  ) {}

  public async execute(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ): Promise<void>

  public async execute<T>(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ): Promise<T | void> {
    let result = await this.internalExecute(
      requestClass,
      requestMethod,
      requestOptions
    )

    if (result.stdout === undefined || !result.stdout) {
      return Promise.resolve()
    }

    let responseParser = new ResponseParser()
    return responseParser.parse<T>(result.stdout)
  }

  private async internalExecute(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ) {
    if (this.defaultOptions !== undefined) {
      requestOptions = Object.assign(requestOptions, this.defaultOptions)
    }

    let requestBuilder = new CommandBuilder(
      requestClass,
      requestMethod,
      requestOptions
    )
    let command = requestBuilder.build()

    return await this.commandRunner.runCommand(command)
  }
}
