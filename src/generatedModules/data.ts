import {
  apiParameter,
  apiNamespace,
  apiCommandClass,
  apiCommand
} from "../core/decorators"
import { loglevel, IStringKeyPair } from "../modules/common"
import { ICommandExecutioner } from "../core/commandExecutioner"

/**
 * Data
 *
 * @export
 * @class Data
 */
@apiNamespace("force")
@apiCommandClass("data")
export class Data {
  constructor(private requestExecutioner: ICommandExecutioner) {}

  /**
   * bulk delete records from a csv file
   *
   * @param {string} sobjecttype The sObject type of the records you’re deleting. 
   * @param {string} csvfile The path to the CSV file that contains the IDs of the records to delete. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} wait The number of minutes to wait for the command to complete before displaying the results. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Deletes a batch of records listed in a CSV file.
   * @example The file must be a CSV file with only one column: "Id".
   * One job can contain many batches, depending on the length of the CSV file.
   * Returns a job ID and a batch ID. Use these IDs to check job status with data:bulk:status.
   * 
   * Examples:
   *    $ sfdx force:data:bulk:delete -s Account -f ./path/to/file.csv
   *    $ sfdx force:data:bulk:delete -s MyObject__c -f ./path/to/file.csv
   * force:data:bulk:delete -s <string> -f <file> [-w <minutes>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("bulk:delete")
  public bulkDelete(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--csvfile") csvfile: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--wait") wait?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.bulkDelete,
      arguments
    )
  }

  /**
   * view the status of a bulk data load job or batch
   *
   * @param {string} jobid The ID of the job you want to view or of the job whose batch you want to view. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} batchid The ID of the batch whose status you want to view. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Polls the Bulk API for job status or batch status.
   * @example Examples:
   *    $ sfdx force:data:bulk:status -i 750xx000000005sAAA
   *    $ sfdx force:data:bulk:status -i 750xx000000005sAAA -b 751xx000000005nAAA
   * force:data:bulk:status -i <id> [-b <id>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("bulk:status")
  public bulkStatus(
    @apiParameter("--jobid") jobid: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--batchid") batchid?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.bulkStatus,
      arguments
    )
  }

  /**
   * bulk upsert records from a csv file
   *
   * @param {string} sobjecttype The sObject type of the records you want to upsert. 
   * @param {string} csvfile The path to the CSV file that defines the records to upsert. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} wait The number of minutes to wait for the command to complete before displaying the results. 
   * @param {string} externalid The column name of the external ID. If not provided, an arbitrary ID is used. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Creates a job and one or more batches for inserting new rows and updating existing rows by accessing the Bulk API.
   * @example Inserts or updates records from a CSV file. 
   * One job can contain many batches, depending on the length of the CSV file.
   * Returns a job ID and a batch ID. Use these IDs to check job status with data:bulk:status.
   * 
   * For information about formatting your CSV file, see "Prepare CSV Files" in the Bulk API Developer Guide.
   * 
   * Examples:
   *    $ sfdx force:data:bulk:upsert -s MyObject__c -f ./path/to/file.csv -i MyField__c
   *    $ sfdx force:data:bulk:upsert -s MyObject__c -f ./path/to/file.csv -i Id -w 2
   * force:data:bulk:upsert -s <string> -f <file> [-i <id>] [-w <minutes>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("bulk:upsert")
  public bulkUpsert(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--csvfile") csvfile: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--wait") wait?: string,
    @apiParameter("--externalid") externalid?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.bulkUpsert,
      arguments
    )
  }

  /**
   * create a record
   *
   * @param {string} sobjecttype The sObject type of the record you’re creating. 
   * @param {string} values The <fieldName>=<value> pairs you’re creating. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Creates and inserts a record.
   * @example The format of a field-value pair is <fieldName>=<value>.
   * Enclose all field-value pairs in one set of double quotation marks.
   * Enclose values that contain spaces in single quotes.
   * 
   * Examples:
   *    $ sfdx force:data:record:create -s Account -v "Name=Acme"
   *    $ sfdx force:data:record:create -s Account -v "Name='Universal Containers'"
   *    $ sfdx force:data:record:create -s Account -v "Name='Universal Containers' Website=www.example.com"
   * force:data:record:create -s <string> -v <string> [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("record:create")
  public recordCreate(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--values") values: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.recordCreate,
      arguments
    )
  }

  /**
   * delete a record
   *
   * @param {string} sobjecttype The sObject type of the record you’re deleting. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} where A list of <fieldName>=<value> pairs to search for. 
   * @param {string} sobjectid The ID of the record you’re deleting. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Deletes a single record.
   * @example Specify an sObject type and either an ID or a list of <fieldName>=<value> pairs.
   * The format of a field-value pair is <fieldName>=<value>.
   * Enclose all field-value pairs in one set of double quotation marks.
   * Enclose values that contain spaces in single quotes.
   * 
   * Examples:
   *    $ sfdx force:data:record:delete -s Account -i 001D000000Kv3dl
   *    $ sfdx force:data:record:delete -s Account -w "Name=Acme"
   *    $ sfdx force:data:record:delete -s Account -w "Name='Universal Containers'"
   *    $ sfdx force:data:record:delete -s Account -w "Name='Universal Containers' Phone='(123) 456-7890'"
   * force:data:record:delete -s <string> [-i <id>] [-w <string>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("record:delete")
  public recordDelete(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--where") where?: string,
    @apiParameter("--sobjectid") sobjectid?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.recordDelete,
      arguments
    )
  }

  /**
   * view a record
   *
   * @param {string} sobjecttype The sObject type of the record you’re retrieving. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} where A list of <fieldName>=<value> pairs to search for. 
   * @param {string} sobjectid The ID of the record you’re retrieving. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Displays a single record.
   * @example Specify an sObject type and either an ID or a list of <fieldName>=<value> pairs.
   * The format of a field-value pair is <fieldName>=<value>.
   * Enclose all field-value pairs in one set of double quotation marks.
   * Enclose values that contain spaces in single quotes.
   * 
   * Examples:
   *    $ sfdx force:data:record:get -s Account -i 001D000000Kv3dl
   *    $ sfdx force:data:record:get -s Account -w "Name=Acme"
   *    $ sfdx force:data:record:get -s Account -w "Name='Universal Containers'"
   *    $ sfdx force:data:record:get -s Account -w "Name='Universal Containers' Phone='(123) 456-7890'"
   * force:data:record:get -s <string> [-i <id>] [-w <string>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("record:get")
  public recordGet(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--where") where?: string,
    @apiParameter("--sobjectid") sobjectid?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.recordGet,
      arguments
    )
  }

  /**
   * update a record
   *
   * @param {string} sobjecttype The sObject type of the record you’re updating. 
   * @param {string} values The <fieldName>=<value> pairs you’re updating. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} where A list of <fieldName>=<value> pairs to search for. 
   * @param {string} sobjectid The ID of the record you’re updating. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Updates a single record.
   * @example The format of a field-value pair is <fieldName>=<value>.
   * Enclose all field-value pairs in one set of double quotation marks.
   * Enclose values that contain spaces in single quotes.
   * 
   * Examples:
   *   $ sfdx force:data:record:update -s Account -i 001D000000Kv3dl -v "Name=NewAcme"
   *   $ sfdx force:data:record:update -s Account -w "Name='Old Acme'" -v "Name='New Acme'"
   *   $ sfdx force:data:record:update -s Account -i 001D000000Kv3dl -v "Name='Acme III' Website=www.example.com"
   * force:data:record:update -s <string> -v <string> [-i <id>] [-w <string>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("record:update")
  public recordUpdate(
    @apiParameter("--sobjecttype") sobjecttype: string,
    @apiParameter("--values") values: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--where") where?: string,
    @apiParameter("--sobjectid") sobjectid?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.recordUpdate,
      arguments
    )
  }

  /**
   * execute a soql query
   *
   * @param {string} query SOQL query to execute. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {Boolean} usetoolingapi Execute the query using Tooling API. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Executes a SOQL query.
   * @example When you execute this command in a project, it executes the query against the data in your default scratch org.
   * 
   * Examples:
   *    $ sfdx force:data:soql:query -q "SELECT Id, Name, Account.Name FROM Contact"
   *    $ sfdx force:data:soql:query -q "SELECT Id, Name FROM Account WHERE ShippingState IN ('CA', 'NY')"
   *    $ sfdx force:data:soql:query -q "SELECT Name FROM ApexTrigger" -t
   * force:data:soql:query -q <string> [-t] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("soql:query")
  public soqlQuery(
    @apiParameter("--query") query: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--usetoolingapi") usetoolingapi?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.soqlQuery,
      arguments
    )
  }

  /**
   * export data from an org into sobject tree format for force:data:tree:import consumption
   *
   * @param {string} query SOQL query statement or the path of the file containing a SOQL query statement to retrieve the records to export. 
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {string} outputdir Directory to store generated files. 
   * @param {string} prefix Prefix of generated files. 
   * @param {Boolean} plan Generates mulitple sObject tree files and a plan definition file for aggregated import. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Exports data from an org into sObject Tree format for force:data:import consumption.
   * @example Generates JSON files for use with the force:data:tree:import command.
   * 
   * Examples:
   *    $ sfdx force:data:tree:export -q "SELECT Id, Name, (SELECT Name, Address__c FROM Properties__r) FROM Broker__c"
   *    $ sfdx force:data:tree:export -q <path to file containing soql query> -x export-demo -d /tmp/sfdx-out -p
   * force:data:tree:export -q <string> [-p] [-x <string>] [-d <directory>] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("tree:export")
  public treeExport(
    @apiParameter("--query") query: string,
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--outputdir") outputdir?: string,
    @apiParameter("--prefix") prefix?: string,
    @apiParameter("--plan") plan?: Boolean
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.treeExport,
      arguments
    )
  }

  /**
   * import data into an org using sobject tree api
   *
   * @param {loglevel} loglevel The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log. 
   * @param {Boolean} json Format output as JSON. 
   * @param {string} targetusername Username for the target org. Overrides the default target org. 
   * @param {Boolean} confighelp Displays the schema information for the configuration file. If you use this option, all other options, except --json, are ignored. 
   * @param {string} contenttype If the data file extension is not .json, provide the content type (applies to all files). 
   * @param {string} plan Path to plan to insert multiple data files that have master-detail relationships. Either --sobjecttreefiles or --plan is required. 
   * @param {string} sobjecttreefiles Ordered paths of JSON files containing a collection of record trees to insert. Either --sobjecttreefiles or --plan is required. 
   * @returns {(Promise<Object | void>)}
   * @memberof Data
   * @description Imports data into an org using the SObject Tree Save API. This data can include master-detail relationships.
   * @example To generate JSON files for use with force:data:tree:import, run "sfdx force:data:tree:export".
   * 
   * Examples:
   *    $ sfdx force:data:tree:import -p data/accounts-contacts-plan.json -u me@my.org
   *    $ sfdx force:data:tree:import -f data/accounts-only.json data/contacts-only-1.json
   *    $ sfdx force:data:tree:import -p ./test/data/accounts-contacts-plan.json
   * force:data:tree:import (-f <filepath>... | -p <filepath>) [-c <string>] [--confighelp] [-u <string>] [--json] [--loglevel <string>]
   */
  @apiCommand("tree:import")
  public treeImport(
    @apiParameter("--loglevel") loglevel?: loglevel,
    @apiParameter("--json") json?: Boolean,
    @apiParameter("--targetusername") targetusername?: string,
    @apiParameter("--confighelp") confighelp?: Boolean,
    @apiParameter("--contenttype") contenttype?: string,
    @apiParameter("--plan") plan?: string,
    @apiParameter("--sobjecttreefiles") sobjecttreefiles?: string
  ): Promise<Object | void> {
    return this.requestExecutioner.execute<Object>(
      this,
      this.treeImport,
      arguments
    )
  }
}
