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

@apiNamespace("force")
@apiCommandClass("apex")
export class Apex {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  @apiCommand("class:create")
  public classCreate(
    @apiParameter("--classname") className: string,
    @apiParameter("--template") template?: TemplateValues,
    @apiParameter("--outputDir") outputDir?: string,
    @apiParameter("--apiversion") apiVersion?: string,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--loglevel") loglevel?: loglevel,
    ...args: string[]
  ): Promise<void> {
    return this.requestExecutioner.execute(this, this.classCreate, arguments)
  }
}
