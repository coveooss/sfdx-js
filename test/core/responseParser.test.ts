import { ResponseParser } from "../../src/core/responseParser"

describe("Can parse commands", () => {
  // APIs
  let responseParser: ResponseParser
  beforeEach(() => {
    responseParser = new ResponseParser()
  })

  it("ResponseParser is instantiable", () => {
    expect(new ResponseParser()).toBeInstanceOf(ResponseParser)
  })

  it("Sanitize inputs - spaces", () => {
    const response = responseParser.parse<any>('  {"foo":"bar"}')
    expect(response.foo).toBe("bar")
  })

  it("Sanitize inputs - new line", () => {
    const response = responseParser.parse<any>('\n  {"foo":"bar"}')
    expect(response.foo).toBe("bar")
  })

  it("Nothing to Sanitize ", () => {
    const response = responseParser.parse<any>('{"foo":"bar"}')
    expect(response.foo).toBe("bar")
  })

  it("Undefined input", () => {
    const response = responseParser.parse<any>(undefined)
    expect(response).toBe(undefined)
  })

  it("Blank input", () => {
    const response = responseParser.parse<any>("")
    expect(response).toBe(undefined)
  })

  it("Blank space input", () => {
    const response = responseParser.parse<any>(" ")
    expect(response).toBe(undefined)
  })

  it("new line input", () => {
    const response = responseParser.parse<any>("\n")
    expect(response).toBe(undefined)
  })
})
