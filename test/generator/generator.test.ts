import { Generator } from "../../src/generator/generator"
import { CommandRunner } from "../../src/core/commandRunner"

describe("Can create commands", () => {
  it("CommandExecutioner is instantiable", () => {
    let commandRunner = new CommandRunner("sfdx")
    let generator = new Generator(commandRunner)

    let jsonFile = require("../../commands.json")
    let jsonString = JSON.stringify(jsonFile)
    let test = generator.generate(jsonString)
  })
})
