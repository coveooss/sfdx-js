import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

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
   *
   * @param {string} username The authentication username. 
   * @param {string} jwtkeyfile Path to a file containing the private key. 
   * @param {string} clientid The OAuth client ID (sometimes referred to as the consumer key). 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} setalias Sets an alias for the authenticated org. 
   * @param {Boolean} setdefaultusername Sets the authenticated org as the default username that all commands run against. 
   * @param {Boolean} setdefaultdevhubusername Sets the authenticated org as the default Dev Hub org for scratch org creation. 
   * @param {string} instanceurl The login URL of the Salesforce instance that the org lives on. 
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
  public jwtGrant(
    @apiParameter("--username") username: string,
    @apiParameter("--jwtkeyfile") jwtkeyfile: string,
    @apiParameter("--clientid") clientid: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--setalias") setalias?: string,
    @apiParameter("--setdefaultusername") setdefaultusername?: Boolean,
    @apiParameter("--setdefaultdevhubusername")
    setdefaultdevhubusername?: Boolean,
    @apiParameter("--instanceurl") instanceurl?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.jwtGrant,
      arguments
    )
  }

  /**
   * authorize an org using an sfdx auth url
   *
   * @param {string} sfdxurlfile Path to a file containing the SFDX URL. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} setalias Sets an alias for the authenticated org. 
   * @param {Boolean} setdefaultusername Sets the authenticated org as the default username that all commands run against. 
   * @param {Boolean} setdefaultdevhubusername Sets the authenticated org as the default Dev Hub org for scratch org creation. 
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
  public sfdxurlStore(
    @apiParameter("--sfdxurlfile") sfdxurlfile: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--setalias") setalias?: string,
    @apiParameter("--setdefaultusername") setdefaultusername?: Boolean,
    @apiParameter("--setdefaultdevhubusername")
    setdefaultdevhubusername?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.sfdxurlStore,
      arguments
    )
  }

  /**
   * authorize an org using the web login flow
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {Boolean} disablemasking Disables masking of user input (for use with problematic terminals). 
   * @param {string} setalias Sets an alias for the authenticated org. 
   * @param {Boolean} setdefaultusername Sets the authenticated org as the default username that all commands run against. 
   * @param {Boolean} setdefaultdevhubusername Sets the authenticated org as the default Dev Hub org for scratch org creation. 
   * @param {string} instanceurl The login URL of the Salesforce instance that the org lives on. 
   * @param {string} clientid The OAuth client ID (sometimes referred to as the consumer key). 
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
  public webLogin(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--disablemasking") disablemasking?: Boolean,
    @apiParameter("--setalias") setalias?: string,
    @apiParameter("--setdefaultusername") setdefaultusername?: Boolean,
    @apiParameter("--setdefaultdevhubusername")
    setdefaultdevhubusername?: Boolean,
    @apiParameter("--instanceurl") instanceurl?: string,
    @apiParameter("--clientid") clientid?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.webLogin,
      arguments
    )
  }
}
