import { CommandBuilder } from "../../src/core/commandBuilder"
import { ICommandRunner } from "../../src/core/commandRunner"
import {
  ICommandExecutioner,
  CommandExecutioner
} from "../../src/core/commandExecutioner"
import { Apex } from "../../src/generated/apex"
import { Config } from "../../src/generated/config"
import { Auth } from "../../src/generated/auth"

describe("Can create commands", () => {
  it("Can run class create", () => {
    const commandRunnerMock = jest.fn<ICommandRunner>(() => ({
      runCommand: jest.fn(() => {
        return Promise.resolve("{}")
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

  it("Can run class create", () => {
    const commandRunnerMock = jest.fn<ICommandRunner>(() => ({
      runCommand: jest.fn(() => {
        return Promise.resolve("{}")
      })
    }))

    let commandRunnerMockImpl = new commandRunnerMock()

    let commandExecutioner = new CommandExecutioner(commandRunnerMockImpl)
    const config = new Config(commandExecutioner)
    return config
      .set([{ key: "key1", value: "value1" }, { key: "key2", value: "value2" }])
      .then(() => {
        expect(commandRunnerMockImpl.runCommand).toBeCalledWith(
          "force:config:set key1=value1 key2=value2"
        )
      })
  })

  it("Can run web login with no parameters", () => {
    const commandRunnerMock = jest.fn<ICommandRunner>(() => ({
      runCommand: jest.fn(() => {
        return Promise.resolve("{}")
      })
    }))

    let commandRunnerMockImpl = new commandRunnerMock()

    let commandExecutioner = new CommandExecutioner(commandRunnerMockImpl)
    const auth = new Auth(commandExecutioner)
    return auth.webLogin().then(() => {
      expect(commandRunnerMockImpl.runCommand).toBeCalledWith(
        "force:auth:web:login"
      )
    })
  })
})
