import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

@apiNamespace("force")
@apiCommandClass("Data")
export class Data {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("bulk:delete")
  public bulkDelete(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--csvfile") csvfile: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.bulkDelete,
      arguments
    )
  }

  @apiCommand("bulk:status")
  public bulkStatus(
    @apiParameter("--jobid") jobid: string,
    @apiParameter("--batchid") batchid: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.bulkStatus,
      arguments
    )
  }

  @apiCommand("bulk:upsert")
  public bulkUpsert(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--csvfile") csvfile: string,
    @apiParameter("--externalid") externalid: string,
    @apiParameter("--wait") wait: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.bulkUpsert,
      arguments
    )
  }

  @apiCommand("record:create")
  public recordCreate(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--values") values: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.recordCreate,
      arguments
    )
  }

  @apiCommand("record:delete")
  public recordDelete(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--sobjectid") sobjectid: string,
    @apiParameter("--where") where: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.recordDelete,
      arguments
    )
  }

  @apiCommand("record:get")
  public recordGet(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--sobjectid") sobjectid: string,
    @apiParameter("--where") where: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.recordGet,
      arguments
    )
  }

  @apiCommand("record:update")
  public recordUpdate(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--sobjectid") sobjectid: string,
    @apiParameter("--where") where: string,
    @apiParameter("--values") values: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.recordUpdate,
      arguments
    )
  }

  @apiCommand("soql:query")
  public soqlQuery(
    @apiParameter("--query") query: string,
    @apiParameter("--usetoolingapi") usetoolingapi: Boolean,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.soqlQuery,
      arguments
    )
  }

  @apiCommand("tree:export")
  public treeExport(
    @apiParameter("--query") query: string,
    @apiParameter("--plan") plan: Boolean,
    @apiParameter("--prefix") prefix: string,
    @apiParameter("--outputdir") outputdir: string,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.treeExport,
      arguments
    )
  }

  @apiCommand("tree:import")
  public treeImport(
    @apiParameter("--sobjecttreefiles") sobjecttreefiles: string,
    @apiParameter("--plan") plan: string,
    @apiParameter("--contenttype") contenttype: string,
    @apiParameter("--confighelp") confighelp: Boolean,
    @apiParameter("--targetusername") targetusername: string,
    @apiParameter("--json") json: Boolean,
    @apiParameter("--loglevel") loglevel: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.treeImport,
      arguments
    )
  }
}
