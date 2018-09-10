import { Client } from "../src/sfdx-js";

describe("Client Interface", () => {
  it("Client is instantiable", () => {
    expect(new Client()).toBeInstanceOf(Client);
  });
});
