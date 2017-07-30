import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * User
 *
 * @export
 * @class User
 */
@apiNamespace("force")
@apiCommandClass("User")
export class User {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * generate a password for a scratch org
   *
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetdevhubusername A username for the target Dev Hub org. Overrides default Dev Hub org. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Generates a password for a scratch org.
   * @example Generates a random password and sets it for the user of a scratch org.
   * 
   * If you haven’t set a default Dev Hub, or if your scratch org isn’t associated with your default Dev Hub, --targetdevhubusername is required.
   * 
   * To see a password that was previously generated, run "sfdx force:org:display".
   * force:user:password:generate [-u <string>] [-v <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("password:generate")
  public passwordGenerate(
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername?: string,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.passwordGenerate,
      arguments
    )
  }

  /**
   * assign a permission set to the admin user of an org
   *
   * @param {string} permsetname The name of the permission set to assign. 
   * @param {string} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof User
   * @description Assigns a named permission set to the admin user of an org.
   * @example Examples:
   *    $ sfdx force:user:permset:assign -n DreamHouse
   *    $ sfdx force:user:permset:assign -n DreamHouse -u me@my.org
   *    $ sfdx force:user:permset:assign -n DreamHouse -u TestOrg1
   * force:user:permset:assign -n <string> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("permset:assign")
  public permsetAssign(
    @apiParameter("--permsetname") permsetname: string,
    @apiParameter("--loglevel") loglevel?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.permsetAssign,
      arguments
    )
  }
}
