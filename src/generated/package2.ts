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
 * Options for the method create of class Package2.
 *
 * @export
 * @interface IPackage2Create
 */
export interface IPackage2Create {
  /**
   * [Required] Name of the second-generation package to create.
   * @type {string}
   * @memberof IPackage2Create
   */
  name: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2Create
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2Create
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2Create
   */
  targetdevhubusername?: string

  /**
   * [Optional] Creates the package with no namespace. Available only for developer-controlled packages. Useful when migrating an existing org to packages, but new metadata should use a namespaced package.
   * @type {Boolean}
   * @memberof IPackage2Create
   */
  nonamespace?: Boolean

  /**
   * [Optional] Description of the second-generation package.
   * @type {string}
   * @memberof IPackage2Create
   */
  description?: string

  /**
   * [Optional] Container options for the second-generation package. 
   * Managed is default. Other options include Unlocked and Locked. (Managed=DeveloperManagedSubscriberManaged, Unlocked=DeveloperControlledSubscriberEditable, Locked=DeveloperControlledSubscriberLocked). 
   * These options determine the upgrade and editability rules.
   * @type {string}
   * @memberof IPackage2Create
   */
  containeroptions?: string
}

/**
 * Options for the method list of class Package2.
 *
 * @export
 * @interface IPackage2List
 */
export interface IPackage2List {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2List
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2List
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2List
   */
  targetdevhubusername?: string
}

/**
 * Options for the method update of class Package2.
 *
 * @export
 * @interface IPackage2Update
 */
export interface IPackage2Update {
  /**
   * [Required] ID of package (starts with 0Ho).
   * @type {string}
   * @memberof IPackage2Update
   */
  package2id: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2Update
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2Update
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2Update
   */
  targetdevhubusername?: string

  /**
   * [Optional] Description of the package.
   * @type {string}
   * @memberof IPackage2Update
   */
  description?: string

  /**
   * [Optional] Name of the package to update.
   * @type {string}
   * @memberof IPackage2Update
   */
  name?: string
}

/**
 * Options for the method versionCreate of class Package2.
 *
 * @export
 * @interface IPackage2VersionCreate
 */
export interface IPackage2VersionCreate {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2VersionCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2VersionCreate
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  targetdevhubusername?: string

  /**
   * [Optional] The number of minutes to wait for the package version to be created.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  wait?: string

  /**
   * [Optional] Specifies that the temp files are preserved that would otherwise be deleted
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  preserve?: string

  /**
   * [Optional] Installation key for creating the key-protected package. The default is null.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  installationkey?: string

  /**
   * [Optional] The package version’s tag.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  tag?: string

  /**
   * [Optional] The package version’s branch.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  branch?: string

  /**
   * [Optional] The path to the directory that contains the contents of the package version.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  directory?: string

  /**
   * [Optional] ID of parent package (starts with 0Ho).
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  package2id?: string
}

/**
 * Options for the method versionCreateGet of class Package2.
 *
 * @export
 * @interface IPackage2VersionCreateGet
 */
export interface IPackage2VersionCreateGet {
  /**
   * [Required] The ID of the package2 version creation request you want to display.
   * @type {string}
   * @memberof IPackage2VersionCreateGet
   */
  package2createrequestid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2VersionCreateGet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2VersionCreateGet
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionCreateGet
   */
  targetdevhubusername?: string
}

/**
 * Options for the method versionCreateList of class Package2.
 *
 * @export
 * @interface IPackage2VersionCreateList
 */
export interface IPackage2VersionCreateList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2VersionCreateList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2VersionCreateList
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionCreateList
   */
  targetdevhubusername?: string

  /**
   * [Optional] Filters the list based on the status of version creation requests.
   * @type {string}
   * @memberof IPackage2VersionCreateList
   */
  status?: string

  /**
   * [Optional] Filters the list based on the specified maximum number of days since the request was created (starting at 00:00:00 of first day to now; 0 for today).
   * @type {string}
   * @memberof IPackage2VersionCreateList
   */
  createdlastdays?: string
}

/**
 * Options for the method versionGet of class Package2.
 *
 * @export
 * @interface IPackage2VersionGet
 */
export interface IPackage2VersionGet {
  /**
   * [Required] The package version ID (starts with 05i).
   * @type {string}
   * @memberof IPackage2VersionGet
   */
  package2versionid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2VersionGet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2VersionGet
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionGet
   */
  targetdevhubusername?: string
}

/**
 * Options for the method versionList of class Package2.
 *
 * @export
 * @interface IPackage2VersionList
 */
export interface IPackage2VersionList {
  /**
   * [Optional] Display extended package2 versions detail.
   * @type {Boolean}
   * @memberof IPackage2VersionList
   */
  verbose?: Boolean

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2VersionList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2VersionList
   */
  json?: Boolean

  /**
   * [Optional] Displays limited package2 version details.
   * @type {Boolean}
   * @memberof IPackage2VersionList
   */
  concise?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionList
   */
  targetdevhubusername?: string

  /**
   * [Optional] Orders the list by the specified package2 version fields.
   * @type {string}
   * @memberof IPackage2VersionList
   */
  orderby?: string

  /**
   * [Optional] Displays released versions only (IsBeta=false).
   * @type {Boolean}
   * @memberof IPackage2VersionList
   */
  released?: Boolean

  /**
   * [Optional] Filters results on the specified comma-delimited package2 IDs (start with 0Ho).
   * @type {string}
   * @memberof IPackage2VersionList
   */
  package2ids?: string

  /**
   * [Optional] Lists the items modified in the specified last number of days, starting at 00:00:00 of first day to now. Use 0 for today.
   * @type {string}
   * @memberof IPackage2VersionList
   */
  modifiedlastdays?: string

  /**
   * [Optional] Filters the list based on the specified maximum number of days since the request was created (starting at 00:00:00 of first day to now; 0 for today).
   * @type {string}
   * @memberof IPackage2VersionList
   */
  createdlastdays?: string
}

/**
 * Options for the method versionUpdate of class Package2.
 *
 * @export
 * @interface IPackage2VersionUpdate
 */
export interface IPackage2VersionUpdate {
  /**
   * [Required] The package version ID (starts with 05i).
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  package2versionid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2VersionUpdate
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2VersionUpdate
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  targetdevhubusername?: string

  /**
   * [Optional] Sets the second-generation package version as released. Second-generation packages can’t be changed to beta after they’ve been released.
   * @type {Boolean}
   * @memberof IPackage2VersionUpdate
   */
  setasreleased?: Boolean

  /**
   * [Optional] Installation key for creating the key-protected package. The default is null.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  installationkey?: string

  /**
   * [Optional] The second-generation package version tag.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  tag?: string

  /**
   * [Optional] The second-generation package version branch.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  branch?: string

  /**
   * [Optional] The second-generation package version description.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  description?: string

  /**
   * [Optional] The package version name.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  name?: string
}

/**
 * Package2
 *
 * @export
 * @class Package2
 */
@apiNamespace("force")
@apiCommandClass("force:package2")
export class Package2 {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a second-generation package
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Creates a second-generation package.
   * @example First, use this command to create a second-generation package. Then create a package version.
   * 
   * Examples:
   *    $ sfdx force:package2:create -n PackageName -d 'My New Package' -o Locked
   * 
   * Run 'sfdx force:package2:list' to list all second-generation packages in the Dev Hub org.
   * force:package2:create -n <string> [-o <string>] [-d <string>] [-e] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("create")
  public create(options: IPackage2Create): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      name: "--name",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      nonamespace: "--nonamespace",
      description: "--description",
      containeroptions: "--containeroptions"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.create,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list all second-generation packages in the Dev Hub org
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all second-generation packages in the Dev Hub org.
   * @example You can view the namespace, IDs, and other details for each package.
   * force:package2:list [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("list")
  public list(options?: IPackage2List): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.list,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * update a second-generation package
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Updates a second-generation package.
   * @example Specify a new value for each option you want to update.
   * 
   * Examples:
   *    $ sfdx force:package2:update --package2id 0Ho... --name 'AAnalytics'
   *    $ sfdx force:package2:update -i 0Ho... -d 'Advanced Analytics'
   * 
   * Run 'sfdx force:package2:list' to list all second-generation packages in the Dev Hub org.
   * force:package2:update -i <id> [-n <string>] [-d <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("update")
  public update(options: IPackage2Update): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      package2id: "--package2id",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      description: "--description",
      name: "--name"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.update,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * create a second-generation package version
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Creates a second-generation package (package2) version in the Dev Hub org.
   * @example The package version is based on the package contents in the specified directory.
   * 
   * To retrieve details about a package version create request, including status and package2 version ID (05i), run "sfdx force:package2:version:create:get -i 08c...".
   * 
   * To list package version creation requests in the org, run "sfdx force:package2:version:create:list".
   * 
   * Examples:
   *    $ sfdx force:package2:version:create -d common
   *    $ sfdx force:package2:version:create -i 0Ho... -d common
   * force:package2:version:create [-i <id>] [-d <directory>] [-b <string>] [-t <string>] [-k <string>] [-w <minutes>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:create")
  public versionCreate(
    options?: IPackage2VersionCreate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      wait: "--wait",
      preserve: "--preserve",
      installationkey: "--installationkey",
      tag: "--tag",
      branch: "--branch",
      directory: "--directory",
      package2id: "--package2id"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * retrieve a package version creation request
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Retrieves a second-generation package version creation request in the Dev Hub org.
   * @example Specify the request ID for which you want to view details. If applicable, the command displays errors related to the request.
   * 
   * Examples:
   *    $ sfdx force:package2:version:create:get --package2createrequestid 08c...
   * 
   * To show all requests in the org, run "sfdx package2:version:create:list".
   * force:package2:version:create:get -i <id> [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:create:get")
  public versionCreateGet(
    options: IPackage2VersionCreateGet
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      package2createrequestid: "--package2createrequestid",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateGet,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list package version creation requests
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all requests to create second-generation package (package2) versions in the Dev Hub org.
   * @example Shows the details of each request to create a package2 version that's run in the Dev Hub org.
   * 
   * All filter parameters are applied using the AND logical operator (not OR).
   * 
   * To get information about a specific request, run "sfdx force:package2:version:create:get" and supply the request ID.
   * 
   * Examples:
   *    $ sfdx force:package2:version:create:list
   *    $ sfdx force:package2:version:create:list --createdlastdays 3
   *    $ sfdx force:package2:version:create:list --status Error
   *    $ sfdx force:package2:version:create:list -s InProgress
   *    $ sfdx force:package2:version:create:list -c 3 -s Success
   * force:package2:version:create:list [-c <number>] [-s <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:create:list")
  public versionCreateList(
    options?: IPackage2VersionCreateList
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      status: "--status",
      createdlastdays: "--createdlastdays"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateList,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * retrieve a package version in the Dev Hub org
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Retrieves a package version in the Dev Hub org.
   * @example Examples:
   *    $ sfdx force:package2:version:get --package2versionid 05i...
   * 
   * To update package version values, run "sfdx force:package2:version:update".
   * force:package2:version:get -i <id> [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:get")
  public versionGet(options: IPackage2VersionGet): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      package2versionid: "--package2versionid",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionGet,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list all package versions in the Dev Hub org
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all package2 versions in the Dev Hub org.
   * @example Displays details of each package2 version in the org.
   * 
   * Use --concise or --verbose to display limited or additional details, respectively.
   * 
   * All filter parameters are applied using the AND logical operator (not OR).
   * 
   * Examples:
   *    $ sfdx force:package2:version:list --verbose --createdlastdays 3 --released --orderby PatchVersion
   *    $ sfdx force:package2:version:list --package2ids 0Ho000000000000,0Ho000000000001 --released --modifiedlastdays 0
   *    $ sfdx force:package2:version:list --released
   *    $ sfdx force:package2:version:list --concise --modifiedlastdays 0
   *    $ sfdx force:package2:version:list --concise -c 3 -r
   * force:package2:version:list [-c <number>] [-m <number>] [-i <string>...] [-r] [-o <string>...] [-v <string>] [--concise] [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("version:list")
  public versionList(options?: IPackage2VersionList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      verbose: "--verbose",
      loglevel: "--loglevel",
      json: "--json",
      concise: "--concise",
      targetdevhubusername: "--targetdevhubusername",
      orderby: "--orderby",
      released: "--released",
      package2ids: "--package2ids",
      modifiedlastdays: "--modifiedlastdays",
      createdlastdays: "--createdlastdays"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionList,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * update a second-generation package version
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Updates a second-generation package version in the Dev Hub org.
   * @example Specify a new value for each option you want to update.
   * 
   * Examples:
   *    $ sfdx force:package2:version:update --package2versionid 05i... --setasreleased
   *    $ sfdx force:package2:version:update -i 05i... -b master -t 'Release 1.0.7'
   * 
   * To display details about a package2 version, run "sfdx package2:version:get".
   * force:package2:version:update -i <id> [-n <string>] [-d <string>] [-b <string>] [-t <string>] [-k <string>] [-s] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:update")
  public versionUpdate(
    options: IPackage2VersionUpdate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      package2versionid: "--package2versionid",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      setasreleased: "--setasreleased",
      installationkey: "--installationkey",
      tag: "--tag",
      branch: "--branch",
      description: "--description",
      name: "--name"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionUpdate,
      options,
      parameterNamesToSwitchNames
    )
  }
}
