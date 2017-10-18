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
 * Options for the method create of class User.
 *
 * @export
 * @interface IUserCreate
 */
export interface IUserCreate {
  /**
   * [Optional] The key pair expression for the command
   * @type {IStringKeyPair[] | string[] | string}
   * @memberof IUserCreate
   */
  expression?: IStringKeyPair[] | string[] | string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IUserCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IUserCreate
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IUserCreate
   */
  targetdevhubusername?: string

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IUserCreate
   */
  targetusername?: string

  /**
   * [Optional] Sets an alias for the created username to reference within the CLI.
   * @type {string}
   * @memberof IUserCreate
   */
  setalias?: string

  /**
   * [Optional] File path to a user definition.
   * @type {string}
   * @memberof IUserCreate
   */
  definitionfile?: string
}

/**
 * Options for the method display of class User.
 *
 * @export
 * @interface IUserDisplay
 */
export interface IUserDisplay {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IUserDisplay
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IUserDisplay
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IUserDisplay
   */
  targetdevhubusername?: string

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IUserDisplay
   */
  targetusername?: string
}

/**
 * Options for the method list of class User.
 *
 * @export
 * @interface IUserList
 */
export interface IUserList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IUserList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IUserList
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IUserList
   */
  targetdevhubusername?: string

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IUserList
   */
  targetusername?: string
}

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
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IUserPasswordGenerate
   */
  targetdevhubusername?: string

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IUserPasswordGenerate
   */
  targetusername?: string

  /**
   * [Optional] A comma-separated list of usernames for which to generate passwords.
   * @type {string}
   * @memberof IUserPasswordGenerate
   */
  onbehalfof?: string
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
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IUserPermsetAssign
   */
  targetusername?: string

  /**
   * [Optional] Comma-separated list of usernames or aliases to assign the permission set to.
   * @type {string}
   * @memberof IUserPermsetAssign
   */
  onbehalfof?: string
}

/**
 * User
 *
 * @export
 * @class User
 */
@apiNamespace("force")
@apiCommandClass("force:user")
export class User {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a user for a scratch org
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Creates a user for a scratch org.
   * @example Create a user for a scratch org, optionally setting an alias for use by the CLI, assigning permission sets (e.g., permsets=ps1,ps2), generating a password (e.g., generatepassword=true), and setting User sObject fields.
   * 
   * Examples:
   *    $ sfdx force:user:create
   *    $ sfdx force:user:create -a testuser1 -f config/project-user-def.json
   *    $ sfdx force:user:create username=testuser1@my.org email=me@my.org permsets=DreamHouse
   *    $ sfdx force:user:create -f config/project-user-def.json email=me@my.org generatepassword=true
   * force:user:create name=value... [-f <filepath>] [-a <string>] [-u <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("create")
  public create(options?: IUserCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      expression: "",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      targetusername: "--targetusername",
      setalias: "--setalias",
      definitionfile: "--definitionfile"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.create,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * displays information about a user of a scratch org
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Displays information about a user of a scratch org that the Salesforce CLI has created or authenticated.
   * @example Output includes the profile name, org ID, access token, instance URL, login URL, and alias if applicable.
   * Examples:
   *    $ sfdx force:user:display
   *    $ sfdx force:user:display -u me@my.org --json
   * force:user:display [-u <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("display")
  public display(options?: IUserDisplay): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.display,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * lists all users of a scratch org
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Lists all users of a scratch org that the Salesforce CLI has created or authenticated.
   * @example The original scratch org admin is marked with "(A)"
   * Examples:
   *    $ sfdx force:user:list
   *    $ sfdx force:user:list -u me@my.org --json
   *    $ sfdx force:user:list --json > tmp/MyUserList.json
   * force:user:list [-u <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("list")
  public list(options?: IUserList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.list,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * generate a password for scratch org users
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Generates a password for scratch org users. Targets the usernames listed with the --onbehalfof parameter or the --targetusername parameter. Defaults to the defaultusername.
   * @example Generates and sets a random password for one or more scratch org users.
   * 
   * If you haven’t set a default Dev Hub, or if your scratch org isn’t associated with your default Dev Hub, --targetdevhubusername is required.
   * 
   * To see a password that was previously generated, run "sfdx force:user:display".
   * 
   * Examples:
   *    $ sfdx force:user:password:generate
   *    $ sfdx force:user:password:generate -u me@my.org --json
   *    $ sfdx force:user:password:generate -o user1@my.org,user2@my.org,user3@my.org
   * force:user:password:generate [-o <string>...] [-u <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("password:generate")
  public passwordGenerate(
    options?: IUserPasswordGenerate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      targetusername: "--targetusername",
      onbehalfof: "--onbehalfof"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.passwordGenerate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * assign a permission set to one or more users of an org
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Assigns a named permission set to one or more users of an org.
   * @example Defaults to the defaultusername.
   * 
   * Examples:
   *    $ sfdx force:user:permset:assign -n DreamHouse
   *    $ sfdx force:user:permset:assign -n DreamHouse -u me@my.org
   *    $ sfdx force:user:permset:assign -n DreamHouse -o user1@my.org,user2,user3
   * force:user:permset:assign -n <string> [-o <string>...] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("permset:assign")
  public permsetAssign(options: IUserPermsetAssign): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      permsetname: "--permsetname",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      onbehalfof: "--onbehalfof"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.permsetAssign,
      options,
      parameterNamesToSwitchNames
    )
  }
}
