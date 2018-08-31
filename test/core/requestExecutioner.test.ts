import { CommandExecutioner } from "../../src/core/commandExecutioner"
import { CommandRunner } from "../../src/core/commandRunner"
import { EOL } from "os"
describe("Can create commands", () => {
  it("CommandExecutioner is instantiable", () => {
    let commandRunner = new CommandRunner("sfdx")
    expect(new CommandExecutioner(commandRunner)).toBeInstanceOf(CommandExecutioner)
  })
})

describe("Can return the output of the command", () => {
  it("Should be able to echo a simple message", async () => {
    let fakeInfo = jest.fn()
    let commandRunner = new CommandRunner("", true, { info: fakeInfo, error: jest.fn() })
    expect(await commandRunner.runCommand("echo boop")).toBe("boop" + EOL)
    expect(fakeInfo).toBeCalledWith("boop" + EOL)
  })
})
