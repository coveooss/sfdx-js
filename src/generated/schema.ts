// Generated on August 13th 2017, 10:03:34 pm. DO NOT MODIFY
import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Options for the method sobjectDescribe of class Schema.
 *
 * @export
 * @interface ISchemaSobjectDescribe
 */
export interface ISchemaSobjectDescribe {
  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ISchemaSobjectDescribe
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ISchemaSobjectDescribe
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ISchemaSobjectDescribe
   */
  targetusername?: string

  /**
   * [Optional] The API name of the object to describe.
   * @type {string}
   * @memberof ISchemaSobjectDescribe
   */
  sobjecttype?: string
}

/**
 * Options for the method sobjectList of class Schema.
 *
 * @export
 * @interface ISchemaSobjectList
 */
export interface ISchemaSobjectList {
  /**
   * [Required] The type of objects to list: all, custom, or standard.
   * @type {string}
   * @memberof ISchemaSobjectList
   */
  sobjecttypecategory: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof ISchemaSobjectList
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof ISchemaSobjectList
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof ISchemaSobjectList
   */
  targetusername?: string
}

/**
 * Schema
 *
 * @export
 * @class Schema
 */
@apiNamespace("force")
@apiCommandClass("schema")
export class Schema {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * describe an object
   * @returns {(Promise<Object | void>)}
   * @memberof Schema
   * @description Displays the metadata for a standard or custom object.
   * @example Examples:
   *    $ sfdx force:schema:sobject:describe -s Account
   *    $ sfdx force:schema:sobject:describe -s MyObject__c
   * force:schema:sobject:describe [-s <string>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("sobject:describe")
  public sobjectDescribe(
    options?: ISchemaSobjectDescribe
  ): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      sobjecttype: "--sobjecttype"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.sobjectDescribe,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * list all objects of a type
   * @returns {(Promise<Object | void>)}
   * @memberof Schema
   * @description Lists all objects, custom objects, or standard objects in the org.
   * @example Examples:
   *    $ sfdx force:schema:sobject:list -c all
   *    $ sfdx force:schema:sobject:list -c custom
   *    $ sfdx force:schema:sobject:list -c standard
   * force:schema:sobject:list -c <string> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("sobject:list")
  public sobjectList(options: ISchemaSobjectList): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      sobjecttypecategory: "--sobjecttypecategory",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.sobjectList,
      options,
      parameterNamesToSwitchNames
    )
  }
}
