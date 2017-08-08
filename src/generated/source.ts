// Generated on August 8th 2017, 4:54:51 pm. DO NOT MODIFY
import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Source
 *
 * @export
 * @class Source
 */
@apiNamespace("force")
@apiCommandClass("source")
export class Source {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * convert sfdx source into the metadata api source format
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} packagename The name of the package to associate with the Metadata API source. 
   * @param {string} outputdir The output directory to export the Metadata API source to. 
   * @param {string} rootdir The directory that contains the source to convert. 
   * @returns {(Promise<Object | void>)}
   * @memberof Source
   * @description Converts source in a Salesforce DX project into source that you can deploy using Metadata API.
   * @example To convert Salesforce DX–formatted source into a format that you can deploy using Metadata API, run "sfdx force:source:convert". Then deploy the source using "sfdx force:mdapi:deploy".
   * 
   * To convert Metadata API–formatted source into the Salesforce DX format, run "sfdx force:mdapi:convert".
   * 
   * Examples:
   *    $ sfdx force:source:convert -r <path to source>
   *    $ sfdx force:source:convert -r <path to source> -d <path to output dir>
   * force:source:convert [-r <directory>] [-d <directory>] [-n <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("convert")
  public convert(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--packagename") packagename?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--rootdir") rootdir?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.convert,
      arguments
    )
  }

  /**
   * edit a lightning page with lightning app builder
   *
   * @param {string} sourcefile File to edit. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {Boolean} urlonly Generate a navigation URL path, but don’t launch a browser-based editor. 
   * @returns {(Promise<Object | void>)}
   * @memberof Source
   * @description Opens the specified Lightning Page in Lightning App Builder. Lightning Page files have the suffix .flexipage-meta.xml, and are stored in the flexipages directory. If you specify a different type of file, this command opens your org’s home page.
   * @example If Force.com IDE 2 is installed, the file opens in an embedded browser within the IDE. If Force.com IDE 2 isn’t installed, the file opens in your default browser.
   * If no browser-based editor is available for the selected file, this command opens your org’s home page.
   * To generate a URL for the browser-based editor but not open the editor, use --urlonly.
   * 
   * Examples:
   *    $ sfdx force:source:open -f Property_Record_Page.flexipage-meta.xml
   *    $ sfdx force:source:open -f Property_Record_Page.flexipage-meta.xml -r
   * force:source:open -f <file> [-r] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("open")
  public open(
    @apiParameter("--sourcefile") sourcefile: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--urlonly") urlonly?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.open, arguments)
  }

  /**
   * pull source from the scratch org to the project
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {Boolean} forceoverwrite Runs the pull command even if conflicts exist. Changes in the scratch org overwrite changes in the project. 
   * @param {string} wait The number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes. 
   * @returns {(Promise<Object | void>)}
   * @memberof Source
   * @description Pulls changed source from the scratch org to your project to keep them in sync.
   * @example If the command detects a conflict, it displays the conflicts but does not complete the process. After reviewing the conflict, rerun the command with the --forceoverwrite parameter.
   * force:source:pull [-w <minutes>] [-f] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("pull")
  public pull(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--forceoverwrite") forceoverwrite?: Boolean,
    @apiParameter("--wait") wait?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.pull, arguments)
  }

  /**
   * push source to an org from the project
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {Boolean} forceoverwrite Runs the push command even if conflicts exist. Changes in the project overwrite changes in the scratch org. 
   * @param {Boolean} ignorewarnings Completes the deployment even if warnings are generated. 
   * @param {string} wait Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes. 
   * @returns {(Promise<Object | void>)}
   * @memberof Source
   * @description Pushes changed source from your project to the scratch org to keep them in sync.
   * @example If the command detects a conflict, it displays the conflicts but does not complete the process. After reviewing the conflict, rerun the command with the --forceoverwrite parameter.
   * force:source:push [-w <minutes>] [-g] [-f] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("push")
  public push(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--forceoverwrite") forceoverwrite?: Boolean,
    @apiParameter("--ignorewarnings") ignorewarnings?: Boolean,
    @apiParameter("--wait") wait?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.push, arguments)
  }

  /**
   * list local changes and/or changes in a scratch org
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {Boolean} remote Lists the changes that have been made in the scratch org. 
   * @param {Boolean} local Lists the changes that have been made locally. 
   * @param {Boolean} all Lists all the changes that have been made. 
   * @returns {(Promise<Object | void>)}
   * @memberof Source
   * @description Lists changes that have been made locally, in a scratch org, or both.
   * @example Examples:
   *    $ sfdx force:source:status -l
   *    $ sfdx force:source:status -r
   *    $ sfdx force:source:status -a
   *    $ sfdx force:source:status -a -u me@my.org --json
   * force:source:status [-a] [-l] [-r] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("status")
  public status(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--remote") remote?: Boolean,
    @apiParameter("--local") local?: Boolean,
    @apiParameter("--all") all?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.status, arguments)
  }
}
