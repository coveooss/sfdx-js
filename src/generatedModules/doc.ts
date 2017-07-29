import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Doc
 *
 * @export
 * @class Doc
 */
@apiNamespace("force")
@apiCommandClass("Doc")
export class Doc {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
    * display help for force commands
    *
    * @param {Boolean} json Format output as JSON. 
    * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
    * @returns {(Object)}
    * @memberof Doc
    * @description Displays help for force commands.
    * @example Displays help for force commands.
    * force:doc:commands:display [--json] [--loglevel <string>]
    */
  @apiCommand("commands:display")
  public commandsDisplay(
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
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
    * @param {Boolean} json Format output as JSON. 
    * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
    * @returns {(Object)}
    * @memberof Doc
    * @description Displays a list of force commands.
    * @example Displays a list of force commands and their descriptions.
    * force:doc:commands:list [--json] [--loglevel <string>]
    */
  @apiCommand("commands:list")
  public commandsList(
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.commandsList,
      arguments
    )
  }
}
