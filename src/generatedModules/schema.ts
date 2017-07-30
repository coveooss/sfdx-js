import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Schema
 *
 * @export
 * @class Schema
 */
@apiNamespace("force")
@apiCommandClass("Schema")
export class Schema {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * describe an object
   *
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} sobjecttype The API name of the object to describe. 
   * @returns {(Promise<Object | void>)}
   * @memberof Schema
   * @description Displays the metadata for a standard or custom object.
   * @example Examples:
   *    $ sfdx force:schema:sobject:describe -s Account
   *    $ sfdx force:schema:sobject:describe -s MyObject__c
   * force:schema:sobject:describe [-s <string>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("sobject:describe")
  public sobjectDescribe(
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--sobjecttype") sobjecttype?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.sobjectDescribe,
      arguments
    )
  }

  /**
   * list all objects of a type
   *
   * @param {string} sobjecttypecategory The type of objects to list: all, custom, or standard. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Schema
   * @description Lists all objects, custom objects, or standard objects in the org.
   * @example Examples:
   *    $ sfdx force:schema:sobject:list -c all
   *    $ sfdx force:schema:sobject:list -c custom
   *    $ sfdx force:schema:sobject:list -c standard
   * force:schema:sobject:list -c <string> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("sobject:list")
  public sobjectList(
    @apiParameter("--sobjecttypecategory") sobjecttypecategory: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.sobjectList,
      arguments
    )
  }
}
