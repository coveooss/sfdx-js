import { CommandExecutioner } from "../../src/core/commandExecutioner"
import { CommandRunner } from "../../src/core/commandRunner"

describe("Can create commands", () => {
  it("CommandExecutioner is instantiable", () => {
    let commandRunner = new CommandRunner("sfdx")
    expect(new CommandExecutioner(commandRunner)).toBeInstanceOf(CommandExecutioner)
  })
})

describe("It should throw on error", () => {
  it("Should be able to execute command", async () => {
    let commandRunner = new CommandRunner("")
    try {
      await commandRunner.runCommand("stuff")
      fail()
    } catch (e) {
      expect.anything();
    }
  })
})
