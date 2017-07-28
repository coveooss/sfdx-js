import { CommandBuilder } from "../../src/core/commandBuilder"
import { ICommandRunner } from "../../src/core/commandRunner"
import {
  ICommandExecutioner,
  CommandExecutioner
} from "../../src/core/commandExecutioner"
import { Apex } from "../../src/modules/apex"

describe("Can create commands", () => {
  it("Can run class create", () => {
    const commandRunnerMock = jest.fn<ICommandRunner>(() => ({
      runCommand: jest.fn(() => {
        return Promise.resolve({})
      })
    }))

    let commandRunnerMockImpl = new commandRunnerMock()

    let commandExecutioner = new CommandExecutioner(commandRunnerMockImpl)
    const apex = new Apex(commandExecutioner)
    return apex.classCreate("foo").then(() => {
      expect(commandRunnerMockImpl.runCommand).toBeCalledWith(
        "force:apex:class:create --classname foo"
      )
    })
  })
})
