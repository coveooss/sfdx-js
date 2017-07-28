import { Generator } from "../../src/generator/generator"
import { CommandRunner } from "../../src/core/commandRunner"

describe("Can create commands", () => {
  it("CommandExecutioner is instantiable", () => {
    let commandRunner = new CommandRunner("sfdx")
    let generator = new Generator(commandRunner)

    debugger
    let jsonFile = require("../../commands.json")
    let test = generator.generate(JSON.stringify(jsonFile))
    debugger
  })
})
