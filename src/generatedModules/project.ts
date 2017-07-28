import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Project")
export class Project {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("create")
  public create(
    @apiParameter("--projectname") projectname: string,
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--loginurl") loginurl: string,
    @apiParameter("--sourceapiversion") sourceapiversion: string,
    @apiParameter("--namespace") namespace: string,
    @apiParameter("--defaultpackagedir") defaultpackagedir: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.create, arguments)
  }

  @apiCommand("upgrade")
  public upgrade(
    @apiParameter("--forceupgrade") forceupgrade: Boolean,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.upgrade,
      arguments
    )
  }
}
