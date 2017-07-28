import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("User")
export class User {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("password:generate")
  public passwordGenerate(
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.passwordGenerate,
      arguments
    )
  }

  @apiCommand("permset:assign")
  public permsetAssign(
    @apiParameter("--permsetname") permsetname: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.permsetAssign,
      arguments
    )
  }
}
