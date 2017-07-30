import { Generator } from "../../src/generator/generator"
import { CommandRunner } from "../../src/core/commandRunner"

describe("Can create commands", () => {
  let originalTimeout
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
  })

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
  })

  it("CommandExecutioner is instantiable", () => {
    let commandRunner = new CommandRunner("sfdx")
    let generator = new Generator(commandRunner)

    let jsonFile = require("../../commands.json")
    let jsonString = JSON.stringify(jsonFile)
    return generator.generate(jsonString)
  })
})
