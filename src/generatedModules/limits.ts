import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Limits
 *
 * @export
 * @class Limits
 */
@apiNamespace("force")
@apiCommandClass("Limits")
export class Limits {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
    * display current org’s limits
    *
    * @param {string} targetusername Username for the target org. Overrides the default target org. 
    * @param {Boolean} json Format output as JSON. 
    * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
    * @returns {(Object)}
    * @memberof Limits
    * @description Displays remaining and maximum calls and events for your org.
    * @example When you execute this command in a project, it provides limit information for your default scratch org.
    * 
    * Examples:
    *    $ sfdx force:limits:api:display
    *    $ sfdx force:limits:api:display -u me@my.org
    * force:limits:api:display [-u <string>] [--json] [--loglevel <string>]
    */
  @apiCommand("api:display")
  public apiDisplay(
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.apiDisplay,
      arguments
    )
  }
}
