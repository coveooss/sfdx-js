import { CommandExecutioner } from "../../src/core/commandExecutioner"
import { CommandRunner } from "../../src/core/commandRunner"

describe("Can create commands", () => {
  it("CommandExecutioner is instantiable", () => {
    let commandRunner = new CommandRunner("sfdx")
    expect(new CommandExecutioner(commandRunner)).toBeInstanceOf(CommandExecutioner)
  })
})

describe("Can return the output of the command", () => {
  it("Should be able to echo a simple message", async () => {
    let commandRunner = new CommandRunner("")
    expect((await commandRunner.runCommand("echo boop")).trim()).toBe("boop")
  })
})
