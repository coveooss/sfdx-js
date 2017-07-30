import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Config
 *
 * @export
 * @class Config
 */
@apiNamespace("force")
@apiCommandClass("config")
export class Config {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * get config var value(s) for given name(s)
   *
   * @param {IStringKeyPair[] | string[] | string} expression The key pair expression for the command 
   * @param {Boolean} verbose Emit additional command output to stdout. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @returns {(Promise<Object | void>)}
   * @memberof Config
   * @description Gets the Salesforce CLI configuration values for your default scratch org, your default Dev Hub org, your default instance URL, or any combination of the three.
   * @example To see your default scratch org username, include "defaultusername".
   * To see your default Dev Hub, include "defaultdevhubusername".
   * To see your default instance URL, include "instanceUrl".
   * To see the locations where your values are set, include the --verbose flag.
   * 
   * Examples:
   *    $ sfdx force:config:get defaultusername
   *    $ sfdx force:config:get defaultusername defaultdevhubusername instanceUrl
   *    $ sfdx force:config:get defaultusername defaultdevhubusername --verbose
   * force:config:get name=value... [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("get")
  public get(
    @apiParameter("") expression?: IStringKeyPair[] | string[] | string,
    @apiParameter("--verbose") verbose?: Boolean,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.get, arguments)
  }

  /**
   * list config vars for sfdx
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @returns {(Promise<Object | void>)}
   * @memberof Config
   * @description Lists the config variables for sfdx.
   * @example Lists the config variables that the Salesforce CLI uses for various commands and tasks.
   * force:config:list [--json] [--loglevel <string>]
   */
  @apiCommand("list")
  public list(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.list, arguments)
  }

  /**
   * set config vars for sfdx
   *
   * @param {IStringKeyPair[] | string[] | string} expression The key pair expression for the command 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {Boolean} global Sets the configuration variables globally, so they can be used from any directory. 
   * @returns {(Promise<Object | void>)}
   * @memberof Config
   * @description Sets the local and global configuration variables for the Salesforce CLI.
   * @example Sets the configuration variables that the Salesforce CLI uses for various commands and tasks. Local variables apply only to your current project. Global variables apply in any directory.
   * 
   * Examples:
   *    $ sfdx force:config:set defaultusername=me@my.org defaultdevhubusername=me@myhub.org
   *    $ sfdx force:config:set defaultdevhubusername=me@myhub.org -g
   * force:config:set name=value... [-g] [--json] [--loglevel <string>]
   */
  @apiCommand("set")
  public set(
    @apiParameter("") expression: IStringKeyPair[] | string[] | string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--global") global?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.set, arguments)
  }
}
