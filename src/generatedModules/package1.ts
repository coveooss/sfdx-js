import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Package1")
export class Package1 {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("version:create")
  public versionCreate(
    @apiParameter("--packageid") packageid: string,
    @apiParameter("--name") name: string,
    @apiParameter("--description") description: string,
    @apiParameter("--version") version: string,
    @apiParameter("--managedreleased") managedreleased: Boolean,
    @apiParameter("--releasenotesurl") releasenotesurl: string,
    @apiParameter("--postinstallurl") postinstallurl: string,
    @apiParameter("--installationkey") installationkey: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreate,
      arguments
    )
  }

  @apiCommand("version:create:get")
  public versionCreateGet(
    @apiParameter("--requestid") requestid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateGet,
      arguments
    )
  }

  @apiCommand("version:display")
  public versionDisplay(
    @apiParameter("--packageversionid") packageversionid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionDisplay,
      arguments
    )
  }

  @apiCommand("version:list")
  public versionList(
    @apiParameter("--packageid") packageid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionList,
      arguments
    )
  }
}
