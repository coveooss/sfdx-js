import { ICommandRunner } from "./commandRunner"
import { ResponseParser } from "./responseParser"
import { CommandBuilder } from "./commandBuilder"
import { ExecOptions } from "child_process"

export interface ICommandExecutioner {
  execute<T>(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: any,
    parameterNamesToSwitchNames: Object
  ): Promise<T | string | void>
}

export class CommandExecutioner implements ICommandExecutioner {
  constructor(
    private commandRunner: ICommandRunner,
    private defaultOptions?: Object,
    private commandOptions?: ExecOptions
  ) {}

  public async execute<T>(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: any,
    parameterNamesToSwitchNames: Object
  ): Promise<T | string | void> {
    let result = await this.internalExecute(
      requestClass,
      requestMethod,
      requestOptions,
      parameterNamesToSwitchNames
    )

    let responseParser = new ResponseParser()
    return responseParser.parse<T>(result)
  }

  private async internalExecute(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: any,
    parameterNamesToSwitchNames: Object
  ) {
    let requestBuilder = new CommandBuilder(
      requestClass,
      requestMethod,
      requestOptions,
      this.defaultOptions || {},
      parameterNamesToSwitchNames
    )
    let command = requestBuilder.build()

    let commandOptions: ExecOptions = {
      maxBuffer: 20000 * 1024
    }

    if (this.commandOptions !== undefined) {
      commandOptions = Object.assign(commandOptions, this.commandOptions)
    }

    return this.commandRunner.runCommand(command, commandOptions)
  }
}
