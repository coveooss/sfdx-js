import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Package2
 *
 * @export
 * @class Package2
 */
@apiNamespace("force")
@apiCommandClass("Package2")
export class Package2 {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a package2
   *
   * @param {string} name Name of the package2 to create. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @param {string} namespace Global namespace for the package2. 
   * @param {string} description Description of the package2. 
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
  public create(
    @apiParameter("--name") name: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string,
    @apiParameter("--namespace") namespace?: string,
    @apiParameter("--description") description?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.create, arguments)
  }

  /**
   * list the org’s installed subscriber package2 versions
   *
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all subscriber package2 versions installed in the target org.
   * @example Lists all subscriber package2 versions installed in the target org.
   * force:package2:installed:list [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("installed:list")
  public installedList(
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.installedList,
      arguments
    )
  }

  /**
   * list all package2 packages in the dev hub org
   *
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all second-generation packages in the Dev Hub org.
   * @example You can view the namespace, ID, and subscriber package2 ID for each package2.
   * force:package2:list [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("list")
  public list(
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.list, arguments)
  }

  /**
   * create a manifest for the package2 from the specified directory
   *
   * @param {string} directory Directory for reading the package2 contents and generating the package2 manifest JSON file. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Creates a second-generation package manifest file in JSON format based on the files in the specified package2 source directory.
   * @example The manifest must be in the directory specified when you create a package2 version.
   * force:package2:manifest:create -d <directory> [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("manifest:create")
  public manifestCreate(
    @apiParameter("--directory") directory: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.manifestCreate,
      arguments
    )
  }

  /**
   * list all subscriber package2 members in the org
   *
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Package2
   * @description Lists all subscriber package2 members in the target org.
   * @example Lists the history of each package2 member: the package2 version when a member was first added (minimum), the latest package version that contains the member (current), and the latest version that contained any deleted members (maximum). The Subject Manageable State shows the state of the object referenced by the package2 member: beta, deleted, deprecated, installed, released, or unmanaged.
   * force:package2:members:list [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("members:list")
  public membersList(
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.membersList,
      arguments
    )
  }

  /**
   * create a package2 version in the dev hub org
   *
   * @param {string} package2id ID of parent package2 (starts with 0Ho). 
   * @param {string} directory The directory that contains the manifest, descriptor, and contents of the package2 version. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @param {string} wait The number of minutes to wait for the package2 version to be created. 
   * @param {string} preserve Preserves temp files that would otherwise be deleted. 
   * @param {string} tag The package2 version's tag. 
   * @param {string} branch The package2 version's branch. 
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
    @apiParameter("--package2id") package2id: string,
    @apiParameter("--directory") directory: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string,
    @apiParameter("--wait") wait?: string,
    @apiParameter("--preserve") preserve?: string,
    @apiParameter("--tag") tag?: string,
    @apiParameter("--branch") branch?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreate,
      arguments
    )
  }

  /**
   * retrieve a package2 version creation request in the dev hub org
   *
   * @param {string} package2createrequestid The ID of the package2 version creation request you want to display. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
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
    @apiParameter("--package2createrequestid") package2createrequestid: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateGet,
      arguments
    )
  }

  /**
   * list package2 version creation requests in the dev hub org
   *
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @param {string} status Filters the list based on the status of version creation requests. 
   * @param {string} createdlastdays Lists the requests made in the last specified number of days, starting at 00:00:00 of first day to now. Use 0 for today. 
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
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string,
    @apiParameter("--status") status?: string,
    @apiParameter("--createdlastdays") createdlastdays?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateList,
      arguments
    )
  }

  /**
   * retrieve a package version in the dev hub org
   *
   * @param {string} package2versionid The package2 version ID (starts with 05i). 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
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
  public versionGet(
    @apiParameter("--package2versionid") package2versionid: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionGet,
      arguments
    )
  }

  /**
   * install a subscriber package2 version
   *
   * @param {string} subscriberpackage2versionid The ID of the subscriber package2 version to install (starts with 04t). 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
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
    @apiParameter("--subscriberpackage2versionid")
    subscriberpackage2versionid: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionInstall,
      arguments
    )
  }

  /**
   * list all package2 versions in the dev hub org
   *
   * @param {Boolean} verbose Display extended package2 versions detail. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {Boolean} concise Displays limited package2 version details. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @param {string} orderby Orders the list by the specified package2 version fields. 
   * @param {Boolean} released Displays released versions only (IsBeta=false). 
   * @param {string} package2ids Filters results on the specified comma-delimited package2 IDs (start with 0Ho). 
   * @param {string} modifiedlastdays Lists the items modified in the last given number of days, starting at 00:00:00 of first day to now. Use 0 for today. 
   * @param {string} createdlastdays Lists the requests made in the last specified number of days, starting at 00:00:00 of first day to now. Use 0 for today. 
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
  public versionList(
    @apiParameter("--verbose") verbose?: Boolean,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--concise") concise?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string,
    @apiParameter("--orderby") orderby?: string,
    @apiParameter("--released") released?: Boolean,
    @apiParameter("--package2ids") package2ids?: string,
    @apiParameter("--modifiedlastdays") modifiedlastdays?: string,
    @apiParameter("--createdlastdays") createdlastdays?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionList,
      arguments
    )
  }

  /**
   * uninstall a subscriber package2 version
   *
   * @param {string} subscriberpackage2versionid The ID of the subscriber package2 version to uninstall (starts with 04t). 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
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
    @apiParameter("--subscriberpackage2versionid")
    subscriberpackage2versionid: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionUninstall,
      arguments
    )
  }

  /**
   * update a package2 version in the dev hub org
   *
   * @param {string} package2versionid The package2 version ID (starts with 05i). 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @param {Boolean} setasreleased Sets the package2 version as released. Second-generation packages can’t be changed to beta after they've been released. 
   * @param {string} tag The package2 version tag. 
   * @param {string} branch The package2 version branch. 
   * @param {string} description The package2 version description. 
   * @param {string} name The package2 version name. 
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
    @apiParameter("--package2versionid") package2versionid: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string,
    @apiParameter("--setasreleased") setasreleased?: Boolean,
    @apiParameter("--tag") tag?: string,
    @apiParameter("--branch") branch?: string,
    @apiParameter("--description") description?: string,
    @apiParameter("--name") name?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionUpdate,
      arguments
    )
  }
}
