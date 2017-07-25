import { CommandBuilder } from "../src/core/commandBuilder"
import { ICommandRunner } from "../src/core/commandRunner"
import {
  ICommandExecutioner,
  CommandExecutioner
} from "../src/core/commandExecutioner"
import { Apex } from "../src/modules/apex"

describe("Can create commands", () => {
  it("requestExecutionner is instantiable", () => {
    const commandRunnerMock = jest.fn<ICommandRunner>(() => ({
      runCommand: jest.fn()
    }))

    let commandRunnerMockImpl = new commandRunnerMock()

    let commandExecutioner = new CommandExecutioner(commandRunnerMockImpl)
    const apex = new Apex(commandExecutioner)
    const response = apex.classCreate({ className: "foo" })

    expect(commandRunnerMockImpl.runCommand).toBeCalledWith(
      "force apex:class:create -classname foo"
    )
  })
})
