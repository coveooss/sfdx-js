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
 * Options for the method install of class Package.
 *
 * @export
 * @interface IPackageInstall
 */
export interface IPackageInstall {
  /**
   * [Required] ID of the package to install (starts with 04t).
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
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackageInstall
   */
  targetusername?: string

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
   * [Required] The ID of the PackageInstallRequest.
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
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IPackageInstallGet
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
@apiCommandClass("package")
export class Package {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * install a package in the target org
   * @returns {(Promise<Object | void>)}
   * @memberof Package
   * @description Installs a package in the target org.
   * @example Supply the ID of the package you want to install. Installs to the default username org unless you supply the username for a different target org.
   * 
   * Examples:
   *    $ sfdx force:package:install -i 04t6A0000004eytQAA
   *    $ sfdx force:package:install -i 04t6A0000004eytQAA -u me@my.org
   * force:package:install -i <id> [-w <minutes>] [-k <string>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("install")
  public install(options: IPackageInstall): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      id: "--id",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
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
   * retrieve status of package install request
   * @returns {(Promise<Object | void>)}
   * @memberof Package
   * @description Retrieves the status of a package install request.
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
}
