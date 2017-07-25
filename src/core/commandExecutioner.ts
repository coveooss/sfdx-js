import { CommandRunner } from "./commandRunner"
import { ResponseParser } from "./responseParser"
import { CommandBuilder } from "./commandBuilder"

export class CommandExecutioner {
  constructor(
    private commandRunner: CommandRunner,
    private defaultOptions?: Object
  ) {}

  public execute<T>(
    requestClass: any,
    requestObject: any
  ): Promise<T | undefined> {
    if (this.defaultOptions !== undefined) {
      requestObject = Object.assign(requestObject, this.defaultOptions)
    }

    let requestBuilder = new CommandBuilder(requestObject, requestClass)
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
