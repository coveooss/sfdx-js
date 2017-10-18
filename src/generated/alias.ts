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
 * Options for the method list of class Alias.
 *
 * @export
 * @interface IAliasList
 */
export interface IAliasList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IAliasList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IAliasList
   */
  json?: Boolean
}

/**
 * Options for the method set of class Alias.
 *
 * @export
 * @interface IAliasSet
 */
export interface IAliasSet {
  /**
   * [Required] The key pair expression for the command
   * @type {IStringKeyPair[] | string[] | string}
   * @memberof IAliasSet
   */
  expression: IStringKeyPair[] | string[] | string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IAliasSet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IAliasSet
   */
  json?: Boolean
}

/**
 * Alias
 *
 * @export
 * @class Alias
 */
@apiNamespace("force")
@apiCommandClass("force:alias")
export class Alias {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * list username aliases for the Salesforce CLI
   * @returns {(Promise<Object | void>)}
   * @memberof Alias
   * @description Lists the aliases that the Salesforce CLI can use for various commands and tasks.
   * @example Example: 
   *    $ sfdx force:alias:list
   * force:alias:list [--json] [--loglevel <string>]
   */
  @apiCommand("list")
  public list(options?: IAliasList): Promise<Object | void> {
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
   * set username aliases for the Salesforce CLI
   * @returns {(Promise<Object | void>)}
   * @memberof Alias
   * @description Sets an alias that the Salesforce CLI can use for various commands and tasks.
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
  public set(options: IAliasSet): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      expression: "",
      loglevel: "--loglevel",
      json: "--json"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.set,
      options,
      parameterNamesToSwitchNames
    )
  }
}
