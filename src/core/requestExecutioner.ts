import { CommandRunner } from "./commandRunner"
import { ResponseParser } from "./responseParser"
import { RequestBuilder } from "./requestBuilder"

export class RequestExecutioner {
  constructor(private commandRunner: CommandRunner) {}

  public execute<T>(requestClass: any, requestObject: any): T | undefined {
    let requestBuilder = new RequestBuilder(requestObject, requestClass)
    let command = requestBuilder.build()
    let response = this.commandRunner.runCommand(command)

    // Let's parse the response.
    if (response === undefined) {
      return undefined
    } else {
      let responseParser = new ResponseParser()
      return responseParser.parse(response)
    }
  }
}
