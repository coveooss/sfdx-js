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
 * Lightning
 *
 * @export
 * @class Lightning
 */
@apiNamespace("force")
@apiCommandClass("lightning")
export class Lightning {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a lightning app
   *
   * @param {string} appname The Lightning app name. The name can be up to 40 characters and must start with a letter. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {string} json Formats output as JSON. 
   * @param {string} apiversion The API version of the created source. 
   * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
   * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
   * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
   * @returns {(Promise<Object | void>)}
   * @memberof Lightning
   * @description Creates a Lightning app bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.
   * @example If not supplied, the apiversion, template, and outputdir use default values.
   * The outputdir can be an absolute path or relative to the current working directory.
   * 
   * Examples:
   *    $ sfdx force:lightning:app:create -n myapp
   *    $ sfdx force:lightning:app:create -n myapp -d lightning
   * 
   * force:lightning:app:create -n <string> [-t <string>] [-d <string>] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("app:create")
  public appCreate(
    @apiParameter("--appname") appname: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: string,
    @apiParameter("--apiversion") apiversion?: string,
    @apiParameter("--reflect") reflect?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--template") template?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.appCreate,
      arguments
    )
  }

  /**
   * create a lightning component
   *
   * @param {string} componentname The Lightning component name. The name can be up to 40 characters and must start with a letter. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {string} json Formats output as JSON. 
   * @param {string} apiversion The API version of the created source. 
   * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
   * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
   * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
   * @returns {(Promise<Object | void>)}
   * @memberof Lightning
   * @description Creates a Lightning component bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.
   * @example If not supplied, the apiversion, template, and outputdir use default values.
   * The outputdir can be an absolute path or relative to the current working directory.
   * 
   * Examples:
   *    $ sfdx force:lightning:component:create -n mycomponent
   *    $ sfdx force:lightning:component:create -n mycomponent -d lightning
   * 
   * force:lightning:component:create -n <string> [-t <string>] [-d <string>] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("component:create")
  public componentCreate(
    @apiParameter("--componentname") componentname: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: string,
    @apiParameter("--apiversion") apiversion?: string,
    @apiParameter("--reflect") reflect?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--template") template?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.componentCreate,
      arguments
    )
  }

  /**
   * create a lightning event
   *
   * @param {string} eventname The Lightning event name. The name can be up to 40 characters and must start with a letter. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {string} json Formats output as JSON. 
   * @param {string} apiversion The API version of the created source. 
   * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
   * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
   * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
   * @returns {(Promise<Object | void>)}
   * @memberof Lightning
   * @description Creates a Lightning event bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.
   * @example If not supplied, the apiversion, template, and outputdir use default values.
   * The outputdir can be an absolute path or relative to the current working directory.
   * 
   * Examples:
   *    $ sfdx force:lightning:event:create -n myevent
   *    $ sfdx force:lightning:event:create -n myevent -d lightning
   * 
   * force:lightning:event:create -n <string> [-t <string>] [-d <string>] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("event:create")
  public eventCreate(
    @apiParameter("--eventname") eventname: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: string,
    @apiParameter("--apiversion") apiversion?: string,
    @apiParameter("--reflect") reflect?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--template") template?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.eventCreate,
      arguments
    )
  }

  /**
   * create a lightning interface
   *
   * @param {string} interfacename The Lightning interface name. The name can be up to 40 characters and must start with a letter. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {string} json Formats output as JSON. 
   * @param {string} apiversion The API version of the created source. 
   * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
   * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
   * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
   * @returns {(Promise<Object | void>)}
   * @memberof Lightning
   * @description Creates a Lightning interface bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.
   * @example If not supplied, the apiversion, template, and outputdir use default values.
   * The outputdir can be an absolute path or relative to the current working directory.
   * 
   * Examples:
   *    $ sfdx force:lightning:interface:create -n myinterface
   *    $ sfdx force:lightning:interface:create -n myinterface -d lightning
   * 
   * force:lightning:interface:create -n <string> [-t <string>] [-d <string>] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("interface:create")
  public interfaceCreate(
    @apiParameter("--interfacename") interfacename: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: string,
    @apiParameter("--apiversion") apiversion?: string,
    @apiParameter("--reflect") reflect?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--template") template?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.interfaceCreate,
      arguments
    )
  }

  /**
   * create a lightning test
   *
   * @param {string} testname The name of the new Lightning test. The name can be up to 40 characters and must start with a letter. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {string} json Formats output as JSON. 
   * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
   * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
   * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
   * @returns {(Promise<Object | void>)}
   * @memberof Lightning
   * @description Creates a Lightning test in the specified directory or the current working directory. The .resource file and associated metadata file are created.
   * @example The outputdir can be an absolute path or relative to the current working directory.
   * 
   * Examples:
   *    $ sfdx force:lightning:test:create -n MyLightningTest
   *    $ sfdx force:lightning:test:create -n MyLightningTest -d lightningTests
   * 
   * force:lightning:test:create -n <string> [-t <string>] [-d <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("test:create")
  public testCreate(
    @apiParameter("--testname") testname: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: string,
    @apiParameter("--reflect") reflect?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--template") template?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.testCreate,
      arguments
    )
  }

  /**
   * invoke lightning component tests
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} timeout Time, in milliseconds, to wait for the results element to be present in the DOM, before failing and moving on to the next test. 
   * @param {Boolean} leavebrowseropen Leaves browser open after the test finishes so that you can view the test suite results. 
   * @param {string} configfile Path to a test configuration file to configure WebDriver and other settings. For details, see the LTS documentation. 
   * @param {string} resultformat Format to use when displaying test results. If you also specify the --json flag, --json overrides this parameter. 
   * @param {string} outputdir Directory path to store test run artifacts: log files, test results, etc. 
   * @param {string} appname Name of your Lightning test application. The name is case insensitive, and ".app" is optional, so "Test" and "test.app" are equivalent.
   * Default value: Test.app 
   * @returns {(Promise<Object | void>)}
   * @memberof Lightning
   * @description Runs Lightning component tests. The Lightning Testing Service (LTS) unmanaged package must be installed in your org. For details, see the LTS documentation.
   * @example Examples:
   *    $ sfdx force:lightning:test:run
   *    $ sfdx force:lightning:test:run -a tests -r human
   *    $ sfdx force:lightning:test:run -f config/myConfigFile.json -d testResultFolder
   * force:lightning:test:run [-a <string>] [-d <directory>] [-r <string>] [-f <filepath>] [-o] [-t <number>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("test:run")
  public testRun(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--timeout") timeout?: string,
    @apiParameter("--leavebrowseropen") leavebrowseropen?: Boolean,
    @apiParameter("--configfile") configfile?: string,
    @apiParameter("--resultformat") resultformat?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--appname") appname?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.testRun,
      arguments
    )
  }
}
