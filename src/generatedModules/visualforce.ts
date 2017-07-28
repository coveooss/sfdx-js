import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Visualforce")
export class Visualforce {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("component:create")
  public componentCreate(
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--componentname") componentname: string,
    @apiParameter("--apiversion") apiversion: string,
    @apiParameter("--label") label: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.componentCreate,
      arguments
    )
  }

  @apiCommand("page:create")
  public pageCreate(
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--pagename") pagename: string,
    @apiParameter("--apiversion") apiversion: string,
    @apiParameter("--label") label: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.pageCreate,
      arguments
    )
  }
}
