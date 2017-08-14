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
 * Options for the method create of class Package2.
 *
 * @export
 * @interface IPackage2Create
 */
export interface IPackage2Create {
  /**
   * [Required] Name of the package2 to create.
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
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
   * @type {string}
   * @memberof IPackage2Create
   */
  targetdevhubusername?: string

  /**
   * [Optional] Global namespace for the package2.
   * @type {string}
   * @memberof IPackage2Create
   */
  namespace?: string

  /**
   * [Optional] Description of the package2.
   * @type {string}
   * @memberof IPackage2Create
   */
  description?: string
}

/**
 * Options for the method installedList of class Package2.
 *
 * @export
 * @interface IPackage2InstalledList
 */
export interface IPackage2InstalledList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2InstalledList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2InstalledList
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackage2InstalledList
   */
  targetusername?: string
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
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
   * @type {string}
   * @memberof IPackage2List
   */
  targetdevhubusername?: string
}

/**
 * Options for the method manifestCreate of class Package2.
 *
 * @export
 * @interface IPackage2ManifestCreate
 */
export interface IPackage2ManifestCreate {
  /**
   * [Required] Directory for reading the package2 contents and generating the package2 manifest JSON file.
   * @type {string}
   * @memberof IPackage2ManifestCreate
   */
  directory: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2ManifestCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2ManifestCreate
   */
  json?: Boolean

  /**
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
   * @type {string}
   * @memberof IPackage2ManifestCreate
   */
  targetdevhubusername?: string
}

/**
 * Options for the method membersList of class Package2.
 *
 * @export
 * @interface IPackage2MembersList
 */
export interface IPackage2MembersList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2MembersList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2MembersList
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackage2MembersList
   */
  targetusername?: string
}

/**
 * Options for the method versionCreate of class Package2.
 *
 * @export
 * @interface IPackage2VersionCreate
 */
export interface IPackage2VersionCreate {
  /**
   * [Required] ID of parent package2 (starts with 0Ho).
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  package2id: string

  /**
   * [Required] The directory that contains the manifest, descriptor, and contents of the package2 version.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  directory: string

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
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  targetdevhubusername?: string

  /**
   * [Optional] The number of minutes to wait for the package2 version to be created.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  wait?: string

  /**
   * [Optional] Preserves temp files that would otherwise be deleted.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  preserve?: string

  /**
   * [Optional] The package2 version's tag.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  tag?: string

  /**
   * [Optional] The package2 version's branch.
   * @type {string}
   * @memberof IPackage2VersionCreate
   */
  branch?: string
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
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
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
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
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
   * [Optional] Lists the requests made in the last specified number of days, starting at 00:00:00 of first day to now. Use 0 for today.
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
   * [Required] The package2 version ID (starts with 05i).
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
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionGet
   */
  targetdevhubusername?: string
}

/**
 * Options for the method versionInstall of class Package2.
 *
 * @export
 * @interface IPackage2VersionInstall
 */
export interface IPackage2VersionInstall {
  /**
   * [Required] The ID of the subscriber package2 version to install (starts with 04t).
   * @type {string}
   * @memberof IPackage2VersionInstall
   */
  subscriberpackage2versionid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2VersionInstall
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2VersionInstall
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackage2VersionInstall
   */
  targetusername?: string
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
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
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
   * [Optional] Lists the items modified in the last given number of days, starting at 00:00:00 of first day to now. Use 0 for today.
   * @type {string}
   * @memberof IPackage2VersionList
   */
  modifiedlastdays?: string

  /**
   * [Optional] Lists the requests made in the last specified number of days, starting at 00:00:00 of first day to now. Use 0 for today.
   * @type {string}
   * @memberof IPackage2VersionList
   */
  createdlastdays?: string
}

/**
 * Options for the method versionUninstall of class Package2.
 *
 * @export
 * @interface IPackage2VersionUninstall
 */
export interface IPackage2VersionUninstall {
  /**
   * [Required] The ID of the subscriber package2 version to uninstall (starts with 04t).
   * @type {string}
   * @memberof IPackage2VersionUninstall
   */
  subscriberpackage2versionid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage2VersionUninstall
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage2VersionUninstall
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackage2VersionUninstall
   */
  targetusername?: string
}

/**
 * Options for the method versionUpdate of class Package2.
 *
 * @export
 * @interface IPackage2VersionUpdate
 */
export interface IPackage2VersionUpdate {
  /**
   * [Required] The package2 version ID (starts with 05i).
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
   * [Optional] A username for the target Dev Hub org. Overrides default Dev Hub org.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  targetdevhubusername?: string

  /**
   * [Optional] Sets the package2 version as released. Second-generation packages can’t be changed to beta after they've been released.
   * @type {Boolean}
   * @memberof IPackage2VersionUpdate
   */
  setasreleased?: Boolean

  /**
   * [Optional] The package2 version tag.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  tag?: string

  /**
   * [Optional] The package2 version branch.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  branch?: string

  /**
   * [Optional] The package2 version description.
   * @type {string}
   * @memberof IPackage2VersionUpdate
   */
  description?: string

  /**
   * [Optional] The package2 version name.
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
@apiCommandClass("package2")
export class Package2 {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a package2
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Creates a second-generation package.
   * @example First, use this command to create a package2. Then create a package2 version.
   * 
   * Examples:
   *    $ sfdx force:package2:create --name PackageName --namespace MyNamespace --description 'My New Package'
   * 
   * Run 'sfdx force:package2:list' to list all package2 packages in the dev hub org.
   * force:package2:create -n <string> [-d <string>] [-s <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("create")
  public create(options: IPackage2Create): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      name: "--name",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      namespace: "--namespace",
      description: "--description"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.create,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list the org’s installed subscriber package2 versions
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all subscriber package2 versions installed in the target org.
   * @example Lists all subscriber package2 versions installed in the target org.
   * force:package2:installed:list [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("installed:list")
  public installedList(
    options?: IPackage2InstalledList
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.installedList,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list all package2 packages in the dev hub org
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all second-generation packages in the Dev Hub org.
   * @example You can view the namespace, ID, and subscriber package2 ID for each package2.
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
   * create a manifest for the package2 from the specified directory
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Creates a second-generation package manifest file in JSON format based on the files in the specified package2 source directory.
   * @example The manifest must be in the directory specified when you create a package2 version.
   * force:package2:manifest:create -d <directory> [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("manifest:create")
  public manifestCreate(
    options: IPackage2ManifestCreate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      directory: "--directory",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.manifestCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list all subscriber package2 members in the org
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all subscriber package2 members in the target org.
   * @example Lists the history of each package2 member: the package2 version when a member was first added (minimum), the latest package version that contains the member (current), and the latest version that contained any deleted members (maximum). The Subject Manageable State shows the state of the object referenced by the package2 member: beta, deleted, deprecated, installed, released, or unmanaged.
   * force:package2:members:list [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("members:list")
  public membersList(options?: IPackage2MembersList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.membersList,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * create a package2 version in the dev hub org
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Creates a second-generation package (package2) version in the Dev Hub org.
   * @example The package2 version is based on the manifest, descriptor, and package2 contents in the specified directory.
   * 
   * To retrieve details about a package2 version create request, including status and package2 version id (05i), run "sfdx force:package2:version:create:get -i 08c...".
   * 
   * To list package2 version creation requests in the org, run "sfdx force:package2:version:create:list".
   * 
   * Examples:
   *    $ sfdx force:package2:version:create --package2id 0Ho... --directory common --tag 'Release 1.0.0' --branch master
   *    $ sfdx force:package2:version:create -i 0Ho... -d common
   * force:package2:version:create -i <id> -d <directory> [-b <string>] [-t <string>] [-w <minutes>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:create")
  public versionCreate(
    options: IPackage2VersionCreate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      package2id: "--package2id",
      directory: "--directory",
      loglevel: "--loglevel",
      json: "--json",
      targetdevhubusername: "--targetdevhubusername",
      wait: "--wait",
      preserve: "--preserve",
      tag: "--tag",
      branch: "--branch"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * retrieve a package2 version creation request in the dev hub org
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
   * list package2 version creation requests in the dev hub org
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
   * retrieve a package version in the dev hub org
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Retrieves a package version in the Dev Hub org
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
   * install a subscriber package2 version
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Installs a second-generation subscriber package version in the target org.
   * @example Installs a second-generation subscriber package version in the target org. To view the error messages, open the Dev Hub org, select the Setup menu, enter Deployment in the Quick Find box, and select Deployment Status.
   * 
   * Examples:
   *    $ sfdx force:package2:version:install --subscriberpackage2versionid 04t...
   *    $ sfdx force:package2:version:install -i 04t... -u <username of target org>
   * 
   * To find the ID for the subscriber package2 version, run "sfdx package2:version:list".
   * To list the org’s installed subscriber package2 versions, run "package2:installed:list".
   * force:package2:version:install -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:install")
  public versionInstall(
    options: IPackage2VersionInstall
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      subscriberpackage2versionid: "--subscriberpackage2versionid",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionInstall,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list all package2 versions in the dev hub org
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
   * uninstall a subscriber package2 version
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Uninstalls a subscriber package2 version in the target org.
   * @example Specify the subscriber package2 version ID.
   * 
   * Examples:
   *    $ sfdx force:package2:version:uninstall --subscriberpackage2versionid 04t...
   *    $ sfdx force:package2:version:uninstall -i 04t... -u <username of target org>
   * 
   * To list the org’s installed subscriber package2 versions, run "package2:installed:list".
   * force:package2:version:uninstall -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:uninstall")
  public versionUninstall(
    options: IPackage2VersionUninstall
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      subscriberpackage2versionid: "--subscriberpackage2versionid",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionUninstall,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * update a package2 version in the dev hub org
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Updates a second-generation package version in the Dev Hub org.
   * @example Specify a new value for each option you want to update.
   * 
   * Examples:
   *    $ sfdx force:package2:version:update --package2versionid 05i... --setasreleased
   *    $ sfdx force:package2:version:update --i 05i... -b master -t 'Release 1.0.7'
   * 
   * To display details about a package2 version, run "sfdx package2:version:get".
   * force:package2:version:update -i <id> [-n <string>] [-d <string>] [-b <string>] [-t <string>] [-s] [-v <string>] [--json] [--loglevel <string>]
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
