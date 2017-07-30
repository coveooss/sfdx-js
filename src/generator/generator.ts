import { ICommandRunner } from "../core/commandRunner"
import { ResponseParser } from "../core/responseParser"
import { RootObject, Result, Flag } from "./rootObject"
import {
  IClassDefinition,
  IFunctionDefinition,
  IParameterDefinition
} from "./templates/classDefinition"
import * as fs from "fs-extra"
import * as _ from "underscore"
import * as path from "path"

export class Generator {
  templateHelpers: any = {}
  constructor(private commandRunner: ICommandRunner) {
    this.initializeTemplateHelpers()
  }

  public async generate(json?: string) {
    // If no JSON is passed, use SFDX to gather it.
    if (json === undefined) {
      const commandResult = await this.commandRunner.runCommand(
        "force:doc:commands:display --json"
      )
      if (commandResult.stderr !== undefined) {
        throw new Error(commandResult.stderr)
      }
      json = commandResult.stdout
    }

    const responseParser = new ResponseParser()
    const rootObject = responseParser.parse<RootObject>(json)
    const classDefinitions: { [id: string]: IClassDefinition } = {}
    rootObject.result.forEach(result => {
      if (!result.command) {
        return
      }

      let className = this.capitalizeFirstLetter(result.topic)

      // Check if existing, else creates it.
      if (!classDefinitions[className]) {
        classDefinitions[className] = {
          apiCommandClass: className,
          className: className,
          fileName: result.topic,
          functionDefinitions: []
        }
      }

      let functionDefinition: IFunctionDefinition = {
        apiCommand: result.command,
        name: this.extractFunctionNameFromCommand(result.command),
        parameters: this.extractParameters(result),
        returnType: this.extractReturnType(result),
        shortDescription: result.description,
        description: result.longDescription,
        example: result.usage,
        help: result.help
      }

      let classNameDefinition = classDefinitions[className]
      classNameDefinition.functionDefinitions.push(functionDefinition)
    })

    const templateFile = fs
      .readFileSync(path.resolve(__dirname, "./templates/class.ejs"))
      .toString()
    const classTemplate = _.template(templateFile)

    console.log("Cleaning generated modules.")
    const directoryPath = path.resolve(__dirname, "../generatedModules")
    try {
      fs.removeSync(directoryPath)
    } catch (e) {
      // Ignore
    }

    fs.mkdirSync(directoryPath)

    _.forEach(classDefinitions, classDefinition => {
      let classImplementation = classTemplate(
        this.addTemplateHelper(classDefinition)
      )
      fs.writeFileSync(
        path.resolve(
          __dirname,
          "../generatedModules/" + classDefinition.fileName + ".ts"
        ),
        classImplementation
      )
    })
  }

  private extractParameters(result: Result): IParameterDefinition[] {
    return _.map(result.flags, flag => {
      let parameter: IParameterDefinition = {
        name: flag.name,
        flagKey: "--" + flag.name,
        type: this.extractType(flag),
        description: flag.longDescription,
        optional: !flag.required
      }

      return parameter
    }).sort(param => (param.optional ? 1 : -1))
  }

  private extractReturnType(result: Result) {
    return "Object"
  }

  private extractType(flag: Flag): string {
    if (flag.type === "flag") {
      return "Boolean"
    }

    return "string"
  }

  private extractApiCommandFromCommand(command: string): string {
    const splitElements = command.split(":")
    return splitElements.slice(1, splitElements.length).join(":")
  }

  private extractFunctionNameFromCommand(command: string): string {
    const commandParts = command.split(":")
    return _.union(
      [commandParts[0]],
      _.map(commandParts.splice(1), element => {
        return this.capitalizeFirstLetter(element)
      })
    ).join("")
  }

  private capitalizeFirstLetter(element: string): string {
    return element.charAt(0).toUpperCase() + element.slice(1)
  }

  private addTemplateHelper(element: Object): any {
    return _.extend({}, element, this.templateHelpers)
  }

  private initializeTemplateHelpers() {
    this.templateHelpers.escapeForComments = this.escapeForComments
  }

  private escapeForComments(element: string) {
    return element.replace(/\*\//g, "* /").replace(/\n/g, "\n   * ")
  }
}
