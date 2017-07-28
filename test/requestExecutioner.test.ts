import { CommandExecutioner } from "../src/core/commandExecutioner"
import { CommandRunner } from "../src/core/commandRunner"

describe("Can create commands", () => {
  it("CommandExecutioner is instantiable", () => {
    let commandRunner = new CommandRunner("sfdx")
    expect(new CommandExecutioner(commandRunner)).toBeInstanceOf(
      CommandExecutioner
    )
  })
})
