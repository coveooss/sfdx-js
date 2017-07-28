import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Config")
export class Config {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("get")
  public get(
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string,
    @apiParameter("--verbose") verbose: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.get, arguments)
  }

  @apiCommand("list")
  public list(
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.list, arguments)
  }

  @apiCommand("set")
  public set(
    @apiParameter("--global") global: Boolean,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.set, arguments)
  }
}
