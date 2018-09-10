export interface Flag {
  // long name
  name: string;

  // shot name.
  char: string;
  description: string;
  longDescription: string;
  hasValue: boolean;
  required: boolean;
  type: string;
  hidden?: boolean;
  values: string[];
  default: any;
  min?: number;
  xor: string[];
  array?: boolean;
}

export interface Schema {
  name: string;
  flag: string;
}

export interface Result {
  command: string;
  description: string;
  longDescription: string;
  help: string;
  requiresWorkspace: boolean;

  // This property is always empty.
  args: any[];
  flags: Flag[];
  supportsTargetUsername: boolean;
  topic: string;
  supportsTargetDevHubUsername: boolean;
  usage: string;
  hidden?: boolean;
  supportedGlobals: any[];
  initializeMetadataRegistry?: boolean;
  showProgress?: boolean;
  requiresUsername?: boolean;
  variableArgs?: boolean;
  orgType: string;
  variableArgsRequired?: boolean;
  schema: Schema;
  mainTopic?: boolean;
  namespace: string;
}

export interface RootObject {
  status: number;
  result: Result[];
}
