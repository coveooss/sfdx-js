// Generated on August 13th 2017, 10:03:34 pm. DO NOT MODIFY
import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Options for the method commandsDisplay of class Doc.
 *
 * @export
 * @interface IDocCommandsDisplay
 */
export interface IDocCommandsDisplay {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IDocCommandsDisplay
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IDocCommandsDisplay
   */
  json?: Boolean
}

/**
 * Options for the method commandsList of class Doc.
 *
 * @export
 * @interface IDocCommandsList
 */
export interface IDocCommandsList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IDocCommandsList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IDocCommandsList
   */
  json?: Boolean
}

/**
 * Doc
 *
 * @export
 * @class Doc
 */
@apiNamespace("force")
@apiCommandClass("doc")
export class Doc {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * display help for force commands
   * @returns {(Promise<Object | void>)}
   * @memberof Doc
   * @description Displays help for force commands.
   * @example Displays help for force commands.
   * force:doc:commands:display [--json] [--loglevel <string>]
   */
  @apiCommand("commands:display")
  public commandsDisplay(
    options?: IDocCommandsDisplay
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.commandsDisplay,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list the force commands
   * @returns {(Promise<Object | void>)}
   * @memberof Doc
   * @description Displays a list of force commands.
   * @example Displays a list of force commands and their descriptions.
   * force:doc:commands:list [--json] [--loglevel <string>]
   */
  @apiCommand("commands:list")
  public commandsList(options?: IDocCommandsList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.commandsList,
      options,
      parameterNamesToSwitchNames
    )
  }
}
