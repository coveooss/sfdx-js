import { ICommandRunner } from "../core/commandRunner"
import { ResponseParser } from "../core/responseParser"
import { RootObject } from "./rootObject"

export class Generator {
  constructor(private commandRunner: ICommandRunner) {}

  public async generate(json?: string) {
    // If no JSON is passed, use SFDX to gather it.
    if (json === undefined) {
      let result = await this.commandRunner.runCommand(
        "force:doc:commands:display --json"
      )
      if (result.stderr !== undefined) {
        throw new Error(result.stderr)
      }
      json = result.stdout
    }

    let responseParser = new ResponseParser()
    let rootObject = responseParser.parse<RootObject>(json)
  }
}
