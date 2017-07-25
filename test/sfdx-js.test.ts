import { SFDX } from "../src/sfdx-js"

/**
 * Dummy test
 */
describe("SFDX Interface", () => {
  it("SFDX is instantiable", () => {
    expect(new SFDX()).toBeInstanceOf(SFDX)
  })
})
