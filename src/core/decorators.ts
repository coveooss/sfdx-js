import "reflect-metadata"

const apiParameterMetadataKey = "sfdx:api:parameter"
const apiNamespaceMetadataKey = "sfdx:api:namespace"
const apiCommandMetadataKey = "sfdx:api:command"
const apiCommandClassMetadataKey = "sfdx:api:command:class"

const COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm
const DEFAULT_PARAMS = /=[^,]+/gm
const FAT_ARROWS = /=>.*$/gm

export function apiParameter(apiName: string) {
  return function validate(target: any, propertyName: string, index: number) {
    const calculatedKey =
      propertyName +
      ":" +
      DecoratorUtil.getParameterNames(target[propertyName])[index]
    Reflect.defineMetadata(
      apiParameterMetadataKey,
      apiName,
      target,
      calculatedKey
    )
  }
}

export function apiNamespace(apiName: string) {
  return Reflect.metadata(apiNamespaceMetadataKey, apiName)
}

export function apiCommandClass(apiName: string) {
  return Reflect.metadata(apiCommandClassMetadataKey, apiName)
}

export function apiCommand(apiName: string) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    // Set the property name. Will be useful later on.
    target[propertyKey].propName = propertyKey
    Reflect.defineMetadata(apiCommandMetadataKey, apiName, target, propertyKey)
  }
}

export class DecoratorUtil {
  public static getApiNamespace(resquestClass: Object): string {
    return Reflect.getMetadata(
      apiNamespaceMetadataKey,
      resquestClass.constructor
    )
  }

  public static getApiCommandClass(resquestClass: Object): string {
    return Reflect.getMetadata(
      apiCommandClassMetadataKey,
      resquestClass.constructor
    )
  }

  public static getApiCommand(
    requestObject: Object,
    functionName: string
  ): string {
    return Reflect.getMetadata(
      apiCommandMetadataKey,
      requestObject,
      functionName
    )
  }

  public static getApiParameter(
    parameterName: string,
    methodName: string,
    requestObject: Object
  ) {
    let calculatedKey = methodName + ":" + parameterName
    return Reflect.getMetadata(
      apiParameterMetadataKey,
      requestObject,
      calculatedKey
    )
  }

  public static getParameterNames(fn: any): string[] {
    let code = fn
      .toString()
      .replace(COMMENTS, "")
      .replace(FAT_ARROWS, "")
      .replace(DEFAULT_PARAMS, "")

    let result = code
      .slice(code.indexOf("(") + 1, code.indexOf(")"))
      .match(/([^\s,]+)/g)

    return result === null ? [] : result
  }

  public static getClassName(objectConstructor: ObjectConstructor) {
    const funcNameRegex = /function (.{1,})\(/
    const results = funcNameRegex.exec(objectConstructor.toString())
    return results && results.length > 1 ? results[1] : ""
  }
}
