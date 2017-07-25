import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "./common"
import { ICommandExecutioner } from "../core/commandExecutioner"

export enum TemplateValues {
  DefaultApexClass,
  ApexException,
  ApexUnitTest,
  InboundEmailService
}

export class ICreateOptions {
  public constructor(
    @apiParameter("--classname") public className: string,
    @apiParameter("--template") public template?: TemplateValues,
    @apiParameter("--outputDir") public outputDir?: string,
    @apiParameter("--apiversion") public apiVersion?: string,
    @apiParameter("--json") public json?: Boolean,
    @apiParameter("--loglevel") public loglevel?: loglevel
  ) {}
}

@apiNamespace("force")
@apiCommandClass("apex")
export class Apex {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("class:create")
  public classCreate(options: ICreateOptions): void {
    this.requestExecutioner.execute(this, options)
  }
}
