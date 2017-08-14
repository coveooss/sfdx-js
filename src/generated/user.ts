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
 * Options for the method passwordGenerate of class User.
 *
 * @export
 * @interface IUserPasswordGenerate
 */
export interface IUserPasswordGenerate {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IUserPasswordGenerate
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IUserPasswordGenerate
   */
  json?: Boolean

  /**
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
   * @type {string}
   * @memberof IUserPasswordGenerate
   */
  targetdevhubusername?: string

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IUserPasswordGenerate
   */
  targetusername?: string
}

/**
 * Options for the method permsetAssign of class User.
 *
 * @export
 * @interface IUserPermsetAssign
 */
export interface IUserPermsetAssign {
  /**
   * [Required] The name of the permission set to assign.
   * @type {string}
   * @memberof IUserPermsetAssign
   */
  permsetname: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IUserPermsetAssign
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IUserPermsetAssign
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IUserPermsetAssign
   */
  targetusername?: string
}

/**
 * User
 *
 * @export
 * @class User
 */
@apiNamespace("force")
@apiCommandClass("user")
export class User {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * generate a password for a scratch org
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Generates a password for a scratch org.
   * @example Generates a random password and sets it for the user of a scratch org.
   * 
   * If you haven’t set a default Dev Hub, or if your scratch org isn’t associated with your default Dev Hub, --targetdevhubusername is required.
   * 
   * To see a password that was previously generated, run "sfdx force:org:display".
   * force:user:password:generate [-u <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("password:generate")
  public passwordGenerate(
    options?: IUserPasswordGenerate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.passwordGenerate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * assign a permission set to the admin user of an org
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Assigns a named permission set to the admin user of an org.
   * @example Examples:
   *    $ sfdx force:user:permset:assign -n DreamHouse
   *    $ sfdx force:user:permset:assign -n DreamHouse -u me@my.org
   *    $ sfdx force:user:permset:assign -n DreamHouse -u TestOrg1
   * force:user:permset:assign -n <string> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("permset:assign")
  public permsetAssign(options: IUserPermsetAssign): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      permsetname: "--permsetname",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.permsetAssign,
      options,
      parameterNamesToSwitchNames
    )
  }
}
