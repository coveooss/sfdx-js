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
 * Options for the method classCreate of class Apex.
 *
 * @export
 * @interface IApexClassCreate
 */
export interface IApexClassCreate {
  /**
   * [Required] The name of the new Apex class. The name can be up to 40 characters and must start with a letter.
   * @type {string}
   * @memberof IApexClassCreate
   */
  classname: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IApexClassCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof IApexClassCreate
   */
  json?: string

  /**
   * [Optional] The API version of the created source.
   * @type {string}
   * @memberof IApexClassCreate
   */
  apiversion?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof IApexClassCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof IApexClassCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof IApexClassCreate
   */
  template?: string
}

/**
 * Options for the method execute of class Apex.
 *
 * @export
 * @interface IApexExecute
 */
export interface IApexExecute {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IApexExecute
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IApexExecute
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IApexExecute
   */
  targetusername?: string

  /**
   * [Optional] Path to a local file that contains Apex code.
   * @type {string}
   * @memberof IApexExecute
   */
  apexcodefile?: string
}

/**
 * Options for the method logGet of class Apex.
 *
 * @export
 * @interface IApexLogGet
 */
export interface IApexLogGet {
  /**
   * [Required] ID of the log to display.
   * @type {string}
   * @memberof IApexLogGet
   */
  logid: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IApexLogGet
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IApexLogGet
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IApexLogGet
   */
  targetusername?: string
}

/**
 * Options for the method logList of class Apex.
 *
 * @export
 * @interface IApexLogList
 */
export interface IApexLogList {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IApexLogList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IApexLogList
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IApexLogList
   */
  targetusername?: string
}

/**
 * Options for the method testReport of class Apex.
 *
 * @export
 * @interface IApexTestReport
 */
export interface IApexTestReport {
  /**
   * [Required] The ID of test run.
   * @type {string}
   * @memberof IApexTestReport
   */
  testrunid: string

  /**
   * [Optional] Displays Apex test processing details. If JSON format is specified, processing details aren’t displayed.
   * @type {Boolean}
   * @memberof IApexTestReport
   */
  verbose?: Boolean

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IApexTestReport
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IApexTestReport
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IApexTestReport
   */
  targetusername?: string

  /**
   * [Optional] Sets the streaming client socket timeout, in minutes.If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently.
   * @type {string}
   * @memberof IApexTestReport
   */
  wait?: string

  /**
   * [Optional] Format to use when displaying test results. If you also specify the --json flag, --json overrides this parameter.
   * @type {string}
   * @memberof IApexTestReport
   */
  resultformat?: string

  /**
   * [Optional] Directory to store test run files.
   * @type {string}
   * @memberof IApexTestReport
   */
  outputdir?: string

  /**
   * [Optional] Retrieves code coverage results.
   * @type {Boolean}
   * @memberof IApexTestReport
   */
  codecoverage?: Boolean
}

/**
 * Options for the method testRun of class Apex.
 *
 * @export
 * @interface IApexTestRun
 */
export interface IApexTestRun {
  /**
   * [Optional] Sets the streaming client socket timeout, in minutes.If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently.
   * @type {string}
   * @memberof IApexTestRun
   */
  wait?: string

  /**
   * [Optional] Displays Apex test processing details. If JSON format is specified, processing details aren’t displayed.
   * @type {Boolean}
   * @memberof IApexTestRun
   */
  verbose?: Boolean

  /**
   * [Optional] Comma-separated list of Apex test class names to execute. You can’t specify both class names and suite names.
   * @type {string}
   * @memberof IApexTestRun
   */
  classnames?: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IApexTestRun
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IApexTestRun
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IApexTestRun
   */
  targetusername?: string

  /**
   * [Optional] Specifies how long to wait (in minutes) for Apex pre-compilation to complete before running the tests or timing out.
   * @type {string}
   * @memberof IApexTestRun
   */
  precompilewait?: string

  /**
   * [Optional] Comma-separated list of Apex test suite names to execute. You can’t specify both class names and suite names.
   * @type {string}
   * @memberof IApexTestRun
   */
  suitenames?: string

  /**
   * [Optional] Format to use when displaying test results. If you also specify the --json flag, --json overrides this parameter.
   * @type {string}
   * @memberof IApexTestRun
   */
  resultformat?: string

  /**
   * [Optional] Specifies which tests to run, using one of these TestLevel enum values:
   * RunSpecifiedTests—Only the tests that you specify are run.
   * RunLocalTests—All tests in your org are run, except the ones that originate from installed managed packages.
   * RunAllTestsInOrg—All tests are in your org and in installed managed packages are run.
   * @type {string}
   * @memberof IApexTestRun
   */
  testlevel?: string

  /**
   * [Optional] Directory to store test run files.
   * @type {string}
   * @memberof IApexTestRun
   */
  outputdir?: string

  /**
   * [Optional] Retrieves code coverage results.
   * @type {Boolean}
   * @memberof IApexTestRun
   */
  codecoverage?: Boolean
}

/**
 * Apex
 *
 * @export
 * @class Apex
 */
@apiNamespace("force")
@apiCommandClass("force:apex")
export class Apex {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create an Apex class
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
  public classCreate(options: IApexClassCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      classname: "--classname",
      loglevel: "--loglevel",
      json: "--json",
      apiversion: "--apiversion",
      reflect: "--reflect",
      outputdir: "--outputdir",
      template: "--template"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.classCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * execute anonymous Apex code
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
  public execute(options?: IApexExecute): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      apexcodefile: "--apexcodefile"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.execute,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * fetch a debug log
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
  public logGet(options: IApexLogGet): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      logid: "--logid",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.logGet,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list debug logs
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
  public logList(options?: IApexLogList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.logList,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * display test results
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
  public testReport(options: IApexTestReport): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      testrunid: "--testrunid",
      verbose: "--verbose",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      wait: "--wait",
      resultformat: "--resultformat",
      outputdir: "--outputdir",
      codecoverage: "--codecoverage"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.testReport,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * invoke Apex tests
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
  public testRun(options?: IApexTestRun): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      wait: "--wait",
      verbose: "--verbose",
      classnames: "--classnames",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      precompilewait: "--precompilewait",
      suitenames: "--suitenames",
      resultformat: "--resultformat",
      testlevel: "--testlevel",
      outputdir: "--outputdir",
      codecoverage: "--codecoverage"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.testRun,
      options,
      parameterNamesToSwitchNames
    )
  }
}
