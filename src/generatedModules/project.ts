import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

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
   *
   * @param {string} projectname The name for the new project. Any valid folder name is accepted. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {string} json Formats output as JSON. 
   * @param {string} defaultpackagedir The default package directory name. Metadata items such as classes and Lightning bundles are placed inside this folder. 
   * @param {string} namespace The namespace associated with this project and any connected scratch orgs. 
   * @param {string} sourceapiversion The source API version for the project. The version defaults to the current release and will normally be defaulted.This is used to properly import or export metadata. 
   * @param {string} loginurl The login URL for the Salesforce instance being used.Normally defaults to https://login.salesforce.com. 
   * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
   * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
   * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
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
  public create(
    @apiParameter("--projectname") projectname: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: string,
    @apiParameter("--defaultpackagedir") defaultpackagedir?: string,
    @apiParameter("--namespace") namespace?: string,
    @apiParameter("--sourceapiversion") sourceapiversion?: string,
    @apiParameter("--loginurl") loginurl?: string,
    @apiParameter("--reflect") reflect?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--template") template?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.create, arguments)
  }

  /**
   * update project config files to the latest format
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {Boolean} forceupgrade Run all upgrades, even if the project definition files have already been upgraded. 
   * @returns {(Promise<Object | void>)}
   * @memberof Project
   * @description Updates project configuration and definition files to the latest format.
   * @example Examples:
   *  $   sfdx force:project:upgrade
   *  $   sfdx force:project:upgrade -f
   * force:project:upgrade [-f] [--json] [--loglevel <string>]
   */
  @apiCommand("upgrade")
  public upgrade(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--forceupgrade") forceupgrade?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.upgrade,
      arguments
    )
  }
}
