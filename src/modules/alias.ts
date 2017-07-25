import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel } from "./common"

export class IListOptions {
  public constructor(
    @apiParameter("--json") public json?: Boolean,
    @apiParameter("--loglevel") public loglevel?: loglevel
  ) {}
}

export class ISetOptions {
  public constructor(
    @apiParameter("--json") public json?: Boolean,
    @apiParameter("--loglevel") public loglevel?: loglevel
  ) {}
}

export class Alias {}
