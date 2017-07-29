import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Visualforce
 *
 * @export
 * @class Visualforce
 */
@apiNamespace("force")
@apiCommandClass("Visualforce")
export class Visualforce {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
     * create a visualforce component
     *
     * @param {string} componentname The Visualforce component name. The name can be up to 40 characters and must start with a letter. 
     * @param {string} label The label saved in the metadata for the Visualforce component. 
     * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
     * @param {string} json Formats output as JSON. 
     * @param {string} apiversion The API version of the created source. 
     * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
     * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
     * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
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
    @apiParameter("--componentname") componentname: string,
    @apiParameter("--label") label: string,
    @apiParameter("--loglevel") loglevel?: string,
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
     * create a visualforce page
     *
     * @param {string} pagename The Visualforce page name. The name can be up to 40 characters and must start with a letter. 
     * @param {string} label The label saved in the metadata for the Visualforce page. 
     * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
     * @param {string} json Formats output as JSON. 
     * @param {string} apiversion The API version of the created source. 
     * @param {string} reflect Return reflection description of the command, options, and possible values. Allows IDE to tailor to the capabilities of the command 
     * @param {string} outputdir The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory. 
     * @param {string} template The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template. 
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
  public pageCreate(
    @apiParameter("--pagename") pagename: string,
    @apiParameter("--label") label: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: string,
    @apiParameter("--apiversion") apiversion?: string,
    @apiParameter("--reflect") reflect?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--template") template?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.pageCreate,
      arguments
    )
  }
}
