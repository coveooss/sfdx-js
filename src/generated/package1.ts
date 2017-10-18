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
 * Options for the method versionCreate of class Package1.
 *
 * @export
 * @interface IPackage1VersionCreate
 */
export interface IPackage1VersionCreate {
  /**
   * [Required] ID of the metadata package (starts with 033) of which you’re creating a new version.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  packageid: string

  /**
   * [Required] Package version name.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  name: string

  /**
   * [Optional] Post install URL.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  postinstallurl?: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage1VersionCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage1VersionCreate
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  targetusername?: string

  /**
   * [Optional] Minutes to wait for the package version to be created. The default is 2 minutes.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  wait?: string

  /**
   * [Optional] Installation key for creating the key-protected package. The default is null.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  installationkey?: string

  /**
   * [Optional] Package version description.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  description?: string

  /**
   * [Optional] Release notes URL.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  releasenotesurl?: string

  /**
   * [Optional] Creates a managed package version. To create a beta version, don’t include this parameter.
   * @type {Boolean}
   * @memberof IPackage1VersionCreate
   */
  managedreleased?: Boolean

  /**
   * [Optional] Package version in major.minor format, for example, 3.2.
   * @type {string}
   * @memberof IPackage1VersionCreate
   */
  version?: string
}

/**
 * Options for the method versionCreateGet of class Package1.
 *
 * @export
 * @interface IPackage1VersionCreateGet
 */
export interface IPackage1VersionCreateGet {
  /**
   * [Required] The ID of the PackageUploadRequest.
   * @type {string}
   * @memberof IPackage1VersionCreateGet
   */
  requestid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage1VersionCreateGet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage1VersionCreateGet
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackage1VersionCreateGet
   */
  targetusername?: string
}

/**
 * Options for the method versionDisplay of class Package1.
 *
 * @export
 * @interface IPackage1VersionDisplay
 */
export interface IPackage1VersionDisplay {
  /**
   * [Required] ID (starts with 04t) of the metadata package version whose details you want to display.
   * @type {string}
   * @memberof IPackage1VersionDisplay
   */
  packageversionid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage1VersionDisplay
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage1VersionDisplay
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackage1VersionDisplay
   */
  targetusername?: string
}

/**
 * Options for the method versionList of class Package1.
 *
 * @export
 * @interface IPackage1VersionList
 */
export interface IPackage1VersionList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackage1VersionList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackage1VersionList
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackage1VersionList
   */
  targetusername?: string

  /**
   * [Optional] Metadata package ID (starts with 033) whose package versions you want to list. If not specified, shows all versions for all packages (managed and unmanaged) in the org.
   * @type {string}
   * @memberof IPackage1VersionList
   */
  packageid?: string
}

/**
 * Package1
 *
 * @export
 * @class Package1
 */
@apiNamespace("force")
@apiCommandClass("force:package1")
export class Package1 {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a first-generation package version in the release org
   * @returns {(Promise<Object | void>)}
   * @memberof Package1
   * @description Creates a first-generation package version in the release org.
   * @example The package version is based on the contents of the specified metadata package. Omit -m if you want to create an unmanaged package version.
   * force:package1:version:create -i <id> -n <string> [-d <string>] [-v <string>] [-m] [-r <url>] [-p <url>] [-k <string>] [-w <number>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:create")
  public versionCreate(
    options: IPackage1VersionCreate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      packageid: "--packageid",
      name: "--name",
      postinstallurl: "--postinstallurl",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      wait: "--wait",
      installationkey: "--installationkey",
      description: "--description",
      releasenotesurl: "--releasenotesurl",
      managedreleased: "--managedreleased",
      version: "--version"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * retrieve the status of a package version creation request
   * @returns {(Promise<Object | void>)}
   * @memberof Package1
   * @description Retrieves the status of a package version creation request.
   * @example Displays the status of a package upload request.
   * force:package1:version:create:get -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:create:get")
  public versionCreateGet(
    options: IPackage1VersionCreateGet
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      requestid: "--requestid",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateGet,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * display details about a first-generation package version
   * @returns {(Promise<Object | void>)}
   * @memberof Package1
   * @description Displays detailed information about an individual first-generation package version.
   * @example Display detailed information about an individual package version, including metadata package ID, name, the release state, and build number.
   * force:package1:version:display -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:display")
  public versionDisplay(
    options: IPackage1VersionDisplay
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      packageversionid: "--packageversionid",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionDisplay,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list package versions for the specified first-generation package or for the org
   * @returns {(Promise<Object | void>)}
   * @memberof Package1
   * @description Lists the versions for the specified package or all first-generation packages in the org.
   * @example If a metadata package ID is specified, lists all versions of the specified package. Otherwise, lists all package versions for the org. For each package version, the list includes the package version ID, metadata package ID, name, version number, and release state.
   * force:package1:version:list [-i <id>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:list")
  public versionList(options?: IPackage1VersionList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      packageid: "--packageid"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.versionList,
      options,
      parameterNamesToSwitchNames
    )
  }
}
