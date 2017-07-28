import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Org")
export class Org {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("create")
  public create(
    @apiParameter("--definitionfile") definitionfile: string,
    @apiParameter("--definitionjson") definitionjson: string,
    @apiParameter("--nonamespace") nonamespace: Boolean,
    @apiParameter("--clientid") clientid: string,
    @apiParameter("--setdefaultusername") setdefaultusername: Boolean,
    @apiParameter("--setalias") setalias: string,
    @apiParameter("--env") env: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--targetdevhubusername") targetdevhubusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.create, arguments)
  }

  @apiCommand("delete")
  public delete(
    @apiParameter("--noprompt") noprompt: Boolean,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.delete, arguments)
  }

  @apiCommand("display")
  public display(
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string,
    @apiParameter("--verbose") verbose: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.display,
      arguments
    )
  }

  @apiCommand("list")
  public list(
    @apiParameter("--all") all: Boolean,
    @apiParameter("--clean") clean: Boolean,
    @apiParameter("--noprompt") noprompt: Boolean,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string,
    @apiParameter("--verbose") verbose: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.list, arguments)
  }

  @apiCommand("open")
  public open(
    @apiParameter("--path") path: string,
    @apiParameter("--urlonly") urlonly: Boolean,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.open, arguments)
  }
}
