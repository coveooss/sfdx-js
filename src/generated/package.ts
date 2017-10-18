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
 * Options for the method install of class Package.
 *
 * @export
 * @interface IPackageInstall
 */
export interface IPackageInstall {
  /**
   * [Required] The ID of the package version to install (starts with 04t).
   * @type {string}
   * @memberof IPackageInstall
   */
  id: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackageInstall
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackageInstall
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackageInstall
   */
  targetusername?: string

  /**
   * [Optional] Maximum number of minutes to wait for the Subscriber Package Version ID to become available in the target org before canceling the install request. The default is 0.
   * @type {string}
   * @memberof IPackageInstall
   */
  publishwait?: string

  /**
   * [Optional] Installation key for installing a key-protected package. The default is null.
   * @type {string}
   * @memberof IPackageInstall
   */
  installationkey?: string

  /**
   * [Optional] Maximum number of minutes to wait for installation status. The default is 0.
   * @type {string}
   * @memberof IPackageInstall
   */
  wait?: string
}

/**
 * Options for the method installGet of class Package.
 *
 * @export
 * @interface IPackageInstallGet
 */
export interface IPackageInstallGet {
  /**
   * [Required] The ID of the package install request you want to check.
   * @type {string}
   * @memberof IPackageInstallGet
   */
  requestid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackageInstallGet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackageInstallGet
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackageInstallGet
   */
  targetusername?: string
}

/**
 * Options for the method installedList of class Package.
 *
 * @export
 * @interface IPackageInstalledList
 */
export interface IPackageInstalledList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackageInstalledList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackageInstalledList
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackageInstalledList
   */
  targetusername?: string
}

/**
 * Options for the method uninstall of class Package.
 *
 * @export
 * @interface IPackageUninstall
 */
export interface IPackageUninstall {
  /**
   * [Required] The ID of the second-generation package to uninstall (starts with 04t).
   * @type {string}
   * @memberof IPackageUninstall
   */
  id: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackageUninstall
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackageUninstall
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackageUninstall
   */
  targetusername?: string

  /**
   * [Optional] Maximum number of minutes to wait for uninstall status. The default is 0.
   * @type {string}
   * @memberof IPackageUninstall
   */
  wait?: string
}

/**
 * Options for the method uninstallGet of class Package.
 *
 * @export
 * @interface IPackageUninstallGet
 */
export interface IPackageUninstallGet {
  /**
   * [Required] The ID of the package uninstall request you want to check.
   * @type {string}
   * @memberof IPackageUninstallGet
   */
  requestid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IPackageUninstallGet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IPackageUninstallGet
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackageUninstallGet
   */
  targetusername?: string
}

/**
 * Package
 *
 * @export
 * @class Package
 */
@apiNamespace("force")
@apiCommandClass("force:package")
export class Package {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * install a package in the target org
   * @returns {(Promise<Object | void>)}
   * @memberof Package
   * @description Installs a package in the target org.
   * @example Supply the ID of the package version you want to install. Installs to the default username org unless you supply the username for a different target org.
   * 
   * Examples:
   *    $ sfdx force:package:install -i 04t6A0000004eytQAA
   *    $ sfdx force:package:install -i 04t6A0000004eytQAA -u me@my.org
   * force:package:install -i <id> [-w <minutes>] [-k <string>] [-p <minutes>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("install")
  public install(options: IPackageInstall): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      id: "--id",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      publishwait: "--publishwait",
      installationkey: "--installationkey",
      wait: "--wait"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.install,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * retrieve the status of a package installation request
   * @returns {(Promise<Object | void>)}
   * @memberof Package
   * @description Retrieves the status of a package installation request.
   * @example Displays the status of a package install request.
   * force:package:install:get -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("install:get")
  public installGet(options: IPackageInstallGet): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      requestid: "--requestid",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.installGet,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list the org’s installed packages
   * @returns {(Promise<Object | void>)}
   * @memberof Package
   * @description Lists all packages installed in the target org.
   * @example Lists all packages installed in the target org.
   * force:package:installed:list [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("installed:list")
  public installedList(
    options?: IPackageInstalledList
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
   * uninstall a second-generation package from the target org
   * @returns {(Promise<Object | void>)}
   * @memberof Package
   * @description Uninstalls a second-generation package from the target org. To uninstall a first-generation package, use the Salesforce user interface.
   * @example Specify the package ID for a second-generation package.
   * 
   * Examples:
   *    $ sfdx force:package:uninstall --id 04t...
   *    $ sfdx force:package:uninstall -i 04t... -u <username of target org>
   * 
   * To list the org’s installed packages, run "package:installed:list".
   * 
   * To uninstall a first-generation package, from Setup, enter Installed Packages in the Quick Find box, then select Installed Packages.
   * force:package:uninstall -i <id> [-w <minutes>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("uninstall")
  public uninstall(options: IPackageUninstall): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      id: "--id",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      wait: "--wait"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.uninstall,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * retrieve status of package uninstall request
   * @returns {(Promise<Object | void>)}
   * @memberof Package
   * @description Retrieves the status of a package uninstall request.
   * @example Displays the status of a package uninstall request.
   * force:package:uninstall:get -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("uninstall:get")
  public uninstallGet(options: IPackageUninstallGet): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      requestid: "--requestid",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.uninstallGet,
      options,
      parameterNamesToSwitchNames
    )
  }
}
