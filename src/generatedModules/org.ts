import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Org
 *
 * @export
 * @class Org
 */
@apiNamespace("force")
@apiCommandClass("Org")
export class Org {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a scratch org
   *
   * @param {string} env Environment where the scratch org is created: [sandbox*,virtual,prototype]. 
   * @param {IStringKeyPair[]} expression The key pair expression for the command 
   * @param {string} definitionfile Path to a scratch org definition file. Either --definitionfile or --definitionjson is required. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @param {string} wait Sets the streaming client socket timeout, in minutes.If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently. 
   * @param {string} definitionjson Scratch org definition in JSON format. Either --definitionfile or --definitionjson is required. 
   * @param {string} setalias Set an alias for for the created scratch org. 
   * @param {Boolean} setdefaultusername Sets the created org as the default username. 
   * @param {string} clientid Connected app consumer key, as configured in your Dev Hub. 
   * @param {Boolean} nonamespace Creates the scratch org with no namespace. Useful when using a scratch org to test installations of packages with namespaces. 
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
  public create(
    @apiParameter("--env") env?: string,
    @apiParameter("") expression?: IStringKeyPair[],
    @apiParameter("--definitionfile") definitionfile?: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string,
    @apiParameter("--wait") wait?: string,
    @apiParameter("--definitionjson") definitionjson?: string,
    @apiParameter("--setalias") setalias?: string,
    @apiParameter("--setdefaultusername") setdefaultusername?: Boolean,
    @apiParameter("--clientid") clientid?: string,
    @apiParameter("--nonamespace") nonamespace?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.create, arguments)
  }

  /**
   * mark a scratch org for deletion
   *
   * @param {string} targetusername Username for the target org. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {Boolean} noprompt No prompt to confirm deletion. 
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
  public delete(
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--noprompt") noprompt?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.delete, arguments)
  }

  /**
   * get org description
   *
   * @param {Boolean} verbose Emit additional command output to stdout. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
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
  public display(
    @apiParameter("--verbose") verbose?: Boolean,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.display,
      arguments
    )
  }

  /**
   * list all active orgs you’ve created or authenticated to
   *
   * @param {Boolean} verbose Lists more information about each org. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {Boolean} noprompt Do not prompt for confirmation. 
   * @param {Boolean} clean Remove all local org authorizations for deleted or expired orgs. 
   * @param {Boolean} all Lists all authenticated orgs, including expired, deleted, and unknown-status scratch orgs. 
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
  public list(
    @apiParameter("--verbose") verbose?: Boolean,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--noprompt") noprompt?: Boolean,
    @apiParameter("--clean") clean?: Boolean,
    @apiParameter("--all") all?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.list, arguments)
  }

  /**
   * open an org in your browser
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {Boolean} urlonly Displays a navigation URL, but doesn’t launch your browser. 
   * @param {string} path Navigation URL path (not including domain). 
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
  public open(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--urlonly") urlonly?: Boolean,
    @apiParameter("--path") path?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.open, arguments)
  }
}
