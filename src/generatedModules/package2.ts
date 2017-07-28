import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Package2")
export class Package2 {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("create")
  public create(
    @apiParameter("--name") name: string,
    @apiParameter("--description") description: string,
    @apiParameter("--namespace") namespace: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.create, arguments)
  }

  @apiCommand("installed:list")
  public installedList(
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.installedList,
      arguments
    )
  }

  @apiCommand("list")
  public list(
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.list, arguments)
  }

  @apiCommand("manifest:create")
  public manifestCreate(
    @apiParameter("--directory") directory: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.manifestCreate,
      arguments
    )
  }

  @apiCommand("members:list")
  public membersList(
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.membersList,
      arguments
    )
  }

  @apiCommand("version:create")
  public versionCreate(
    @apiParameter("--package2id") package2id: string,
    @apiParameter("--directory") directory: string,
    @apiParameter("--branch") branch: string,
    @apiParameter("--tag") tag: string,
    @apiParameter("--preserve") preserve: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
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
    @apiParameter("--package2createrequestid") package2createrequestid: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateGet,
      arguments
    )
  }

  @apiCommand("version:create:list")
  public versionCreateList(
    @apiParameter("--createdlastdays") createdlastdays: string,
    @apiParameter("--status") status: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionCreateList,
      arguments
    )
  }

  @apiCommand("version:get")
  public versionGet(
    @apiParameter("--package2versionid") package2versionid: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionGet,
      arguments
    )
  }

  @apiCommand("version:install")
  public versionInstall(
    @apiParameter("--subscriberpackage2versionid")
    subscriberpackage2versionid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionInstall,
      arguments
    )
  }

  @apiCommand("version:list")
  public versionList(
    @apiParameter("--createdlastdays") createdlastdays: string,
    @apiParameter("--modifiedlastdays") modifiedlastdays: string,
    @apiParameter("--package2ids") package2ids: string,
    @apiParameter("--released") released: Boolean,
    @apiParameter("--orderby") orderby: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--concise") concise: Boolean,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string,
    @apiParameter("--verbose") verbose: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionList,
      arguments
    )
  }

  @apiCommand("version:uninstall")
  public versionUninstall(
    @apiParameter("--subscriberpackage2versionid")
    subscriberpackage2versionid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionUninstall,
      arguments
    )
  }

  @apiCommand("version:update")
  public versionUpdate(
    @apiParameter("--package2versionid") package2versionid: string,
    @apiParameter("--name") name: string,
    @apiParameter("--description") description: string,
    @apiParameter("--branch") branch: string,
    @apiParameter("--tag") tag: string,
    @apiParameter("--setasreleased") setasreleased: Boolean,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.versionUpdate,
      arguments
    )
  }
}
