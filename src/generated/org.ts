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
   * [Optional] Sets the streaming client socket timeout, in minutes.If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently.
   * @type {string}
   * @memberof IOrgCreate
   */
  wait?: string

  /**
   * [Optional] Path to a scratch org definition file. Either --definitionfile or --definitionjson is required.
   * @type {string}
   * @memberof IOrgCreate
   */
  definitionfile?: string

  /**
   * [Optional] Creates the scratch org with no namespace. Useful when using a scratch org to test installations of packages with namespaces.
   * @type {Boolean}
   * @memberof IOrgCreate
   */
  nonamespace?: Boolean

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
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IOrgCreate
   */
  targetdevhubusername?: string

  /**
   * [Optional] Sets the duration of the scratch org, in days. Valid values are from 1-30. The default is 7 days.
   * @type {string}
   * @memberof IOrgCreate
   */
  durationdays?: string

  /**
   * [Optional] Do not include second-generation package ancestors in the scratch org.
   * @type {Boolean}
   * @memberof IOrgCreate
   */
  noancestors?: Boolean

  /**
   * [Optional] Scratch org definition in JSON format. Either --definitionfile or --definitionjson is required.
   * @type {string}
   * @memberof IOrgCreate
   */
  definitionjson?: string

  /**
   * [Optional] Sets an alias for for the created scratch org.
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
}

/**
 * Options for the method delete of class Org.
 *
 * @export
 * @interface IOrgDelete
 */
export interface IOrgDelete {
  /**
   * [Required] A username or alias for the target org.
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
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IOrgDelete
   */
  targetdevhubusername?: string

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
   * [Optional] A username or alias for the target org. Overrides the default target org.
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
   * [Optional] A username or alias for the target org. Overrides the default target org.
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
 * Options for the method shapeCreate of class Org.
 *
 * @export
 * @interface IOrgShapeCreate
 */
export interface IOrgShapeCreate {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IOrgShapeCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IOrgShapeCreate
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IOrgShapeCreate
   */
  targetusername?: string
}

/**
 * Options for the method shapeDelete of class Org.
 *
 * @export
 * @interface IOrgShapeDelete
 */
export interface IOrgShapeDelete {
  /**
   * [Required] Username for the target org.
   * @type {string}
   * @memberof IOrgShapeDelete
   */
  targetusername: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IOrgShapeDelete
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IOrgShapeDelete
   */
  json?: Boolean

  /**
   * [Optional] Do not prompt for confirmation.
   * @type {Boolean}
   * @memberof IOrgShapeDelete
   */
  noprompt?: Boolean
}

/**
 * Options for the method shapeList of class Org.
 *
 * @export
 * @interface IOrgShapeList
 */
export interface IOrgShapeList {
  /**
   * [Optional] Lists more information about each org shape.
   * @type {Boolean}
   * @memberof IOrgShapeList
   */
  verbose?: Boolean

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IOrgShapeList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IOrgShapeList
   */
  json?: Boolean
}

/**
 * Org
 *
 * @export
 * @class Org
 */
@apiNamespace("force")
@apiCommandClass("force:org")
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
   * force:org:create name=value... [-f <filepath>] [-n] [-c] [-i <string>] [-s] [-a <string>] [-w <minutes>] [-d <number>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("create")
  public create(options?: IOrgCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      expression: "",
      env: "--env",
      wait: "--wait",
      definitionfile: "--definitionfile",
      nonamespace: "--nonamespace",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      durationdays: "--durationdays",
      noancestors: "--noancestors",
      definitionjson: "--definitionjson",
      setalias: "--setalias",
      setdefaultusername: "--setdefaultusername",
      clientid: "--clientid"
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
   * force:org:delete -u <string> [-p] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("delete")
  public delete(options: IOrgDelete): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      targetusername: "--targetusername",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
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
   * list all orgs you’ve created or authenticated to
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Lists all orgs that the Salesforce CLI has created or authenticated to.
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

  /**
   * create a snapshot of org edition, features, and licenses
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Creates a snapshot of org edition, features, and licenses to use for scratch org creation, allowing your scratch org to look like another org for testing.
   * @example Examples:
   *    $ sfdx force:org:shape:create -u me@my.org
   *    $ sfdx force:org:shape:create -u me@my.org --json --loglevel debug
   * force:org:shape:create [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("shape:create")
  public shapeCreate(options?: IOrgShapeCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.shapeCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * delete all org shapes for a target org
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Deletes all org shapes that you’ve created for an org using the Salesforce CLI.
   * @example Examples:
   *    $ sfdx force:org:shape:delete -u me@my.org
   *    $ sfdx force:org:shape:delete -u MyOrgAlias -p
   *    $ sfdx force:org:shape:delete -u me@my.org --json
   *    $ sfdx force:org:shape:delete -u me@my.org -p --json > tmp/MyOrgShapeDelete.json
   * force:org:shape:delete -u <string> [-p] [--json] [--loglevel <string>]
   */
  @apiCommand("shape:delete")
  public shapeDelete(options: IOrgShapeDelete): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      targetusername: "--targetusername",
      loglevel: "--loglevel",
      json: "--json",
      noprompt: "--noprompt"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.shapeDelete,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list all org shapes you’ve created
   * @returns {(Promise<Object | void>)}
   * @memberof Org
   * @description Lists all org shapes that you’ve created using the Salesforce CLI.
   * @example Examples:
   *    $ sfdx force:org:shape:list
   *    $ sfdx force:org:shape:list --json
   *    $ sfdx force:org:shape:list --json > tmp/MyOrgShapeList.json
   * force:org:shape:list [--json] [--loglevel <string>]
   */
  @apiCommand("shape:list")
  public shapeList(options?: IOrgShapeList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      verbose: "--verbose",
      loglevel: "--loglevel",
      json: "--json"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.shapeList,
      options,
      parameterNamesToSwitchNames
    )
  }
}
