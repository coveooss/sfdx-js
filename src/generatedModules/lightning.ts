import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Lightning")
export class Lightning {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("app:create")
  public appCreate(
    @apiParameter("--appname") appname: string,
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--apiversion") apiversion: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.appCreate,
      arguments
    )
  }

  @apiCommand("component:create")
  public componentCreate(
    @apiParameter("--componentname") componentname: string,
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--apiversion") apiversion: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.componentCreate,
      arguments
    )
  }

  @apiCommand("event:create")
  public eventCreate(
    @apiParameter("--eventname") eventname: string,
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--apiversion") apiversion: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.eventCreate,
      arguments
    )
  }

  @apiCommand("interface:create")
  public interfaceCreate(
    @apiParameter("--interfacename") interfacename: string,
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--apiversion") apiversion: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.interfaceCreate,
      arguments
    )
  }

  @apiCommand("test:create")
  public testCreate(
    @apiParameter("--testname") testname: string,
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.testCreate,
      arguments
    )
  }

  @apiCommand("test:run")
  public testRun(
    @apiParameter("--appname") appname: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--resultformat") resultformat: string,
    @apiParameter("--configfile") configfile: string,
    @apiParameter("--leavebrowseropen") leavebrowseropen: Boolean,
    @apiParameter("--timeout") timeout: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.testRun,
      arguments
    )
  }
}
