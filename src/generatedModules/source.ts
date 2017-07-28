import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Source")
export class Source {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("convert")
  public convert(
    @apiParameter("--rootdir") rootdir: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--packagename") packagename: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.convert,
      arguments
    )
  }

  @apiCommand("open")
  public open(
    @apiParameter("--sourcefile") sourcefile: string,
    @apiParameter("--urlonly") urlonly: Boolean,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.open, arguments)
  }

  @apiCommand("pull")
  public pull(
    @apiParameter("--wait") wait: string,
    @apiParameter("--forceoverwrite") forceoverwrite: Boolean,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.pull, arguments)
  }

  @apiCommand("push")
  public push(
    @apiParameter("--wait") wait: string,
    @apiParameter("--ignorewarnings") ignorewarnings: Boolean,
    @apiParameter("--forceoverwrite") forceoverwrite: Boolean,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.push, arguments)
  }

  @apiCommand("status")
  public status(
    @apiParameter("--all") all: Boolean,
    @apiParameter("--local") local: Boolean,
    @apiParameter("--remote") remote: Boolean,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.status, arguments)
  }
}
