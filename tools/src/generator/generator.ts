import { RootObject, Result, Flag } from "./rootObject";
import {
  IClassDefinition,
  IFunctionDefinition,
  IParameterDefinition,
  IClassDefinitions
} from "./templates/classDefinition";
import * as fs from "fs-extra";
import * as _ from "underscore";
import * as path from "path";
import * as moment from "moment";
import { exec, ExecOptions } from "child_process";

export class Generator {
  templateHelpers: any = {};
  constructor(
    private SFDXPath: string = "sfdx",
    private rootDirectory: string = path.resolve(__dirname, "./../..")
  ) {
    this.initializeTemplateHelpers();
  }

  public async generate(json?: string) {
    // If no JSON is passed, use SFDX to gather it.
    if (json === undefined) {
      const commandResult = await this.runCommand("force:doc:commands:display --json");

      json = commandResult;
    }

    const rootObject = this.parse<RootObject>(json);
    const classDefinitions: { [id: string]: IClassDefinition } = {};
    rootObject.result.forEach(result => {
      if (!result.command) {
        return;
      }

      let className = this.capitalizeFirstLetter(this.extractClassNameFromTopic(result.topic));

      // Check if existing, else creates it.
      if (!classDefinitions[className]) {
        classDefinitions[className] = {
          apiCommandClass: result.topic,
          className: className,
          fileName: this.extractClassNameFromTopic(result.topic),
          functionDefinitions: []
        };
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
      };

      let classNameDefinition = classDefinitions[className];
      classNameDefinition.functionDefinitions.push(functionDefinition);
    });

    const templateFile = fs
      .readFileSync(path.resolve(this.rootDirectory, "./tools/src/generator/templates/class.ejs"))
      .toString();
    const classTemplate = _.template(templateFile);

    // Cleaning generated modules.
    const directoryPath = path.resolve(this.rootDirectory, "./src/generated");
    try {
      fs.removeSync(directoryPath);
    } catch (e) {
      // Ignore
    }

    fs.mkdirSync(directoryPath);

    _.forEach(classDefinitions, classDefinition => {
      let classImplementation = classTemplate(this.addTemplateHelper(classDefinition));
      fs.writeFileSync(
        path.resolve(this.rootDirectory, "./src/generated/" + classDefinition.fileName + ".ts"),
        classImplementation
      );
    });

    let classDefinitionsTemplateElement: IClassDefinitions = {
      classDefinitions: _.map(classDefinitions, element => element)
    };

    const templateSFDXFile = fs
      .readFileSync(
        path.resolve(this.rootDirectory, "./tools/src/generator/templates/sfdxClass.ejs")
      )
      .toString();
    const sfdxClassTemplate = _.template(templateSFDXFile);

    fs.writeFileSync(
      path.resolve(this.rootDirectory, "./src/generated/generatedClient.ts"),
      sfdxClassTemplate(this.addTemplateHelper(classDefinitionsTemplateElement))
    );
  }

  private extractParameters(result: Result): IParameterDefinition[] {
    let parameters = _.map(result.flags, flag => {
      let parameter: IParameterDefinition = {
        name: flag.name,
        flagKey: "--" + flag.name,
        type: this.extractType(flag),
        description: flag.longDescription,
        optional: !flag.required
      };

      return parameter;
    });

    if (result.variableArgs) {
      parameters.push({
        name: "expression",
        description: "The key pair expression for the command",
        flagKey: "",
        optional: !result.variableArgsRequired,
        type: "IStringKeyPair[] | string[] | string"
      });
    }
    return parameters.sort((a, b) => {
      if (a.optional && b.optional) {
        // Empty flag key should always be on top of other optional parameters.
        if (a.flagKey === "") {
          return -1;
        }
      }
      return a.optional ? 1 : -1;
    });
  }

  private extractReturnType(result: Result) {
    return "Object";
  }

  private extractType(flag: Flag): string {
    if (flag.type === "flag") {
      return "Boolean";
    }

    if (flag.name === "loglevel") {
      return "loglevel";
    }

    return "string";
  }

  private extractApiCommandFromCommand(command: string): string {
    const splitElements = command.split(":");
    return splitElements.slice(1, splitElements.length).join(":");
  }

  private extractClassNameFromTopic(topic: string): string {
    const topicParts = topic.split(":");
    return topicParts[1];
  }

  private extractFunctionNameFromCommand(command: string): string {
    const commandParts = command.split(":");
    return _.union(
      [commandParts[0]],
      _.map(commandParts.splice(1), element => {
        return this.capitalizeFirstLetter(element);
      })
    ).join("");
  }

  private capitalizeFirstLetter(element: string): string {
    return element.charAt(0).toUpperCase() + element.slice(1);
  }

  private addTemplateHelper(element: Object): any {
    return _.extend({}, element, this.templateHelpers);
  }

  private initializeTemplateHelpers() {
    this.templateHelpers.escapeForComments = this.escapeForComments;
    this.templateHelpers.getCurrentFormatedDate = this.getCurrentFormatedDate;
    this.templateHelpers.capitalizeFirstLetter = this.capitalizeFirstLetter;
    this.templateHelpers.isAllOptionalParameters = this.isAllOptionalParameters;
  }

  private isAllOptionalParameters(parameters: IParameterDefinition[]): Boolean {
    let allOptional: Boolean = true;
    _.each(parameters, param => {
      allOptional = allOptional && param.optional;
    });

    return allOptional;
  }

  private escapeForComments(element: string, numberOfSpaces: number = 3) {
    if (element === undefined) {
      return element;
    }
    const spaces: string = new Array(numberOfSpaces + 1).join(" ");
    return element.replace(/\*\//g, "* /").replace(/\n/g, "\n" + spaces + "* ");
  }

  private getCurrentFormatedDate(): string {
    // Something is weird with moment and typescript. We must call default on the function.
    // https://github.com/aurelia/skeleton-navigation/issues/606
    return moment().format("MMMM Do YYYY, h:mm:ss a");
  }

  private parse<T>(response: string): T {
    // For now it's realllly easy, but maybe someday we'll have to remove some stuff or handle more complex stuff.
    let returnValue: T = JSON.parse(response);

    return returnValue;
  }

  private runCommand(command: string, options?: ExecOptions): Promise<string> {
    let executePromise = new Promise<string>((resolve, reject) => {
      const fullCommand = this.SFDXPath + " " + command;
      exec(fullCommand, (error, stdout, stderr) => {
        if (!_.isEmpty(stderr) || error !== null) {
          console.log(error);
          console.log(stderr);
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
    return executePromise;
  }
}
