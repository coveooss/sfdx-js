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
 * Options for the method apiDisplay of class Limits.
 *
 * @export
 * @interface ILimitsApiDisplay
 */
export interface ILimitsApiDisplay {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ILimitsApiDisplay
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ILimitsApiDisplay
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ILimitsApiDisplay
   */
  targetusername?: string
}

/**
 * Limits
 *
 * @export
 * @class Limits
 */
@apiNamespace("force")
@apiCommandClass("force:limits")
export class Limits {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * display current org’s limits
   * @returns {(Promise<Object | void>)}
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
  public apiDisplay(options?: ILimitsApiDisplay): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.apiDisplay,
      options,
      parameterNamesToSwitchNames
    )
  }
}
