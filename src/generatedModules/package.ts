import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Package")
export class Package {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("install")
  public install(
    @apiParameter("--id") id: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--installationkey") installationkey: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.install,
      arguments
    )
  }

  @apiCommand("install:get")
  public installGet(
    @apiParameter("--requestid") requestid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.installGet,
      arguments
    )
  }
}
