// Generated on August 8th 2017, 4:54:51 pm. DO NOT MODIFY
import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

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
   *
   * @param {string} rootdir The root directory that contains the source you retrieved using Metadata API. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} outputdir The directory to store your source in after it’s converted to the Salesforce DX format. Can be an absolute or relative path. 
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
  public convert(
    @apiParameter("--rootdir") rootdir: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--outputdir") outputdir?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.convert,
      arguments
    )
  }

  /**
   * deploys metadata to an org using metadata api
   *
   * @param {string} rollbackonerror Indicates whether any failure causes a complete rollback of the deploy operation. The default is true. If set to false, the operation performs actions that don’t have errors and returns errors for the remaining actions. You must set this parameter to true if you are deploying to a production org. 
   * @param {Boolean} verbose Indicates that you want verbose output from the deploy operation. 
   * @param {string} checkonly Validates the deployed metadata and runs all Apex tests, but prevents the deployment from being saved to the org. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} zipfile The path to the .zip file of metadata files to deploy. Required to initiate a deployment if you do not use --deploydir. If you specify both --zipfile and --deploydir, a zip file of the contents of the --deploydir directory is written to the location specified by --zipfile. 
   * @param {string} deploydir The root of the directory tree that contains the files to deploy. The root must contain a valid package.xml file describing the entities in the directory structure. Required to initiate a deployment if you don’t use --zipfile. If you specify both --zipfile and --deploydir, a zip file of the contents of the --deploydir directory is written to the location specified by --zipfile. 
   * @param {string} runtests Lists the Apex classes containing the deployment tests to run. Use this parameter when you set --testlevel to RunSpecifiedTests. 
   * @param {string} testlevel Specifies which level of deployment tests to run. Valid values are:
   * NoTestRun—No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.
   * RunSpecifiedTests—Runs only the tests that you specify in the --runtests option. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.
   * RunLocalTests—All tests in your org are run, except the ones that originate from installed managed packages. This test level is the default for production deployments that include Apex classes or triggers.
   * RunAllTestsInOrg—All tests in your org are run, including tests of managed packages.
   * If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see “Running Tests in a Deployment” in the Metadata API Guide. 
   * @param {string} jobid The job ID (asyncId) of the deployment you want to check. Use with -w to resume waiting. 
   * @param {string} wait The number of minutes to wait for the command to complete. The default is –1 (no limit). 0 
   * @returns {(Promise<Object | void>)}
   * @memberof Mdapi
   * @description Deploys file representations of components into an org by creating or updating the components they represent. You can deploy and retrieve up to 10,000 files or 400 MB (39 MB compressed) at one time. The default target username is the admin user for the default scratch org.
   * @example Specify the location of the files to deploy as a .zip file or by the root of the directory tree containing the files. To check the status of a deployment, specify its job ID.
   * 
   * The default value of --rollbackonerror is true, but the corresponding parameter in the Metadata API deploy() call defaults to false.
   * force:mdapi:deploy (-c | -i <id>) (-d <directory> | -f <filepath>) [-w <minutes>] [-l <string>] [-r <string>...] [-e <boolean>] [-u <string>] [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("deploy")
  public deploy(
    @apiParameter("--rollbackonerror") rollbackonerror?: string,
    @apiParameter("--verbose") verbose?: Boolean,
    @apiParameter("--checkonly") checkonly?: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--zipfile") zipfile?: string,
    @apiParameter("--deploydir") deploydir?: string,
    @apiParameter("--runtests") runtests?: string,
    @apiParameter("--testlevel") testlevel?: string,
    @apiParameter("--jobid") jobid?: string,
    @apiParameter("--wait") wait?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(this, this.deploy, arguments)
  }

  /**
   * retrieves metadata from an org using metadata api
   *
   * @param {string} retrievetargetdir The root of the directory structure where the retrieved zip or metadata files are put. 
   * @param {Boolean} singlepackage Specifies whether only a single package is being retrieved (true) or more than one package (false). 
   * @param {Boolean} verbose Indicates that you want verbose output from the retrieve operation. 
   * @param {string} apiversion Use to override the default, which is the latest version supported by your CLI plug-in, with the version in your package.xml file. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} jobid The job ID (asyncId) of the retrieve you want to check. You must specify a --retrievetargetdir. Use with --wait to resume waiting. 
   * @param {string} wait The number of minutes to wait for the command to complete. -1 
   * @param {string} packagenames A comma-separated list of package names to retrieve. 
   * @param {string} sourcedir The source directory to use instead of the default manifest specified in sfdx-config.json. 
   * @param {string} unpackaged The complete path for the manifest file that specifies the components to retrieve. 
   * @returns {(Promise<Object | void>)}
   * @memberof Mdapi
   * @description Uses Metadata API to retrieve a .zip of XML files that represent metadata from the targeted org. The default target username is the admin user for the default scratch org. You can retrieve and deploy up to 10,000 files or 400 MB (39 MB compressed) at one time.
   * @example The default target username is the admin user for the default scratch org. You can retrieve and deploy up to 10,000 files or 400 MB (39 MB compressed) at one time.
   * force:mdapi:retrieve -r <directory> [-a <number>] [-w <minutes>] [-k <filepath>] [-d <directory>] [-p <string>...] [-s] [-i <id>] [-u <string>] [--json] [--loglevel <string>] [--verbose]
   */
  @apiCommand("retrieve")
  public retrieve(
    @apiParameter("--retrievetargetdir") retrievetargetdir: string,
    @apiParameter("--singlepackage") singlepackage?: Boolean,
    @apiParameter("--verbose") verbose?: Boolean,
    @apiParameter("--apiversion") apiversion?: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--jobid") jobid?: string,
    @apiParameter("--wait") wait?: string,
    @apiParameter("--packagenames") packagenames?: string,
    @apiParameter("--sourcedir") sourcedir?: string,
    @apiParameter("--unpackaged") unpackaged?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.retrieve,
      arguments
    )
  }
}
