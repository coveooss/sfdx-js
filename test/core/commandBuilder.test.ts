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
  let commandRunnerMock
  let commandRunnerMockImpl
  let commandExecutioner: CommandExecutioner

  // APIs
  let apex: Apex
  let config: Config
  let auth: Auth
  beforeEach(() => {
    commandRunnerMock = jest.fn<ICommandRunner>(() => ({
      runCommand: jest.fn(() => {
        return Promise.resolve("{}")
      })
    }))

    commandRunnerMockImpl = new commandRunnerMock()

    commandExecutioner = new CommandExecutioner(commandRunnerMockImpl)

    apex = new Apex(commandExecutioner)

    config = new Config(commandExecutioner)
    auth = new Auth(commandExecutioner)
  })

  it("Can run class create", () => {
    return apex.classCreate("foo").then(() => {
      expect(commandRunnerMockImpl.runCommand).toBeCalledWith(
        "force:apex:class:create --classname foo"
      )
    })
  })

  it("Can run class create", () => {
    return config
      .set([{ key: "key1", value: "value1" }, { key: "key2", value: "value2" }])
      .then(() => {
        expect(commandRunnerMockImpl.runCommand).toBeCalledWith(
          "force:config:set key1=value1 key2=value2"
        )
      })
  })

  it("Can run web login with no parameters", () => {
    return auth.webLogin().then(() => {
      expect(commandRunnerMockImpl.runCommand).toBeCalledWith(
        "force:auth:web:login"
      )
    })
  })

  it("Can run web login with no parameters", () => {
    return auth.webLogin(undefined, true).then(() => {
      expect(commandRunnerMockImpl.runCommand).toBeCalledWith(
        "force:auth:web:login --json"
      )
    })
  })
})
