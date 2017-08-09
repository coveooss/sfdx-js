export declare class Generator {
    private SFDXPath;
    private rootDirectory;
    templateHelpers: any;
    constructor(SFDXPath?: string, rootDirectory?: string);
    generate(json?: string): Promise<void>;
    private extractParameters(result);
    private extractReturnType(result);
    private extractType(flag);
    private extractApiCommandFromCommand(command);
    private extractFunctionNameFromCommand(command);
    private capitalizeFirstLetter(element);
    private addTemplateHelper(element);
    private initializeTemplateHelpers();
    private escapeForComments(element);
    private getCurrentFormatedDate();
    private parse<T>(response);
    private runCommand(command, options?);
}
