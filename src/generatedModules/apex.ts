import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Apex")
export class Apex {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("class:create")
  public classCreate(
    @apiParameter("--classname") classname: string,
    @apiParameter("--template") template: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--reflect") reflect: string,
    @apiParameter("--apiversion") apiversion: string,
    @apiParameter("--json") json: string,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.classCreate,
      arguments
    )
  }

  @apiCommand("execute")
  public execute(
    @apiParameter("--apexcodefile") apexcodefile: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.execute,
      arguments
    )
  }

  @apiCommand("log:get")
  public logGet(
    @apiParameter("--logid") logid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.logGet, arguments)
  }

  @apiCommand("log:list")
  public logList(
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.logList,
      arguments
    )
  }

  @apiCommand("test:report")
  public testReport(
    @apiParameter("--testrunid") testrunid: string,
    @apiParameter("--codecoverage") codecoverage: Boolean,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--resultformat") resultformat: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string,
    @apiParameter("--verbose") verbose: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.testReport,
      arguments
    )
  }

  @apiCommand("test:run")
  public testRun(
    @apiParameter("--classnames") classnames: string,
    @apiParameter("--suitenames") suitenames: string,
    @apiParameter("--codecoverage") codecoverage: Boolean,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--testlevel") testlevel: string,
    @apiParameter("--resultformat") resultformat: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--precompilewait") precompilewait: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string,
    @apiParameter("--verbose") verbose: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.testRun,
      arguments
    )
  }
}
