import "reflect-metadata"

export const apiParameterMetadataKey = Symbol("sfdx:api:parameter")
export const apiNamespaceMetadataKey = Symbol("sfdx:api:namespace")
export const apiCommandMetadataKey = Symbol("sfdx:api:command")
export const apiCommandClassMetadataKey = Symbol("sfdx:api:command:class")

export function apiParameter(apiName: string) {
  return function(target: any, key: string, index: number) {
    Reflect.defineMetadata(apiParameterMetadataKey, apiName, target, key)
  }
}

export function apiNamespace(apiName: string) {
  return Reflect.metadata(apiNamespaceMetadataKey, apiName)
}

export function apiCommandClass(apiName: string) {
  return Reflect.metadata(apiCommandClassMetadataKey, apiName)
}

export function apiCommand(apiName: string) {
  return function(target: any, key: string) {
    Reflect.defineMetadata(apiCommandMetadataKey, apiName, target, key)
  }
}
