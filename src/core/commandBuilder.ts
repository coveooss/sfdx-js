import "reflect-metadata"
import {
  apiParameterMetadataKey,
  apiNamespaceMetadataKey,
  apiCommandMetadataKey,
  apiCommandClassMetadataKey
} from "../core/decorators"

export class CommandBuilder {
  constructor(private requestObject: any, private resquestClass: any) {}

  public build() {
    Object.getOwnPropertyNames(this.requestObject)
    return this.buildCommand() + " " + this.buildParameters()
  }

  private buildCommand() {
    return (
      this.getApiNamespace() +
      " " +
      this.getApiCommandClass() +
      ":" +
      this.getApiCommand()
    )
  }

  private buildParameters() {
    let parameters: string[] = []
    Object.keys(this.requestObject).forEach(key => {
      let propertyValue = this.requestObject[key]
      if (propertyValue !== undefined) {
        const propertyCommand = this.mapPropertyToCommand(key, propertyValue)
        if (propertyCommand !== undefined) {
          parameters.push(propertyCommand)
        }
      }
    })
  }

  private mapPropertyToCommand(key: string, value: any) {
    const apiParameter = this.getApiParameter(key)
    if (typeof value === "boolean") {
      if (!value) {
        // When false, we simply don't return any commands.
        return undefined
      }
    } else {
      return key + " " + value
    }
  }

  private getApiNamespace(): string {
    return Reflect.getMetadata(apiNamespaceMetadataKey, this.resquestClass)
  }

  private getApiCommandClass(): string {
    return Reflect.getMetadata(apiCommandClassMetadataKey, this.resquestClass)
  }

  private getApiCommand(): string {
    return Reflect.getMetadata(apiCommandMetadataKey, this.requestObject)
  }

  private getApiParameter(key: string) {
    return Reflect.getMetadata(apiParameterMetadataKey, this.requestObject, key)
  }
}
