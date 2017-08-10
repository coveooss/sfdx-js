// Generated on August 9th 2017, 10:06:38 pm. DO NOT MODIFY
import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Alias
 *
 * @export
 * @class Alias
 */
@apiNamespace("force")
@apiCommandClass("alias")
export class Alias {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * list username aliases for sfdx
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @returns {(Promise<Object | void>)}
   * @memberof Alias
   * @description Lists the aliases that sfdx can use for various commands and tasks.
   * @example Example: 
   *    $ sfdx force:alias:list
   * force:alias:list [--json] [--loglevel <string>]
   */
  @apiCommand("list")
  public list(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.list, arguments)
  }

  /**
   * set username aliases for sfdx
   *
   * @param {IStringKeyPair[] | string[] | string} expression The key pair expression for the command 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @returns {(Promise<Object | void>)}
   * @memberof Alias
   * @description Sets an alias that sfdx can use for various commands and tasks.
   * @example You can associate an alias with only one username at a time. If you’ve set an alias multiple times, the alias points to the most recent username.
   * 
   * To delete an alias, run "sfdx force:alias:set" with no username.
   * 
   * Examples:
   *    $ sfdx force:alias:set DefaultOrg=me@my.org
   *    $ sfdx force:alias:set DefaultOrg=me@my.org DevHubOrg=me@myhub.org
   *    $ sfdx force:alias:set AliasToDelete=
   * force:alias:set name=value... [--json] [--loglevel <string>]
   */
  @apiCommand("set")
  public set(
    @apiParameter("") expression?: IStringKeyPair[] | string[] | string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.set, arguments)
  }
}
