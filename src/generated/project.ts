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
 * Options for the method create of class Project.
 *
 * @export
 * @interface IProjectCreate
 */
export interface IProjectCreate {
  /**
   * [Required] The name for the new project. Any valid folder name is accepted.
   * @type {string}
   * @memberof IProjectCreate
   */
  projectname: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IProjectCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof IProjectCreate
   */
  json?: string

  /**
   * [Optional] The default package directory name. Metadata items such as classes and Lightning bundles are placed inside this folder.
   * @type {string}
   * @memberof IProjectCreate
   */
  defaultpackagedir?: string

  /**
   * [Optional] The namespace associated with this project and any connected scratch orgs.
   * @type {string}
   * @memberof IProjectCreate
   */
  namespace?: string

  /**
   * [Optional] The source API version for the project. The version defaults to the current release and will normally be defaulted.This is used to properly import or export metadata.
   * @type {string}
   * @memberof IProjectCreate
   */
  sourceapiversion?: string

  /**
   * [Optional] The login URL for the Salesforce instance being used.Normally defaults to https://login.salesforce.com.
   * @type {string}
   * @memberof IProjectCreate
   */
  loginurl?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof IProjectCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof IProjectCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof IProjectCreate
   */
  template?: string
}

/**
 * Options for the method upgrade of class Project.
 *
 * @export
 * @interface IProjectUpgrade
 */
export interface IProjectUpgrade {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IProjectUpgrade
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IProjectUpgrade
   */
  json?: Boolean

  /**
   * [Optional] Run all upgrades, even if the project definition files have already been upgraded.
   * @type {Boolean}
   * @memberof IProjectUpgrade
   */
  forceupgrade?: Boolean
}

/**
 * Project
 *
 * @export
 * @class Project
 */
@apiNamespace("force")
@apiCommandClass("project")
export class Project {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a new SFDX project
   * @returns {(Promise<Object | void>)}
   * @memberof Project
   * @description Creates a Salesforce DX project  in the specified directory or the current working directory. The command creates the necessary configuration files and folders.
   * @example Default values are used if the template, namespace, defaultpackagedir, and outputdir aren’t supplied.
   * The outputdir can be an absolute path or relative to the current working directory.
   * 
   * Examples:
   *    $ sfdx force:project:create --projectname mywork
   *    $ sfdx force:project:create --projectname mywork --defaultpackagedir myapp
   * 
   * force:project:create -n <string> [-t <string>] [-d <string>] [-s <string>] [-p <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("create")
  public create(options: IProjectCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      projectname: "--projectname",
      loglevel: "--loglevel",
      json: "--json",
      defaultpackagedir: "--defaultpackagedir",
      namespace: "--namespace",
      sourceapiversion: "--sourceapiversion",
      loginurl: "--loginurl",
      reflect: "--reflect",
      outputdir: "--outputdir",
      template: "--template"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.create,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * update project config files to the latest format
   * @returns {(Promise<Object | void>)}
   * @memberof Project
   * @description Updates project configuration and definition files to the latest format.
   * @example Examples:
   *  $   sfdx force:project:upgrade
   *  $   sfdx force:project:upgrade -f
   * force:project:upgrade [-f] [--json] [--loglevel <string>]
   */
  @apiCommand("upgrade")
  public upgrade(options?: IProjectUpgrade): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      forceupgrade: "--forceupgrade"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.upgrade,
      options,
      parameterNamesToSwitchNames
    )
  }
}
