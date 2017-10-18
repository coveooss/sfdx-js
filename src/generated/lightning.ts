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
 * Options for the method lint of class Lightning.
 *
 * @export
 * @interface ILightningLint
 */
export interface ILightningLint {
  /**
   * [Optional] Exit with error code 1 if there are lint issues. The default exits without an error code.
   * @type {string}
   * @memberof ILightningLint
   */
  exit?: string

  /**
   * [Optional] Report both warnings and errors. The default is to report only errors.
   * @type {string}
   * @memberof ILightningLint
   */
  verbose?: string

  /**
   * [Optional] Path to a custom ESLint configuration file. Only code style rules are used, while the rest are ignored. For example: --config path/to/.eslintrc.
   * @type {string}
   * @memberof ILightningLint
   */
  config?: string

  /**
   * [Optional] Format output as JSON, usually for integration with other tools. The default is standard text output format.
   * @type {string}
   * @memberof ILightningLint
   */
  json?: string

  /**
   * [Optional] A “glob” pattern used to add specific files to the analysis. For example, to only analyse your controller files, use --files ** /*Controller.js. When specified, this value overrides the --ignore flag. The default is all .js files.
   * @type {string}
   * @memberof ILightningLint
   */
  files?: string

  /**
   * [Optional] A “glob” pattern used to filter folders (and their contents) out of the analysis. For example: --ignore ** /foo/**.
   * @type {string}
   * @memberof ILightningLint
   */
  ignore?: string
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
 * Options for the method testInstall of class Lightning.
 *
 * @export
 * @interface ILightningTestInstall
 */
export interface ILightningTestInstall {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ILightningTestInstall
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ILightningTestInstall
   */
  json?: Boolean

  /**
   * [Optional] A username or alias for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ILightningTestInstall
   */
  targetusername?: string

  /**
   * [Optional] Type of LTS unmanaged package to install. 'jasmine' and 'mocha' contains the essentials for development, 'full' contains both, and adds sample components and tests in the package. 'full' is best for 'kicking the tires' of LTS.
   * @type {string}
   * @memberof ILightningTestInstall
   */
  packagetype?: string

  /**
   * [Optional] The release version of LTS unmanaged package you want to install.
   * @type {string}
   * @memberof ILightningTestInstall
   */
  releaseversion?: string

  /**
   * [Optional] Maximum number of minutes to wait for installation status.
   * @type {string}
   * @memberof ILightningTestInstall
   */
  wait?: string
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
   * [Optional] A username or alias for the target org. Overrides the default target org.
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
   * [Optional] Directory path to store test run artifacts: log files, test results, and so on.
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
@apiCommandClass("force:lightning")
export class Lightning {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a Lightning app
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
   * create a Lightning component
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
   * create a Lightning event
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
   * create a Lightning interface
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
   * analyse (lint) Lightning component code
   * @returns {(Promise<Object | void>)}
   * @memberof Lightning
   * @description Runs a static analysis, or “lint,” tool on your Lightning component code. The default rules include recommended best practices and LockerService requirements. For details, including how to customize the rules for your org, see the Lightning Components Developer Guide.
   * @example Examples: 
   *    $ sfdx force:lightning:lint ./path/to/be/linted/
   *    $ heroku lightning:lint ./path/to/be/linted/
   * 
   */
  @apiCommand("lint")
  public lint(options?: ILightningLint): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      exit: "--exit",
      verbose: "--verbose",
      config: "--config",
      json: "--json",
      files: "--files",
      ignore: "--ignore"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.lint,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * create a Lightning test
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
   * install Lightning Testing Service unmanaged package in your org
   * @returns {(Promise<Object | void>)}
   * @memberof Lightning
   * @description Installs a Lightning Testing Service (LTS) unmanaged package into your org.
   * @example Examples:
   *    $ sfdx force:lightning:test:install
   *    $ sfdx force:lightning:test:install -w 0 -r v1.0
   *    $ sfdx force:lightning:test:install -t jasmine
   * force:lightning:test:install [-w <minutes>] [-r <string>] [-t <string>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("test:install")
  public testInstall(options?: ILightningTestInstall): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      packagetype: "--packagetype",
      releaseversion: "--releaseversion",
      wait: "--wait"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.testInstall,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * invoke Lightning component tests
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
