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
 * Options for the method get of class Config.
 *
 * @export
 * @interface IConfigGet
 */
export interface IConfigGet {
  /**
   * [Optional] The key pair expression for the command
   * @type {IStringKeyPair[] | string[] | string}
   * @memberof IConfigGet
   */
  expression?: IStringKeyPair[] | string[] | string

  /**
   * [Optional] Emit additional command output to stdout.
   * @type {Boolean}
   * @memberof IConfigGet
   */
  verbose?: Boolean

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IConfigGet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IConfigGet
   */
  json?: Boolean
}

/**
 * Options for the method list of class Config.
 *
 * @export
 * @interface IConfigList
 */
export interface IConfigList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IConfigList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IConfigList
   */
  json?: Boolean
}

/**
 * Options for the method set of class Config.
 *
 * @export
 * @interface IConfigSet
 */
export interface IConfigSet {
  /**
   * [Required] The key pair expression for the command
   * @type {IStringKeyPair[] | string[] | string}
   * @memberof IConfigSet
   */
  expression: IStringKeyPair[] | string[] | string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IConfigSet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IConfigSet
   */
  json?: Boolean

  /**
   * [Optional] Sets the configuration variables globally, so they can be used from any directory.
   * @type {Boolean}
   * @memberof IConfigSet
   */
  global?: Boolean
}

/**
 * Config
 *
 * @export
 * @class Config
 */
@apiNamespace("force")
@apiCommandClass("force:config")
export class Config {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * get config var values for given names
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
  public get(options?: IConfigGet): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      expression: "",
      verbose: "--verbose",
      loglevel: "--loglevel",
      json: "--json"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.get,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list config vars for the Salesforce CLI
   * @returns {(Promise<Object | void>)}
   * @memberof Config
   * @description Lists the configuration variables for the Salesforce CLI.
   * @example Lists the config variables that the Salesforce CLI uses for various commands and tasks.
   * force:config:list [--json] [--loglevel <string>]
   */
  @apiCommand("list")
  public list(options?: IConfigList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.list,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * set config vars for the Salesforce CLI
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
  public set(options: IConfigSet): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      expression: "",
      loglevel: "--loglevel",
      json: "--json",
      global: "--global"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.set,
      options,
      parameterNamesToSwitchNames
    )
  }
}
