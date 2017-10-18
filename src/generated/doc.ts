// Generated on October 18th 2017, 10:16:43 am. DO NOT MODIFY
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
@apiCommandClass("force:doc")
export class Doc {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * display help for force commands
   * @returns {(Promise<Object | void>)}
   * @memberof Doc
   * @description Displays help for commands in the force namespace.
   * @example Displays --help output for commands in the force namespace.
   * To display more details about the commands’ parameters, include the --json flag.
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
   * @description Lists the commands in the force namespace.
   * @example Displays a list of commands in the force namespace and their descriptions.
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
