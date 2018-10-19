import { CommandExecutioner } from "../../src/core/commandExecutioner";
import { CommandRunner, ICommandRunnerOptions } from "../../src/core/commandRunner";
import { EOL, platform } from "os";
import exec from "child_process";

describe("Can create commands", () => {
  it("CommandExecutioner is instantiable", () => {
    let commandRunner = new CommandRunner();
    expect(new CommandExecutioner(commandRunner)).toBeInstanceOf(CommandExecutioner);
  });
});

describe("Can return the output of the command", () => {
  it("Should be able to echo a simple message", async () => {
    let fakeInfo = jest.fn();
    const mockedCommandRunnerOptions: ICommandRunnerOptions = {
      sfdxPath: "",
      useLiveLog: true,
      customLogger: { info: fakeInfo, error: jest.fn() }
    };
    let commandRunner = new CommandRunner(mockedCommandRunnerOptions);
    expect(await commandRunner.runCommand("echo boop")).toBe("boop" + EOL);
    expect(fakeInfo).toBeCalledWith("boop" + EOL);
  });

  it("Should not fail if there's only warning in the stderr", async () => {
    let fakeInfo = jest.fn();
    const mockedCommandRunnerOptions: ICommandRunnerOptions = {
      sfdxPath: "",
      useLiveLog: false
    };
    let commandRunner = new CommandRunner(mockedCommandRunnerOptions);
    let payload = `{ "warnings": ["boop", "beep", "bop"] }`;
    expect(
      await commandRunner.runCommand(
        `>&2 echo ${platform() === "win32" ? payload : payload.replace(/"/g, '\\"')}`
      )
    ).toContain("Completed with warnings");
  });

  it("Should fail if there's something else or more than a warning in the stderr", async () => {
    let fakeInfo = jest.fn();
    const mockedCommandRunnerOptions: ICommandRunnerOptions = {
      sfdxPath: "",
      useLiveLog: false
    };
    let commandRunner = new CommandRunner(mockedCommandRunnerOptions);
    let payload = `{ "warnings": ["boop", "beep", "bop"], "errors": 42 }`;
    expect(
      commandRunner.runCommand(
        `>&2 echo ${platform() === "win32" ? payload : payload.replace(/"/g, '\\"')}`
      )
    ).rejects.toEqual(payload + EOL);
  });
});
