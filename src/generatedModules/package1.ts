import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Package1
 *
 * @export
 * @class Package1
 */
@apiNamespace("force")
@apiCommandClass("Package1")
export class Package1 {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a new package version in the release org
   *
   * @param {string} packageid ID of the metadata package (starts with 033) of which you’re creating a new version. 
   * @param {string} name Package version name. 
   * @param {string} postinstallurl Post install URL. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} wait Minutes to wait for the package version to be created. The default is 2 minutes. 
   * @param {string} installationkey Installation key for creating the key-protected package. The default is null. 
   * @param {string} description Package version description. 
   * @param {string} releasenotesurl Release notes URL. 
   * @param {Boolean} managedreleased Creates a managed package version. To create a beta version, don’t include this parameter. 
   * @param {string} version Package version in major.minor format, for example, 3.2. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package1
   * @description Creates a package version in the release org.
   * @example The package version is based on the contents of the specified metadata package. Omit -m if you want to create an unmanaged package version.
   * force:package1:version:create -i <id> -n <string> [-d <string>] [-v <string>] [-m] [-r <url>] [-p <url>] [-k <string>] [-w <number>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:create")
  public versionCreate(
    @apiParameter("--packageid") packageid: string,
    @apiParameter("--name") name: string,
    @apiParameter("--postinstallurl") postinstallurl?: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--wait") wait?: string,
    @apiParameter("--installationkey") installationkey?: string,
    @apiParameter("--description") description?: string,
    @apiParameter("--releasenotesurl") releasenotesurl?: string,
    @apiParameter("--managedreleased") managedreleased?: Boolean,
    @apiParameter("--version") version?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreate,
      arguments
    )
  }

  /**
   * retrieve status of package upload request
   *
   * @param {string} requestid The ID of the PackageUploadRequest. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package1
   * @description Retrieves the status of a PackageUploadRequest.
   * @example Displays the status of a package upload request.
   * force:package1:version:create:get -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:create:get")
  public versionCreateGet(
    @apiParameter("--requestid") requestid: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateGet,
      arguments
    )
  }

  /**
   * display details about a package version
   *
   * @param {string} packageversionid ID (starts with 04t) of the metadata package version whose details you want to display. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package1
   * @description Displays detailed information about an individual package version.
   * @example You can view the metadata package ID, name, release state, and build number.
   * force:package1:version:display -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:display")
  public versionDisplay(
    @apiParameter("--packageversionid") packageversionid: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionDisplay,
      arguments
    )
  }

  /**
   * list package versions for the specified package or for the org
   *
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} packageid Metadata package ID (starts with 033) whose package versions you want to list. If not specified, shows all versions for all packages (managed and unmanaged) in the org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package1
   * @description Lists the versions for the specified package or all packages in the org.
   * @example If a metadata package ID is specified, lists all versions of the specified package. Otherwise, lists all package versions for the org. For each package version, the list includes the package version ID, metadata package ID, name, version number, and release state.
   * force:package1:version:list [-i <id>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("version:list")
  public versionList(
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--packageid") packageid?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionList,
      arguments
    )
  }
}
