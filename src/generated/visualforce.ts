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
 * Options for the method componentCreate of class Visualforce.
 *
 * @export
 * @interface IVisualforceComponentCreate
 */
export interface IVisualforceComponentCreate {
  /**
   * [Required] The Visualforce component name. The name can be up to 40 characters and must start with a letter.
   * @type {string}
   * @memberof IVisualforceComponentCreate
   */
  componentname: string

  /**
   * [Required] The label saved in the metadata for the Visualforce component.
   * @type {string}
   * @memberof IVisualforceComponentCreate
   */
  label: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IVisualforceComponentCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof IVisualforceComponentCreate
   */
  json?: string

  /**
   * [Optional] The API version of the created source.
   * @type {string}
   * @memberof IVisualforceComponentCreate
   */
  apiversion?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof IVisualforceComponentCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof IVisualforceComponentCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof IVisualforceComponentCreate
   */
  template?: string
}

/**
 * Options for the method pageCreate of class Visualforce.
 *
 * @export
 * @interface IVisualforcePageCreate
 */
export interface IVisualforcePageCreate {
  /**
   * [Required] The Visualforce page name. The name can be up to 40 characters and must start with a letter.
   * @type {string}
   * @memberof IVisualforcePageCreate
   */
  pagename: string

  /**
   * [Required] The label saved in the metadata for the Visualforce page.
   * @type {string}
   * @memberof IVisualforcePageCreate
   */
  label: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IVisualforcePageCreate
   */
  loglevel?: loglevel

  /**
   * [Optional] Formats output as JSON.
   * @type {string}
   * @memberof IVisualforcePageCreate
   */
  json?: string

  /**
   * [Optional] The API version of the created source.
   * @type {string}
   * @memberof IVisualforcePageCreate
   */
  apiversion?: string

  /**
   * [Optional] Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command
   * @type {string}
   * @memberof IVisualforcePageCreate
   */
  reflect?: string

  /**
   * [Optional] The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
   * @type {string}
   * @memberof IVisualforcePageCreate
   */
  outputdir?: string

  /**
   * [Optional] The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
   * @type {string}
   * @memberof IVisualforcePageCreate
   */
  template?: string
}

/**
 * Visualforce
 *
 * @export
 * @class Visualforce
 */
@apiNamespace("force")
@apiCommandClass("visualforce")
export class Visualforce {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * create a visualforce component
   * @returns {(Promise<Object | void>)}
   * @memberof Visualforce
   * @description Creates a Visualforce component in the specified directory or the current working directory. The command creates the .component file and associated metadata file.
   * @example If not supplied, the apiversion, template, and outputdir use default values.
   * The outputdir can be an absolute path or relative to the current working directory.
   * Name and label are required.
   * 
   * Examples:
   *    $ sfdx force:visualforce:component:create -n mycomponent -l mylabel
   *    $ sfdx force:visualforce:component:create -n mycomponent -l mylabel -d components
   * 
   * force:visualforce:component:create -n <string> -l <string> [-t <string>] [-d <string>] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("component:create")
  public componentCreate(
    options: IVisualforceComponentCreate
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      componentname: "--componentname",
      label: "--label",
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
   * create a visualforce page
   * @returns {(Promise<Object | void>)}
   * @memberof Visualforce
   * @description Creates a Visualforce page in the specified directory or the current working directory. The command creates the .page file and associated metadata file.
   * @example If not supplied, the apiversion, template, and outputdir use default values.
   * The outputdir can be an absolute path or relative to the current working directory.
   * Name and label are required.
   * 
   * Examples:
   *    $ sfdx force:visualforce:page:create -n mypage -l mylabel
   *    $ sfdx force:visualforce:page:create -n mypage -l mylabel -d pages
   * 
   * force:visualforce:page:create -n <string> -l <string> [-t <string>] [-d <string>] [-a <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("page:create")
  public pageCreate(options: IVisualforcePageCreate): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      pagename: "--pagename",
      label: "--label",
      loglevel: "--loglevel",
      json: "--json",
      apiversion: "--apiversion",
      reflect: "--reflect",
      outputdir: "--outputdir",
      template: "--template"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.pageCreate,
      options,
      parameterNamesToSwitchNames
    )
  }
}
