// Generated on July 30th 2017, 5:53:28 pm. DO NOT MODIFY
import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Apex
 *
 * @export
 * @class Apex
 */
@apiNamespace("force")
@apiCommandClass("apex")
export class Apex {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create an apex class
   *
   * @param {string} classname The name of the new Apex class. The name can be up to 40 characters and must start with a letter. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {string} json Formats output as JSON. 
   * @param {string} apiversion The API version of the created source. 
   * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
   * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
   * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
   * @returns {(Promise<Object | void>)}
   * @memberof Apex
   * @description Creates an Apex class in the specified directory or the current working directory. If you don’t explicitly set the API version, it defaults to the current API version. The .cls file and associated metadata file are created.
   * @example If not supplied, the apiversion, template, and outputdir use default values.
   * The outputdir can be an absolute path or relative to the current working directory.
   * 
   * Examples:
   *    $ sfdx force:apex:class:create -n MyClass
   *    $ sfdx force:apex:class:create -n MyClass -d classes
   * 
   * force:apex:class:create -n <string> [-t <string>] [-d <string>] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("class:create")
  public classCreate(
    @apiParameter("--classname") classname: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: string,
    @apiParameter("--apiversion") apiversion?: string,
    @apiParameter("--reflect") reflect?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--template") template?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.classCreate,
      arguments
    )
  }

  /**
   * execute anonymous apex code
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} apexcodefile Path to a local file that contains Apex code. 
   * @returns {(Promise<Object | void>)}
   * @memberof Apex
   * @description Executes one or more lines of anonymous Apex code, or executes the code in a local file.
   * @example Executes one or more lines of Apex code, or executes the code in a local file.
   * Before you enter code, run this command with no parameters to get a prompt.
   * From the prompt, all commands are executed in a single execute anonymous request.
   * For more information, see "Anonymous Blocks" in the Apex Developer Guide.
   * 
   * Examples:
   *    $ sfdx force:apex:execute -f ~/test.apex
   * 
   *    $ sfdx force:apex:execute 
   *    >> Start typing Apex code. Press the Enter key after each line, 
   *    >> then press CTRL+D when finished.
   * force:apex:execute [-f <file>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("execute")
  public execute(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--apexcodefile") apexcodefile?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.execute,
      arguments
    )
  }

  /**
   * fetch a debug log
   *
   * @param {string} logid ID of the log to display. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Apex
   * @description Fetches a specific debug log.
   * @example When you execute this command in a project, it fetches the specified log from your default scratch org.To get the IDs for your debug logs, run "sfdx force:apex:log:list".
   * 
   * Examples:
   *    $ sfdx force:apex:log:get -i <log id>
   *    $ sfdx force:apex:log:get -i <log id> -u me@my.org
   * force:apex:log:get -i <id> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("log:get")
  public logGet(
    @apiParameter("--logid") logid: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.logGet, arguments)
  }

  /**
   * list debug logs
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Apex
   * @description Displays a list of debug log IDs, along with general information about the logs.
   * @example When you execute this command in a project, it lists the log IDs for your default scratch org.
   * 
   * Examples:
   *    $ sfdx force:apex:log:list
   *    $ sfdx force:apex:log:list -u me@my.org
   * force:apex:log:list [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("log:list")
  public logList(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.logList,
      arguments
    )
  }

  /**
   * display test results
   *
   * @param {string} testrunid ID of test run. 
   * @param {Boolean} verbose Displays Apex test processing details. If json format is specified, processing details aren’t displayed. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} wait Sets the streaming client socket timeout, in minutes.If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently. 
   * @param {string} resultformat Format to use when displaying test results. If you also specify the --json flag, --json overrides this parameter. 
   * @param {string} outputdir Directory to store test run files. 
   * @param {Boolean} codecoverage Retrieves code coverage results. 
   * @returns {(Promise<Object | void>)}
   * @memberof Apex
   * @description Displays the test results for a specific test run.
   * @example Displays test results for an enqueued or completed asynchronous Apex test run.
   * 
   * Examples:
   *    $ sfdx force:apex:test:report -i <test run id>
   *    $ sfdx force:apex:test:report -i <test run id> -r junit
   *    $ sfdx force:apex:test:report -i <test run id> -c --json
   * force:apex:test:report -i <id> [-c] [-d <directory>] [-r <string>] [-w <minutes>] [-u <string>] [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("test:report")
  public testReport(
    @apiParameter("--testrunid") testrunid: string,
    @apiParameter("--verbose") verbose?: Boolean,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--wait") wait?: string,
    @apiParameter("--resultformat") resultformat?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--codecoverage") codecoverage?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.testReport,
      arguments
    )
  }

  /**
   * invoke apex tests
   *
   * @param {string} wait Sets the streaming client socket timeout, in minutes.If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently. 
   * @param {Boolean} verbose Displays Apex test processing details. If json format is specified, processing details aren’t displayed. 
   * @param {string} classnames Comma-separated list of Apex test class names to execute. You can’t specify both class names and suite names. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} precompilewait Specifies how long to wait (in minutes) for Apex pre-compilation to complete before running the tests or timing out. 
   * @param {string} suitenames Comma-separated list of Apex test suite names to execute. You can’t specify both class names and suite names. 
   * @param {string} resultformat Format to use when displaying test results. If you also specify the --json flag, --json overrides this parameter. 
   * @param {string} testlevel Specifies which tests to run, using one of these TestLevel enum values:
   * RunSpecifiedTests—Only the tests that you specify are run.
   * RunLocalTests—All tests in your org are run, except the ones that originate from installed managed packages.
   * RunAllTestsInOrg—All tests are in your org and in installed managed packages are run. 
   * @param {string} outputdir Directory to store test run files. 
   * @param {Boolean} codecoverage Retrieves code coverage results. 
   * @returns {(Promise<Object | void>)}
   * @memberof Apex
   * @description Runs Apex tests.
   * @example By default, runs all Apex tests in the org’s namespace.
   * To run specific tests, specify the class names or suite names or set a --testlevel value.
   * 
   * Examples:
   *    $ sfdx force:apex:test:run
   *    $ sfdx force:apex:test:run -n MyClassTest,MyOtherClassTest -r human
   *    $ sfdx force:apex:test:run -s MySuite,MyOtherSuite -c --json
   *    $ sfdx force:apex:test:run -l RunLocalTests -d <path to outputdir> -u me@my.org
   * force:apex:test:run (-n <string>... | -s <string>...) [-c] [-d <directory>] [-l <string>] [-r <string>] [-u <string>] [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("test:run")
  public testRun(
    @apiParameter("--wait") wait?: string,
    @apiParameter("--verbose") verbose?: Boolean,
    @apiParameter("--classnames") classnames?: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--precompilewait") precompilewait?: string,
    @apiParameter("--suitenames") suitenames?: string,
    @apiParameter("--resultformat") resultformat?: string,
    @apiParameter("--testlevel") testlevel?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--codecoverage") codecoverage?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.testRun,
      arguments
    )
  }
}
