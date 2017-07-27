import { ICommandRunner } from "./commandRunner"
import { ResponseParser } from "./responseParser"
import { CommandBuilder } from "./commandBuilder"

export interface ICommandExecutioner {
  execute<T>(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ): Promise<T | undefined>
}

export class CommandExecutioner implements ICommandExecutioner {
  constructor(
    private commandRunner: ICommandRunner,
    private defaultOptions?: Object
  ) {}

  public execute<T>(
    requestClass: Object,
    requestMethod: Function,
    requestOptions: IArguments
  ): Promise<T | undefined> {
    if (this.defaultOptions !== undefined) {
      requestOptions = Object.assign(requestOptions, this.defaultOptions)
    }

    let requestBuilder = new CommandBuilder(
      requestClass,
      requestMethod,
      requestOptions
    )
    let command = requestBuilder.build()

    let executePromise = new Promise<T | undefined>((resolve, reject) => {
      let responsePromise = this.commandRunner.runCommand(command)
      responsePromise.then(result => {
        if (result.stderr !== undefined) {
          reject(result.stderr)
          return
        }

        // Let's parse the response.
        if (result.stdout === undefined) {
          resolve(undefined)
        } else {
          let responseParser = new ResponseParser()
          resolve(responseParser.parse<T>(result.stdout))
        }
      })
    })

    return executePromise
  }
}
