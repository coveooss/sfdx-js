import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Schema")
export class Schema {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("sobject:describe")
  public sobjectDescribe(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.sobjectDescribe,
      arguments
    )
  }

  @apiCommand("sobject:list")
  public sobjectList(
    @apiParameter("--sobjecttypecategory") sobjecttypecategory: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.sobjectList,
      arguments
    )
  }
}
