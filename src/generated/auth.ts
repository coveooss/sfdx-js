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
 * Options for the method jwtGrant of class Auth.
 *
 * @export
 * @interface IAuthJwtGrant
 */
export interface IAuthJwtGrant {
  /**
   * [Required] The authentication username.
   * @type {string}
   * @memberof IAuthJwtGrant
   */
  username: string

  /**
   * [Required] Path to a file containing the private key.
   * @type {string}
   * @memberof IAuthJwtGrant
   */
  jwtkeyfile: string

  /**
   * [Required] The OAuth client ID (sometimes referred to as the consumer key).
   * @type {string}
   * @memberof IAuthJwtGrant
   */
  clientid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IAuthJwtGrant
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IAuthJwtGrant
   */
  json?: Boolean

  /**
   * [Optional] Sets an alias for the authenticated org.
   * @type {string}
   * @memberof IAuthJwtGrant
   */
  setalias?: string

  /**
   * [Optional] Sets the authenticated org as the default username that all commands run against.
   * @type {Boolean}
   * @memberof IAuthJwtGrant
   */
  setdefaultusername?: Boolean

  /**
   * [Optional] Sets the authenticated org as the default Dev Hub org for scratch org creation.
   * @type {Boolean}
   * @memberof IAuthJwtGrant
   */
  setdefaultdevhubusername?: Boolean

  /**
   * [Optional] The login URL of the Salesforce instance that the org lives on.
   * @type {string}
   * @memberof IAuthJwtGrant
   */
  instanceurl?: string
}

/**
 * Options for the method sfdxurlStore of class Auth.
 *
 * @export
 * @interface IAuthSfdxurlStore
 */
export interface IAuthSfdxurlStore {
  /**
   * [Required] Path to a file containing the SFDX URL.
   * @type {string}
   * @memberof IAuthSfdxurlStore
   */
  sfdxurlfile: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IAuthSfdxurlStore
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IAuthSfdxurlStore
   */
  json?: Boolean

  /**
   * [Optional] Sets an alias for the authenticated org.
   * @type {string}
   * @memberof IAuthSfdxurlStore
   */
  setalias?: string

  /**
   * [Optional] Sets the authenticated org as the default username that all commands run against.
   * @type {Boolean}
   * @memberof IAuthSfdxurlStore
   */
  setdefaultusername?: Boolean

  /**
   * [Optional] Sets the authenticated org as the default Dev Hub org for scratch org creation.
   * @type {Boolean}
   * @memberof IAuthSfdxurlStore
   */
  setdefaultdevhubusername?: Boolean
}

/**
 * Options for the method webLogin of class Auth.
 *
 * @export
 * @interface IAuthWebLogin
 */
export interface IAuthWebLogin {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IAuthWebLogin
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IAuthWebLogin
   */
  json?: Boolean

  /**
   * [Optional] Disables masking of user input (for use with problematic terminals).
   * @type {Boolean}
   * @memberof IAuthWebLogin
   */
  disablemasking?: Boolean

  /**
   * [Optional] Sets an alias for the authenticated org.
   * @type {string}
   * @memberof IAuthWebLogin
   */
  setalias?: string

  /**
   * [Optional] Sets the authenticated org as the default username that all commands run against.
   * @type {Boolean}
   * @memberof IAuthWebLogin
   */
  setdefaultusername?: Boolean

  /**
   * [Optional] Sets the authenticated org as the default Dev Hub org for scratch org creation.
   * @type {Boolean}
   * @memberof IAuthWebLogin
   */
  setdefaultdevhubusername?: Boolean

  /**
   * [Optional] The login URL of the Salesforce instance that the org lives on.
   * @type {string}
   * @memberof IAuthWebLogin
   */
  instanceurl?: string

  /**
   * [Optional] The OAuth client ID (sometimes referred to as the consumer key).
   * @type {string}
   * @memberof IAuthWebLogin
   */
  clientid?: string
}

/**
 * Auth
 *
 * @export
 * @class Auth
 */
@apiNamespace("force")
@apiCommandClass("auth")
export class Auth {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * authorize an org using the jwt flow
   * @returns {(Promise<Object | void>)}
   * @memberof Auth
   * @description Authorizes a Salesforce org using the JWT flow.
   * @example Authorizes a Salesforce org using a private key file that has been uploaded to a personal connected app.
   * 
   * Examples:
   *    $ sfdx force:auth:jwt:grant -u me@my.org -f <path to jwt key file> -i <oauth client id>
   *    $ sfdx force:auth:jwt:grant -u me@my.org -f <path to jwt key file> -i <oauth client id> -s -a MyDefaultOrg
   * force:auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("jwt:grant")
  public jwtGrant(options: IAuthJwtGrant): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      username: "--username",
      jwtkeyfile: "--jwtkeyfile",
      clientid: "--clientid",
      loglevel: "--loglevel",
      json: "--json",
      setalias: "--setalias",
      setdefaultusername: "--setdefaultusername",
      setdefaultdevhubusername: "--setdefaultdevhubusername",
      instanceurl: "--instanceurl"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.jwtGrant,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * authorize an org using an sfdx auth url
   * @returns {(Promise<Object | void>)}
   * @memberof Auth
   * @description Authorizes a Salesforce org using an SFDX auth URL.
   * @example Authorize a Salesforce org using an SFDX auth URL stored within a file.
   * The file must have use format "force://(<clientId>:<clientSecret>:)?<refreshToken>@<instanceUrl>", where "?" denotes an option value.
   * The file must contain only the URL or be a JSON file that has a top-level property named sfdxAuthUrl.
   * 
   * Examples:
   *    $ sfdx force:auth:sfdxurl:store -f <path to sfdxAuthUrl file>
   *    $ sfdx force:auth:sfdxurl:store -f <path to sfdxAuthUrl file> -s -a MyDefaultOrg
   * force:auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("sfdxurl:store")
  public sfdxurlStore(options: IAuthSfdxurlStore): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      sfdxurlfile: "--sfdxurlfile",
      loglevel: "--loglevel",
      json: "--json",
      setalias: "--setalias",
      setdefaultusername: "--setdefaultusername",
      setdefaultdevhubusername: "--setdefaultdevhubusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.sfdxurlStore,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * authorize an org using the web login flow
   * @returns {(Promise<Object | void>)}
   * @memberof Auth
   * @description Authorizes a Salesforce org by opening a browser so you can log in through salesforce.com.
   * @example To log in to a sandbox, set --instanceurl to https://test.salesforce.com.
   * 
   * Examples:
   *    $ sfdx force:auth:web:login -a TestOrg1
   *    $ sfdx force:auth:web:login -i <oauth client id>
   *    $ sfdx force:auth:web:login -r https://test.salesforce.com
   * force:auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("web:login")
  public webLogin(options?: IAuthWebLogin): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      disablemasking: "--disablemasking",
      setalias: "--setalias",
      setdefaultusername: "--setdefaultusername",
      setdefaultdevhubusername: "--setdefaultdevhubusername",
      instanceurl: "--instanceurl",
      clientid: "--clientid"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.webLogin,
      options,
      parameterNamesToSwitchNames
    )
  }
}
