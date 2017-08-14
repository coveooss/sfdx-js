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
 * Options for the method convert of class Source.
 *
 * @export
 * @interface ISourceConvert
 */
export interface ISourceConvert {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ISourceConvert
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ISourceConvert
   */
  json?: Boolean

  /**
   * [Optional] The name of the package to associate with the Metadata API source.
   * @type {string}
   * @memberof ISourceConvert
   */
  packagename?: string

  /**
   * [Optional] The output directory to export the Metadata API source to.
   * @type {string}
   * @memberof ISourceConvert
   */
  outputdir?: string

  /**
   * [Optional] The directory that contains the source to convert.
   * @type {string}
   * @memberof ISourceConvert
   */
  rootdir?: string
}

/**
 * Options for the method open of class Source.
 *
 * @export
 * @interface ISourceOpen
 */
export interface ISourceOpen {
  /**
   * [Required] File to edit.
   * @type {string}
   * @memberof ISourceOpen
   */
  sourcefile: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ISourceOpen
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ISourceOpen
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ISourceOpen
   */
  targetusername?: string

  /**
   * [Optional] Generate a navigation URL path, but don’t launch a browser-based editor.
   * @type {Boolean}
   * @memberof ISourceOpen
   */
  urlonly?: Boolean
}

/**
 * Options for the method pull of class Source.
 *
 * @export
 * @interface ISourcePull
 */
export interface ISourcePull {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ISourcePull
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ISourcePull
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ISourcePull
   */
  targetusername?: string

  /**
   * [Optional] Runs the pull command even if conflicts exist. Changes in the scratch org overwrite changes in the project.
   * @type {Boolean}
   * @memberof ISourcePull
   */
  forceoverwrite?: Boolean

  /**
   * [Optional] The number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.
   * @type {string}
   * @memberof ISourcePull
   */
  wait?: string
}

/**
 * Options for the method push of class Source.
 *
 * @export
 * @interface ISourcePush
 */
export interface ISourcePush {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ISourcePush
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ISourcePush
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ISourcePush
   */
  targetusername?: string

  /**
   * [Optional] Runs the push command even if conflicts exist. Changes in the project overwrite changes in the scratch org.
   * @type {Boolean}
   * @memberof ISourcePush
   */
  forceoverwrite?: Boolean

  /**
   * [Optional] Completes the deployment even if warnings are generated.
   * @type {Boolean}
   * @memberof ISourcePush
   */
  ignorewarnings?: Boolean

  /**
   * [Optional] Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.
   * @type {string}
   * @memberof ISourcePush
   */
  wait?: string
}

/**
 * Options for the method status of class Source.
 *
 * @export
 * @interface ISourceStatus
 */
export interface ISourceStatus {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ISourceStatus
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ISourceStatus
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ISourceStatus
   */
  targetusername?: string

  /**
   * [Optional] Lists the changes that have been made in the scratch org.
   * @type {Boolean}
   * @memberof ISourceStatus
   */
  remote?: Boolean

  /**
   * [Optional] Lists the changes that have been made locally.
   * @type {Boolean}
   * @memberof ISourceStatus
   */
  local?: Boolean

  /**
   * [Optional] Lists all the changes that have been made.
   * @type {Boolean}
   * @memberof ISourceStatus
   */
  all?: Boolean
}

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
  public convert(options?: ISourceConvert): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      packagename: "--packagename",
      outputdir: "--outputdir",
      rootdir: "--rootdir"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.convert,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * edit a lightning page with lightning app builder
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
  public open(options: ISourceOpen): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      sourcefile: "--sourcefile",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      urlonly: "--urlonly"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.open,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * pull source from the scratch org to the project
   * @returns {(Promise<Object | void>)}
   * @memberof Source
   * @description Pulls changed source from the scratch org to your project to keep them in sync.
   * @example If the command detects a conflict, it displays the conflicts but does not complete the process. After reviewing the conflict, rerun the command with the --forceoverwrite parameter.
   * force:source:pull [-w <minutes>] [-f] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("pull")
  public pull(options?: ISourcePull): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      forceoverwrite: "--forceoverwrite",
      wait: "--wait"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.pull,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * push source to an org from the project
   * @returns {(Promise<Object | void>)}
   * @memberof Source
   * @description Pushes changed source from your project to the scratch org to keep them in sync.
   * @example If the command detects a conflict, it displays the conflicts but does not complete the process. After reviewing the conflict, rerun the command with the --forceoverwrite parameter.
   * force:source:push [-w <minutes>] [-g] [-f] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("push")
  public push(options?: ISourcePush): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      forceoverwrite: "--forceoverwrite",
      ignorewarnings: "--ignorewarnings",
      wait: "--wait"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.push,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list local changes and/or changes in a scratch org
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
  public status(options?: ISourceStatus): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      remote: "--remote",
      local: "--local",
      all: "--all"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.status,
      options,
      parameterNamesToSwitchNames
    )
  }
}
