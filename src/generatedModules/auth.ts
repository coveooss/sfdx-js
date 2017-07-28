import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Auth")
export class Auth {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("jwt:grant")
  public jwtGrant(
    @apiParameter("--username") username: string,
    @apiParameter("--jwtkeyfile") jwtkeyfile: string,
    @apiParameter("--clientid") clientid: string,
    @apiParameter("--instanceurl") instanceurl: string,
    @apiParameter("--setdefaultdevhubusername")
    setdefaultdevhubusername: Boolean,
    @apiParameter("--setdefaultusername") setdefaultusername: Boolean,
    @apiParameter("--setalias") setalias: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.jwtGrant,
      arguments
    )
  }

  @apiCommand("sfdxurl:store")
  public sfdxurlStore(
    @apiParameter("--sfdxurlfile") sfdxurlfile: string,
    @apiParameter("--setdefaultdevhubusername")
    setdefaultdevhubusername: Boolean,
    @apiParameter("--setdefaultusername") setdefaultusername: Boolean,
    @apiParameter("--setalias") setalias: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.sfdxurlStore,
      arguments
    )
  }

  @apiCommand("web:login")
  public webLogin(
    @apiParameter("--clientid") clientid: string,
    @apiParameter("--instanceurl") instanceurl: string,
    @apiParameter("--setdefaultdevhubusername")
    setdefaultdevhubusername: Boolean,
    @apiParameter("--setdefaultusername") setdefaultusername: Boolean,
    @apiParameter("--setalias") setalias: string,
    @apiParameter("--disablemasking") disablemasking: Boolean,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.webLogin,
      arguments
    )
  }
}
