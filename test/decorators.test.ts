import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand,
  DecoratorUtil
} from "../src/core/decorators"

describe("Can create commands", () => {
  @apiNamespace("force")
  @apiCommandClass("classCommand")
  class Test {
    public static create(): Test {
      return new Test()
    }

    @apiCommand("--myCommand")
    public myCommand(
      @apiParameter("--parameter") myFirstParam?: string,
      @apiParameter("--parameter2") mySecondParam?: string
    ) {
      return
    }

    @apiCommand("--myCommand2")
    public myCommand2() {
      return
    }

    @apiCommand("--myCommand3")
    public writeStuff() {
      return
    }
  }

  it("Can get parameter api2", () => {
    let test = Test.create()
    expect(
      DecoratorUtil.getApiParameter("myFirstParam", "myCommand", test)
    ).toBe("--parameter")
    expect(
      DecoratorUtil.getApiParameter("mySecondParam", "myCommand", test)
    ).toBe("--parameter2")
  })

  it("Can get api namespace", () => {
    let test = Test.create()

    let namespace = DecoratorUtil.getApiNamespace(test)
    expect(namespace).toBe("force")
  })

  it("Can get api command class", () => {
    let test = Test.create()

    let apiCommandClass = DecoratorUtil.getApiCommandClass(test)
    expect(apiCommandClass).toBe("classCommand")
  })

  it("Can get api command", () => {
    let test = Test.create()

    expect(DecoratorUtil.getApiCommand(test, "myCommand")).toBe("--myCommand")
    expect(DecoratorUtil.getApiCommand(test, "myCommand2")).toBe("--myCommand2")
    expect(DecoratorUtil.getApiCommand(test, "writeStuff")).toBe("--myCommand3")
  })
})
