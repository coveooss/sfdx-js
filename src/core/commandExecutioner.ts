import { ICommandRunner } from "./commandRunner"
import { ResponseParser } from "./responseParser"
import { CommandBuilder } from "./commandBuilder"

export interface ICommandExecutioner {
  execute(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ): Promise<void>

  execute<T>(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ): Promise<T | string | void>
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
  ): Promise<T | string | void> {
    let result = await this.internalExecute(
      requestClass,
      requestMethod,
      requestOptions
    )

    let responseParser = new ResponseParser()
    return responseParser.parse<T>(result)
  }

  private async internalExecute(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ) {
    let requestBuilder = new CommandBuilder(
      requestClass,
      requestMethod,
      requestOptions,
      this.defaultOptions
    )
    let command = requestBuilder.build()

    return await this.commandRunner.runCommand(command)
  }
}
