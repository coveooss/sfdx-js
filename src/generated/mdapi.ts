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
 * Options for the method convert of class Mdapi.
 *
 * @export
 * @interface IMdapiConvert
 */
export interface IMdapiConvert {
  /**
   * [Required] The root directory that contains the source you retrieved using Metadata API.
   * @type {string}
   * @memberof IMdapiConvert
   */
  rootdir: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IMdapiConvert
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IMdapiConvert
   */
  json?: Boolean

  /**
   * [Optional] The directory to store your source in after it’s converted to the Salesforce DX format. Can be an absolute or relative path.
   * @type {string}
   * @memberof IMdapiConvert
   */
  outputdir?: string
}

/**
 * Options for the method deploy of class Mdapi.
 *
 * @export
 * @interface IMdapiDeploy
 */
export interface IMdapiDeploy {
  /**
   * [Optional] Indicates whether any failure causes a complete rollback of the deploy operation. The default is true. If set to false, the operation performs actions that don’t have errors and returns errors for the remaining actions. You must set this parameter to true if you are deploying to a production org.
   * @type {string}
   * @memberof IMdapiDeploy
   */
  rollbackonerror?: string

  /**
   * [Optional] Indicates that you want verbose output from the deploy operation.
   * @type {Boolean}
   * @memberof IMdapiDeploy
   */
  verbose?: Boolean

  /**
   * [Optional] Validates the deployed metadata and runs all Apex tests, but prevents the deployment from being saved to the org.
   * @type {string}
   * @memberof IMdapiDeploy
   */
  checkonly?: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IMdapiDeploy
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IMdapiDeploy
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IMdapiDeploy
   */
  targetusername?: string

  /**
   * [Optional] The path to the .zip file of metadata files to deploy. Required to initiate a deployment if you do not use --deploydir. If you specify both --zipfile and --deploydir, a zip file of the contents of the --deploydir directory is written to the location specified by --zipfile.
   * @type {string}
   * @memberof IMdapiDeploy
   */
  zipfile?: string

  /**
   * [Optional] The root of the directory tree that contains the files to deploy. The root must contain a valid package.xml file describing the entities in the directory structure. Required to initiate a deployment if you don’t use --zipfile. If you specify both --zipfile and --deploydir, a zip file of the contents of the --deploydir directory is written to the location specified by --zipfile.
   * @type {string}
   * @memberof IMdapiDeploy
   */
  deploydir?: string

  /**
   * [Optional] Lists the Apex classes containing the deployment tests to run. Use this parameter when you set --testlevel to RunSpecifiedTests.
   * @type {string}
   * @memberof IMdapiDeploy
   */
  runtests?: string

  /**
   * [Optional] Specifies which level of deployment tests to run. Valid values are:
   * NoTestRun—No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.
   * RunSpecifiedTests—Runs only the tests that you specify in the --runtests option. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.
   * RunLocalTests—All tests in your org are run, except the ones that originate from installed managed packages. This test level is the default for production deployments that include Apex classes or triggers.
   * RunAllTestsInOrg—All tests in your org are run, including tests of managed packages.
   * If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see “Running Tests in a Deployment” in the Metadata API Guide.
   * @type {string}
   * @memberof IMdapiDeploy
   */
  testlevel?: string

  /**
   * [Optional] The job ID (asyncId) of the deployment you want to check. Use with -w to resume waiting.
   * @type {string}
   * @memberof IMdapiDeploy
   */
  jobid?: string

  /**
   * [Optional] The number of minutes to wait for the command to complete. The default is –1 (no limit). 0
   * @type {string}
   * @memberof IMdapiDeploy
   */
  wait?: string
}

/**
 * Options for the method retrieve of class Mdapi.
 *
 * @export
 * @interface IMdapiRetrieve
 */
export interface IMdapiRetrieve {
  /**
   * [Required] The root of the directory structure where the retrieved zip or metadata files are put.
   * @type {string}
   * @memberof IMdapiRetrieve
   */
  retrievetargetdir: string

  /**
   * [Optional] Specifies whether only a single package is being retrieved (true) or more than one package (false).
   * @type {Boolean}
   * @memberof IMdapiRetrieve
   */
  singlepackage?: Boolean

  /**
   * [Optional] Indicates that you want verbose output from the retrieve operation.
   * @type {Boolean}
   * @memberof IMdapiRetrieve
   */
  verbose?: Boolean

  /**
   * [Optional] Use to override the default, which is the latest version supported by your CLI plug-in, with the version in your package.xml file.
   * @type {string}
   * @memberof IMdapiRetrieve
   */
  apiversion?: string

  /**
   * [Optional] The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
   * @type {loglevel}
   * @memberof IMdapiRetrieve
   */
  loglevel?: loglevel

  /**
   * [Optional] Format output as JSON.
   * @type {Boolean}
   * @memberof IMdapiRetrieve
   */
  json?: Boolean

  /**
   * [Optional] Username for the target org. Overrides the default target org.
   * @type {string}
   * @memberof IMdapiRetrieve
   */
  targetusername?: string

  /**
   * [Optional] The job ID (asyncId) of the retrieve you want to check. You must specify a --retrievetargetdir. Use with --wait to resume waiting.
   * @type {string}
   * @memberof IMdapiRetrieve
   */
  jobid?: string

  /**
   * [Optional] The number of minutes to wait for the command to complete. -1
   * @type {string}
   * @memberof IMdapiRetrieve
   */
  wait?: string

  /**
   * [Optional] A comma-separated list of package names to retrieve.
   * @type {string}
   * @memberof IMdapiRetrieve
   */
  packagenames?: string

  /**
   * [Optional] The source directory to use instead of the default manifest specified in sfdx-config.json.
   * @type {string}
   * @memberof IMdapiRetrieve
   */
  sourcedir?: string

  /**
   * [Optional] The complete path for the manifest file that specifies the components to retrieve.
   * @type {string}
   * @memberof IMdapiRetrieve
   */
  unpackaged?: string
}

/**
 * Mdapi
 *
 * @export
 * @class Mdapi
 */
@apiNamespace("force")
@apiCommandClass("mdapi")
export class Mdapi {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * convert metadata api source into the sfdx source format
   * @returns {(Promise<Object | void>)}
   * @memberof Mdapi
   * @description Converts source retrieved from Metadata API into the format used in Salesforce DX projects.
   * @example To work with source that you retrieved via Metadata API using the Salesforce DX tools, convert the source to the Salesforce DX format using "sfdx force:mdapi:convert".
   * 
   * To convert the source back to the Metadata API format, so that you can deploy it using "sfdx force:mdapi:deploy", run "sfdx force:source:convert".
   * 
   * Examples:
   *    $ sfdx force:mdapi:convert -r <path to source>
   *    $ sfdx force:mdapi:convert -r <path to source> -d <path to outputdir>
   * force:mdapi:convert -r <directory> [-d <directory>] [--json] [--loglevel <string>]
   */
  @apiCommand("convert")
  public convert(options: IMdapiConvert): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      rootdir: "--rootdir",
      loglevel: "--loglevel",
      json: "--json",
      outputdir: "--outputdir"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.convert,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * deploys metadata to an org using metadata api
   * @returns {(Promise<Object | void>)}
   * @memberof Mdapi
   * @description Deploys file representations of components into an org by creating or updating the components they represent. You can deploy and retrieve up to 10,000 files or 400 MB (39 MB compressed) at one time. The default target username is the admin user for the default scratch org.
   * @example Specify the location of the files to deploy as a .zip file or by the root of the directory tree containing the files. To check the status of a deployment, specify its job ID.
   * 
   * The default value of --rollbackonerror is true, but the corresponding parameter in the Metadata API deploy() call defaults to false.
   * force:mdapi:deploy (-c | -i <id>) (-d <directory> | -f <filepath>) [-w <minutes>] [-l <string>] [-r <string>...] [-e <boolean>] [-u <string>] [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("deploy")
  public deploy(options?: IMdapiDeploy): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      rollbackonerror: "--rollbackonerror",
      verbose: "--verbose",
      checkonly: "--checkonly",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      zipfile: "--zipfile",
      deploydir: "--deploydir",
      runtests: "--runtests",
      testlevel: "--testlevel",
      jobid: "--jobid",
      wait: "--wait"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.deploy,
      options,
      parameterNamesToSwitchNames
    )
  }

  /**
   * retrieves metadata from an org using metadata api
   * @returns {(Promise<Object | void>)}
   * @memberof Mdapi
   * @description Uses Metadata API to retrieve a .zip of XML files that represent metadata from the targeted org. The default target username is the admin user for the default scratch org. You can retrieve and deploy up to 10,000 files or 400 MB (39 MB compressed) at one time.
   * @example The default target username is the admin user for the default scratch org. You can retrieve and deploy up to 10,000 files or 400 MB (39 MB compressed) at one time.
   * force:mdapi:retrieve -r <directory> [-a <number>] [-w <minutes>] [-k <filepath>] [-d <directory>] [-p <string>...] [-s] [-i <id>] [-u <string>] [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("retrieve")
  public retrieve(options: IMdapiRetrieve): Promise<Object | void> {
    const parameterNamesToSwitchNames = {
      retrievetargetdir: "--retrievetargetdir",
      singlepackage: "--singlepackage",
      verbose: "--verbose",
      apiversion: "--apiversion",
      loglevel: "--loglevel",
      json: "--json",
      targetusername: "--targetusername",
      jobid: "--jobid",
      wait: "--wait",
      packagenames: "--packagenames",
      sourcedir: "--sourcedir",
      unpackaged: "--unpackaged"
    }

    return this.requestExecutioner.execute<Object>(
      this,
      this.retrieve,
      options,
      parameterNamesToSwitchNames
    )
  }
}
