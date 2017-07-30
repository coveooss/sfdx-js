// Generated on July 30th 2017, 3:31:26 pm. DO NOT MODIFY
import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

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
   *
   * @param {string} id ID of the package to install (starts with 04t). 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} installationkey Installation key for installing a key-protected package. The default is null. 
   * @param {string} wait Maximum number of minutes to wait for installation status. The default is 0. 
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
  public install(
    @apiParameter("--id") id: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--installationkey") installationkey?: string,
    @apiParameter("--wait") wait?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.install,
      arguments
    )
  }

  /**
   * retrieve status of package install request
   *
   * @param {string} requestid The ID of the PackageInstallRequest. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package
   * @description Retrieves the status of a package install request.
   * @example Displays the status of a package install request.
   * force:package:install:get -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("install:get")
  public installGet(
    @apiParameter("--requestid") requestid: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.installGet,
      arguments
    )
  }
}
