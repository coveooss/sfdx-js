export interface IClassDefinition {
  className: string;
  apiCommandClass: string;
  functionDefinitions: IFunctionDefinition[];
  fileName: string;
}

export interface IFunctionDefinition {
  name: string;
  apiCommand: string;
  parameters: IParameterDefinition[];
  returnType: string;
  shortDescription: string;
  description: string;
  example: string;
  help: string;
}

export interface IParameterDefinition {
  name: string;
  flagKey: string;
  type: string;
  description: string;
  optional: Boolean;
}

export interface IClassDefinitions {
  classDefinitions: IClassDefinition[];
}
