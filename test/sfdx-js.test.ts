import { SFDX } from "../src/sfdx-js"

describe("SFDX Interface", () => {
  it("SFDX is instantiable", () => {
    expect(new SFDX()).toBeInstanceOf(SFDX)
  })
})
