import { RequestExecutioner } from "./core/RequestExecutioner"
import { CommandRunner } from "./core/commandRunner"
import { Apex } from "./modules/apex"

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export class SFDX {
  public apex: Apex

  private requestExecutioner: RequestExecutioner

  constructor(requestExecutioner?: RequestExecutioner) {
    if (requestExecutioner === undefined) {
      const commandRunner = new CommandRunner("sfdx")
      this.requestExecutioner = new RequestExecutioner(commandRunner)
    } else {
      this.requestExecutioner = requestExecutioner
    }

    this.apex = new Apex(this.requestExecutioner)
  }

  public static createUsingPath(SFDXPath: string) {
    const commandRunner = new CommandRunner(SFDXPath)
    const requestExecutioner = new RequestExecutioner(commandRunner)

    return new SFDX(requestExecutioner)
  }
}

let sfdx = new SFDX()
sfdx.apex.classCreate({ className: "test" })
