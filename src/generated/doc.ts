// Generated on July 30th 2017, 5:53:28 pm. DO NOT MODIFY
import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

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
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @returns {(Promise<Object | void>)}
   * @memberof Doc
   * @description Displays help for force commands.
   * @example Displays help for force commands.
   * force:doc:commands:display [--json] [--loglevel <string>]
   */
  @apiCommand("commands:display")
  public commandsDisplay(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.commandsDisplay,
      arguments
    )
  }

  /**
   * list the force commands
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @returns {(Promise<Object | void>)}
   * @memberof Doc
   * @description Displays a list of force commands.
   * @example Displays a list of force commands and their descriptions.
   * force:doc:commands:list [--json] [--loglevel <string>]
   */
  @apiCommand("commands:list")
  public commandsList(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.commandsList,
      arguments
    )
  }
}
