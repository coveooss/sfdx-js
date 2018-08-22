import { ICommandRunner } from "./commandRunner"
import { ResponseParser } from "./responseParser"
import { CommandBuilder } from "./commandBuilder"
import { ExecSyncOptions } from "child_process"

export enum LogLevel {
  none = 0,
  error = 1,
  warning = 2,
  log = 4,
  trace = 5
}

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
    private commandOptions?: ExecSyncOptions,
    private logLevel = LogLevel.none
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

    let commandOptions: ExecSyncOptions = {
      maxBuffer: 20000 * 1024
    }

    if (this.commandOptions !== undefined) {
      commandOptions = Object.assign(commandOptions, this.commandOptions)
    }

    return this.commandRunner.runCommand(command, commandOptions)
  }
}
