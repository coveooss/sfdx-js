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
 * Options for the method create of class Org.
 *
 * @export
 * @interface IOrgCreate
 */
export interface IOrgCreate {
  /**
   * [Optional] The key pair expression for the command
   * @type {IStringKeyPair[] | string[] | string}
   * @memberof IOrgCreate
   */
  expression?: IStringKeyPair[] | string[] | string

  /**
   * [Optional] Environment where the scratch org is created: [sandbox*,virtual,prototype].
   * @type {string}
   * @memberof IOrgCreate
   */
  env?: string

  /**
   * [Optional] Path to a scratch org definition file. Either --definitionfile or --definitionjson is required.
   * @type {string}
   * @memberof IOrgCreate
   */
  definitionfile?: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IOrgCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IOrgCreate
   */
  json?: Boolean

  /**
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
   * @type {string}
   * @memberof IOrgCreate
   */
  targetdevhubusername?: string

  /**
   * [Optional] Sets the streaming client socket timeout, in minutes.If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently.
   * @type {string}
   * @memberof IOrgCreate
   */
  wait?: string

  /**
   * [Optional] Scratch org definition in JSON format. Either --definitionfile or --definitionjson is required.
   * @type {string}
   * @memberof IOrgCreate
   */
  definitionjson?: string

  /**
   * [Optional] Set an alias for for the created scratch org.
   * @type {string}
   * @memberof IOrgCreate
   */
  setalias?: string

  /**
   * [Optional] Sets the created org as the default username.
   * @type {Boolean}
   * @memberof IOrgCreate
   */
  setdefaultusername?: Boolean

  /**
   * [Optional] Connected app consumer key, as configured in your Dev Hub.
   * @type {string}
   * @memberof IOrgCreate
   */
  clientid?: string

  /**
   * [Optional] Creates the scratch org with no namespace. Useful when using a scratch org to test installations of packages with namespaces.
   * @type {Boolean}
   * @memberof IOrgCreate
   */
  nonamespace?: Boolean
}

/**
 * Options for the method delete of class Org.
 *
 * @export
 * @interface IOrgDelete
 */
export interface IOrgDelete {
  /**
   * [Required] Username for the target org.
   * @type {string}
   * @memberof IOrgDelete
   */
  targetusername: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IOrgDelete
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IOrgDelete
   */
  json?: Boolean

  /**
   * [Optional] No prompt to confirm deletion.
   * @type {Boolean}
   * @memberof IOrgDelete
   */
  noprompt?: Boolean
}

/**
 * Options for the method display of class Org.
 *
 * @export
 * @interface IOrgDisplay
 */
export interface IOrgDisplay {
  /**
   * [Optional] Emit additional command output to stdout.
   * @type {Boolean}
   * @memberof IOrgDisplay
   */
  verbose?: Boolean

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IOrgDisplay
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IOrgDisplay
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IOrgDisplay
   */
  targetusername?: string
}

/**
 * Options for the method list of class Org.
 *
 * @export
 * @interface IOrgList
 */
export interface IOrgList {
  /**
   * [Optional] Lists more information about each org.
   * @type {Boolean}
   * @memberof IOrgList
   */
  verbose?: Boolean

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IOrgList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IOrgList
   */
  json?: Boolean

  /**
   * [Optional] Do not prompt for confirmation.
   * @type {Boolean}
   * @memberof IOrgList
   */
  noprompt?: Boolean

  /**
   * [Optional] Remove all local org authorizations for deleted or expired orgs.
   * @type {Boolean}
   * @memberof IOrgList
   */
  clean?: Boolean

  /**
   * [Optional] Lists all authenticated orgs, including expired, deleted, and unknown-status scratch orgs.
   * @type {Boolean}
   * @memberof IOrgList
   */
  all?: Boolean
}

/**
 * Options for the method open of class Org.
 *
 * @export
 * @interface IOrgOpen
 */
export interface IOrgOpen {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IOrgOpen
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IOrgOpen
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IOrgOpen
   */
  targetusername?: string

  /**
   * [Optional] Displays a navigation URL, but doesn’t launch your browser.
   * @type {Boolean}
   * @memberof IOrgOpen
   */
  urlonly?: Boolean

  /**
   * [Optional] Navigation URL path (not including domain).
   * @type {string}
   * @memberof IOrgOpen
   */
  path?: string
}

/**
 * Org
 *
 * @export
 * @class Org
 */
@apiNamespace("force")
@apiCommandClass("org")
export class Org {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a scratch org
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Creates a scratch org using values specified in a configuration file or key=value pairs that you specify on the command line. Values specified on the command line override values in the configuration file.
   * @example To set up a connected app for your new scratch org, specify the value that was returned when you created a connected app in your Dev Hub org as --clientid.
   * 
   * Examples:
   *    $ sfdx force:org:create -f config/enterprise-scratch-def.json -a TestOrg1
   *    $ sfdx force:org:create -a MyDevOrg -s -v me@myhub.org edition=Developer
   *    $ sfdx force:org:create -f config/enterprise-scratch-def.json -a OrgWithOverrides username=testuser1@mycompany.org
   * force:org:create name=value... [-f <filepath>] [-n] [-i <string>] [-s] [-a <string>] [-w <minutes>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("create")
  public create(options?: IOrgCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      expression: "",
      env: "--env",
      definitionfile: "--definitionfile",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      wait: "--wait",
      definitionjson: "--definitionjson",
      setalias: "--setalias",
      setdefaultusername: "--setdefaultusername",
      clientid: "--clientid",
      nonamespace: "--nonamespace"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.create,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * mark a scratch org for deletion
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Marks a scratch org for deletion.
   * @example To mark the org for deletion without being prompted to confirm, specify --noprompt.
   * 
   * Examples:
   *    $ sfdx force:org:delete -u me@my.org
   *    $ sfdx force:org:delete -u MyOrgAlias -p
   * force:org:delete -u <string> [-p] [--json] [--loglevel <string>]
   */
  @apiCommand("delete")
  public delete(options: IOrgDelete): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      targetusername: "--targetusername",
      loglevel: "--loglevel",
      json: "--json",
      noprompt: "--noprompt"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.delete,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * get org description
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Gets the description for the current or target org.
   * @example Output includes your access token, client ID, connected status, org ID, instance URL, username, and alias, if applicable. Use --verbose to include the SFDX auth URL.
   * 
   * Examples:
   *    $ sfdx force:org:display
   *    $ sfdx force:org:display -u me@my.org
   *    $ sfdx force:org:display -u TestOrg1 --json
   *    $ sfdx force:org:display -u TestOrg1 --json > tmp/MyOrgDesc.json
   * force:org:display [-u <string>] [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("display")
  public display(options?: IOrgDisplay): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      verbose: "--verbose",
      loglevel: "--loglevel",
      json: "--json",
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
   * list all active orgs you’ve created or authenticated to
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Lists all active orgs that the Salesforce CLI has created or authenticated to.
   * @example Examples:
   *    $ sfdx force:org:list
   *    $ sfdx force:org:list --verbose --json
   *    $ sfdx force:org:list --verbose --json > tmp/MyOrgList.json
   * force:org:list [--all] [--clean] [-p] [--json] [--loglevel <string>]
   */
  @apiCommand("list")
  public list(options?: IOrgList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      verbose: "--verbose",
      loglevel: "--loglevel",
      json: "--json",
      noprompt: "--noprompt",
      clean: "--clean",
      all: "--all"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.list,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * open an org in your browser
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Opens an org in your browser.
   * @example Opens your default scratch org, or another org that you specify.
   * 
   * To open a specific page, specify the portion of the URL after "yourInstance.salesforce.com/" as --path. 
   * For example, specify "--path one/one.app" to open Lightning Experience, or specify "--path /apex/YourPage" to open a Visualforce page.
   * 
   * To generate a URL but not launch your browser, specify --urlonly.
   * 
   * Examples:
   *   $ sfdx force:org:open
   *   $ sfdx force:org:open -u me@my.org
   *   $ sfdx force:org:open -u MyTestOrg1
   *   $ sfdx force:org:open -r -p one/one.app
   * force:org:open [-p <string>] [-r] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("open")
  public open(options?: IOrgOpen): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      urlonly: "--urlonly",
      path: "--path"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.open,
      options,
      parameterNamesToSwitchNames
    )
  }
}
