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
 * Options for the method appCreate of class Lightning.
 *
 * @export
 * @interface ILightningAppCreate
 */
export interface ILightningAppCreate {
  /**
   * [Required] The Lightning app name. The name can be up to 40 characters and must start with a letter.
   * @type {string}
   * @memberof ILightningAppCreate
   */
  appname: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ILightningAppCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof ILightningAppCreate
   */
  json?: string

  /**
   * [Optional] The API version of the created source.
   * @type {string}
   * @memberof ILightningAppCreate
   */
  apiversion?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof ILightningAppCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof ILightningAppCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof ILightningAppCreate
   */
  template?: string
}

/**
 * Options for the method componentCreate of class Lightning.
 *
 * @export
 * @interface ILightningComponentCreate
 */
export interface ILightningComponentCreate {
  /**
   * [Required] The Lightning component name. The name can be up to 40 characters and must start with a letter.
   * @type {string}
   * @memberof ILightningComponentCreate
   */
  componentname: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ILightningComponentCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof ILightningComponentCreate
   */
  json?: string

  /**
   * [Optional] The API version of the created source.
   * @type {string}
   * @memberof ILightningComponentCreate
   */
  apiversion?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof ILightningComponentCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof ILightningComponentCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof ILightningComponentCreate
   */
  template?: string
}

/**
 * Options for the method eventCreate of class Lightning.
 *
 * @export
 * @interface ILightningEventCreate
 */
export interface ILightningEventCreate {
  /**
   * [Required] The Lightning event name. The name can be up to 40 characters and must start with a letter.
   * @type {string}
   * @memberof ILightningEventCreate
   */
  eventname: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ILightningEventCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof ILightningEventCreate
   */
  json?: string

  /**
   * [Optional] The API version of the created source.
   * @type {string}
   * @memberof ILightningEventCreate
   */
  apiversion?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof ILightningEventCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof ILightningEventCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof ILightningEventCreate
   */
  template?: string
}

/**
 * Options for the method interfaceCreate of class Lightning.
 *
 * @export
 * @interface ILightningInterfaceCreate
 */
export interface ILightningInterfaceCreate {
  /**
   * [Required] The Lightning interface name. The name can be up to 40 characters and must start with a letter.
   * @type {string}
   * @memberof ILightningInterfaceCreate
   */
  interfacename: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ILightningInterfaceCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof ILightningInterfaceCreate
   */
  json?: string

  /**
   * [Optional] The API version of the created source.
   * @type {string}
   * @memberof ILightningInterfaceCreate
   */
  apiversion?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof ILightningInterfaceCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof ILightningInterfaceCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof ILightningInterfaceCreate
   */
  template?: string
}

/**
 * Options for the method testCreate of class Lightning.
 *
 * @export
 * @interface ILightningTestCreate
 */
export interface ILightningTestCreate {
  /**
   * [Required] The name of the new Lightning test. The name can be up to 40 characters and must start with a letter.
   * @type {string}
   * @memberof ILightningTestCreate
   */
  testname: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ILightningTestCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof ILightningTestCreate
   */
  json?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof ILightningTestCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof ILightningTestCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof ILightningTestCreate
   */
  template?: string
}

/**
 * Options for the method testRun of class Lightning.
 *
 * @export
 * @interface ILightningTestRun
 */
export interface ILightningTestRun {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ILightningTestRun
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ILightningTestRun
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ILightningTestRun
   */
  targetusername?: string

  /**
   * [Optional] Time, in milliseconds, to wait for the results element to be present in the DOM, before failing and moving on to the next test.
   * @type {string}
   * @memberof ILightningTestRun
   */
  timeout?: string

  /**
   * [Optional] Leaves browser open after the test finishes so that you can view the test suite results.
   * @type {Boolean}
   * @memberof ILightningTestRun
   */
  leavebrowseropen?: Boolean

  /**
   * [Optional] Path to a test configuration file to configure WebDriver and other settings. For details, see the LTS documentation.
   * @type {string}
   * @memberof ILightningTestRun
   */
  configfile?: string

  /**
   * [Optional] Format to use when displaying test results. If you also specify the --json flag, --json overrides this parameter.
   * @type {string}
   * @memberof ILightningTestRun
   */
  resultformat?: string

  /**
   * [Optional] Directory path to store test run artifacts: log files, test results, etc.
   * @type {string}
   * @memberof ILightningTestRun
   */
  outputdir?: string

  /**
   * [Optional] Name of your Lightning test application. The name is case insensitive, and ".app" is optional, so "Test" and "test.app" are equivalent.
   * Default value: Test.app
   * @type {string}
   * @memberof ILightningTestRun
   */
  appname?: string
}

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
  public appCreate(options: ILightningAppCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      appname: "--appname",
      loglevel: "--loglevel",
      json: "--json",
      apiversion: "--apiversion",
      reflect: "--reflect",
      outputdir: "--outputdir",
      template: "--template"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.appCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * create a lightning component
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
    options: ILightningComponentCreate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      componentname: "--componentname",
      loglevel: "--loglevel",
      json: "--json",
      apiversion: "--apiversion",
      reflect: "--reflect",
      outputdir: "--outputdir",
      template: "--template"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.componentCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * create a lightning event
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
  public eventCreate(options: ILightningEventCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      eventname: "--eventname",
      loglevel: "--loglevel",
      json: "--json",
      apiversion: "--apiversion",
      reflect: "--reflect",
      outputdir: "--outputdir",
      template: "--template"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.eventCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * create a lightning interface
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
    options: ILightningInterfaceCreate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      interfacename: "--interfacename",
      loglevel: "--loglevel",
      json: "--json",
      apiversion: "--apiversion",
      reflect: "--reflect",
      outputdir: "--outputdir",
      template: "--template"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.interfaceCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * create a lightning test
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
  public testCreate(options: ILightningTestCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      testname: "--testname",
      loglevel: "--loglevel",
      json: "--json",
      reflect: "--reflect",
      outputdir: "--outputdir",
      template: "--template"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.testCreate,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * invoke lightning component tests
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
  public testRun(options?: ILightningTestRun): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      timeout: "--timeout",
      leavebrowseropen: "--leavebrowseropen",
      configfile: "--configfile",
      resultformat: "--resultformat",
      outputdir: "--outputdir",
      appname: "--appname"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.testRun,
      options,
      parameterNamesToSwitchNames
    )
  }
}
