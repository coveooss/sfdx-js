import "reflect-metadata"
import { DecoratorUtil } from "../core/decorators"
import { IStringKeyPair } from "../modules/common"
import * as _ from "underscore"

export class CommandBuilder {
  constructor(
    private requestClass: Object,
    private requestMethod: Function,
    private requestOptions: any
  ) {}

  public build() {
    return this.buildCommand() + " " + this.buildParameters()
  }

  private buildCommand() {
    return (
      DecoratorUtil.getApiNamespace(this.requestClass) +
      ":" +
      DecoratorUtil.getApiCommandClass(this.requestClass) +
      ":" +
      DecoratorUtil.getApiCommand(
        this.requestClass,
        this.getFunctionName(this.requestMethod)
      )
    )
  }

  private getFunctionName(functionToFindName: Function): string {
    return (functionToFindName as any)["propName"]
  }

  private buildParameters() {
    let parameters: string[] = []
    let parameterNames = DecoratorUtil.getParameterNames(this.requestMethod)
    Object.keys(this.requestOptions).forEach(index => {
      let propertyValue = this.requestOptions[index]
      let parameterName = parameterNames[index]
      if (propertyValue !== undefined) {
        const propertyCommand = this.mapPropertyToCommand(
          parameterName,
          propertyValue,
          this.requestMethod
        )
        if (propertyCommand !== undefined) {
          parameters.push(propertyCommand)
        }
      }
    })

    return parameters.length === 0 ? undefined : parameters.join(" ")
  }

  private mapPropertyToCommand(
    key: string,
    value: any,
    requestMethod: Function
  ): string | undefined {
    const apiParameter = DecoratorUtil.getApiParameter(
      key,
      this.getFunctionName(requestMethod),
      this.requestClass
    )
    if (typeof value === "boolean") {
      if (!value) {
        // When false, we simply don't return any commands.
        return undefined
      }
    } else if (_.isArray(value)) {
      return _.map(value, element => {
        if (_.has(element, "key") && _.has(element, "value")) {
          let pair = element as IStringKeyPair
          return pair.key + "=" + pair.value
        }
        // this is any other type of array. Return as is.
        return element
      }).join(" ")
    } else {
      return apiParameter + " " + value
    }
  }
}
