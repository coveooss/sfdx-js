import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Mdapi")
export class Mdapi {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("convert")
  public convert(
    @apiParameter("--rootdir") rootdir: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.convert,
      arguments
    )
  }

  @apiCommand("deploy")
  public deploy(
    @apiParameter("--checkonly") checkonly: string,
    @apiParameter("--deploydir") deploydir: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--jobid") jobid: string,
    @apiParameter("--testlevel") testlevel: string,
    @apiParameter("--runtests") runtests: string,
    @apiParameter("--rollbackonerror") rollbackonerror: string,
    @apiParameter("--zipfile") zipfile: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string,
    @apiParameter("--verbose") verbose: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.deploy, arguments)
  }

  @apiCommand("retrieve")
  public retrieve(
    @apiParameter("--apiversion") apiversion: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--retrievetargetdir") retrievetargetdir: string,
    @apiParameter("--unpackaged") unpackaged: string,
    @apiParameter("--sourcedir") sourcedir: string,
    @apiParameter("--packagenames") packagenames: string,
    @apiParameter("--singlepackage") singlepackage: Boolean,
    @apiParameter("--jobid") jobid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string,
    @apiParameter("--verbose") verbose: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.retrieve,
      arguments
    )
  }
}
