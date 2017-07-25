import { RequestExecutioner } from "../src/core/requestExecutioner"
import { CommandRunner } from "../src/core/commandRunner"

describe("Can create commands", () => {
  it("requestExecutionner is instantiable", () => {
    let commandRunner = new CommandRunner("sfdx")
    expect(new RequestExecutioner(commandRunner)).toBeInstanceOf(
      RequestExecutioner
    )
  })
})
