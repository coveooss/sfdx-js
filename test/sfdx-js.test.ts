import { Client } from "../src/sfdx-js";
import { rejects } from "assert";

describe("Client Interface", () => {
  it("Client is instantiable", () => {
    expect(new Client()).toBeInstanceOf(Client);
  });

  describe("createUsingPath entry point", () => {
    it("should default to sfdx as its path if the given path is falsy", async () => {
      const falsyPaths = [null, ""];
      await falsyPaths.forEach(async element => {
        const client = Client.createUsingPath(element as string);
        await expect(client.doc.commandsDisplay({ json: true })).resolves.not.toThrow();
      });
    });

    it("should not default to sfdx as its path if the given path is truthy", async () => {
      const client = Client.createUsingPath("boop");
      await expect(client.doc.commandsDisplay({ json: true })).rejects.toThrow();
    });
  });
});
