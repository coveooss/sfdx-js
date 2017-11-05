// Add all those dependencies your NPM package.json.

const gulp = require('gulp');
const path = require('path');
const fs = require('fs-extra');
const sfdxjs = require('sfdx-js');
const sfdxprebuilt = require('sfdx-prebuilt');
const util = require('gulp-util');
const cp = require('child_process');
const promiseRetry = require('promise-retry');
const sfdx = sfdxjs.Client.createUsingPath(sfdxprebuilt.path);
const dotenv = require('dotenv')
const dotenvStringify = require('dotenv-stringify')
const _ = require('underscore')
const jsforce = require('jsforce');
const yargs = require('yargs');

const pathToCurrentEnv = path.resolve(__dirname, '../../env/.env.currentScratchOrg');
const sfdxJWTFile = path.resolve(__dirname, '../../env/.sfdxjwtkey');

/**
 * Get the alias to use.
 */
const getAlias = function() {
  var alias = yargs.argv.alias;

  if(alias === undefined) {
    alias = getBranchName();
  }

  util.log(`Using alias '${alias}'`)

  return alias
}

/**
 * Get the organization alias. Right now, it correspond to the current HG branch.
 */
const getBranchName = function() {
  const branchName = cp.execSync('hg branch')
  .toString()
  // remove extra new lines.
  .replace('\n', '');

  return branchName;
};

/**
 * Get the a dev hub connection using your SFDX_AUTH_JWT_USERNAME. Must be authenticated first.
 */
const getDevHubConnection = function() {
  var devOrgInformations;
  return sfdx.org.display({
    targetusername: process.env.SFDX_AUTH_JWT_USERNAME
  })
  .then(response => {
    devOrgInformations = response.result;
  })
  .then(() => {
    return new jsforce.Connection({
      instanceUrl: devOrgInformations.instanceUrl,
      accessToken: devOrgInformations.accessToken,
      version: '40.0'
    });
  });
};

/**
 * * Authenticate to SFDX using the JWT key in your configuration.
 * @param {string} username The usename to authenticate to. Will default to process.env.SFDX_AUTH_JWT_USERNAME.
 */
const authenticate = function(username, instanceUrl, isDefaultDevHub) {
  if(username === undefined) {
    username = process.env.SFDX_AUTH_JWT_USERNAME;
  }

  if(instanceUrl === undefined) {
    instanceUrl = process.env.SFDX_AUTH_JWT_INSTANCE_URL;
  }

  if(isDefaultDevHub === undefined) {
    isDefaultDevHub = username === process.env.SFDX_AUTH_JWT_USERNAME
  }

  if(!process.env.SFDX_AUTH_JWT_KEY) {
    throw new Error('Please specify your JWT key');
  }

  const sfdxJWTString = Buffer.from(process.env.SFDX_AUTH_JWT_KEY, 'base64');

  var currentJWTString;
  if(fs.existsSync(sfdxJWTFile)) {
    currentJWTString = fs.readFileSync(sfdxJWTFile).toString();
  }

  if(!currentJWTString || currentJWTString != sfdxJWTString) {
    fs.writeFileSync(sfdxJWTFile, sfdxJWTString);
  }

  var mustAuthenticate = true;
  return sfdx.org.display({targetusername: username})
  .then(response => {
    if(response && response.result && response.result.connectedStatus === 'Connected') {
      mustAuthenticate = false;
    }

  })
  .catch(err => {
    mustAuthenticate = true;
  })
  .then(() => {
    if(mustAuthenticate) {
      util.log(`Authenticating ${isDefaultDevHub ? 'as default dev hub ': ''}using "${username}" using "${ sfdxJWTFile }".`);
      return sfdx.auth.jwtGrant({
        clientid: process.env.SFDX_AUTH_JWT_CLIENT_ID,
        jwtkeyfile: sfdxJWTFile,
        username: username,
        instanceurl: instanceUrl,
        setdefaultdevhubusername: isDefaultDevHub
      });
    } else {
      util.log(`Already authenticated to "${username}".`)
    }
  })
};

/**
 * Read the current scratch org .env file and load it's informations.
 */
const getCurrentScratchOrgConfiguration = function() {
  try {
    return dotenv.parse(fs.readFileSync(pathToCurrentEnv).toString());
  } catch (e) {
    throw new Error('Cannot read current scratch org configuration.');
  }
};

/**
 * Get the currenst scratch org user name.
 */
const getCurrentScratchUsername = function() {
  const config = getCurrentScratchOrgConfiguration();
  const username = config.SF_USERNAME;

  return username;
};

/**
 * Delete all the organization associated with the branch.
 * @param {*} branch The branche name (case sensitive)
 */
const deleteOrganization = function(branch) {
  var orgIdsToDelete = [];
  return getAdditionalOrgInformations()
  .then(orgInfos => {
    _.each(orgInfos, orgInfo => {
      if(orgInfo.AlmReference && orgInfo.AlmReference.branch == branch) {
        orgIdsToDelete.push(orgInfo.Id);
      }
    })
  })
  .then(() => {
    return getDevHubConnection()
      .then(connection => {
        if(orgIdsToDelete.length > 0) {
          util.log(`Deleting: ${orgIdsToDelete.join(', ')}.`)
          return new Promise(function(resolve, reject) {
            connection.sobject("ActiveScratchOrg").delete(orgIdsToDelete, function(err, ret){
              if(err) {
                reject(err);
              } else {
                resolve(ret);
              }
            })
          });
        }
      });
  })
};

/**
 * Create a scratch org with all the needed information (new config, set additonal informations, etc...)
 */
const createScratchOrg = function() {
  var username;
  var orgInformations;
  var connection;

  const orgAlias = getAlias();
  const definitionFile = path.resolve(__dirname, './orgDefinitions/simpleOrgDefinition.json');

  return deleteOrganization(orgAlias)
  .catch((err) => {
    console.log(err)
  })
  .then(() => {
    util.log(`Creating scratch org with alias "${ orgAlias }".`);

    return sfdx.org.create({
      definitionfile: definitionFile,
      setalias: orgAlias,
      targetdevhubusername: process.env.SFDX_AUTH_JWT_USERNAME
    });
  })
  .then(response => {
    username = response.result.username;

    util.log(`Org created with username: "${ username }".`);
  })
  .then(() => {
    util.log('Generating password for scratch org.');

    return sfdx.user.passwordGenerate({ targetusername: username });
  })
  .then(() => {
    util.log('Generating environment file.');

    return sfdx.org.display({ targetusername: username });
  })
  .then(response => {
    orgInformations = response.result;

    var envFile = {
      'SF_USERNAME': orgInformations.username,
      'SF_PASSWORD': orgInformations.password,
      'SF_SECURITYTOKEN': '',
      'SF_SERVERURL': orgInformations.instanceUrl,
      'NAMESPACE_PREFIX': 'c',
      'PACKAGE_NAME': 'c',
      'ORG_ALIAS': orgAlias,
      'SFDX_AUTH_JWT_USERNAME': process.env.SFDX_AUTH_JWT_USERNAME,
      'SFDX_AUTH_JWT_INSTANCE_URL': process.env.SFDX_AUTH_JWT_INSTANCE_URL,
      'SFDX_AUTH_JWT_KEY': process.env.SFDX_AUTH_JWT_KEY,
      'SFDX_AUTH_JWT_CLIENT_ID': process.env.SFDX_AUTH_JWT_CLIENT_ID
    };

    var fileContent = dotenvStringify.stringify(envFile, null, 2);
    var pathToDevEnv = path.resolve(__dirname, `../../env/.env.${ orgAlias }`);

    fs.writeFileSync(pathToDevEnv, fileContent);
    util.log(`Environment file generated at "${ pathToDevEnv }".`);

    fs.writeFileSync(pathToCurrentEnv, fileContent);
    util.log(`Environment file generated at "${ pathToCurrentEnv }".`);
  })
  .then(() => {
    return getDevHubConnection();
  })
  .then(connection => {
    return new Promise(function(resolve, reject) {
      connection.query(`SELECT Id FROM ActiveScratchOrg where SignupUsername='${orgInformations.username}'`, function(err, result) {
        if(err) {
          reject(err)
        } else {
          const additionalOrgInfos = JSON.stringify({
            branch: getAlias()
          });

          connection.sobject("ActiveScratchOrg").update({
            Id : result.records[0].Id,
            AlmReference : additionalOrgInfos
          },
          function(err, ret) {
            if (err || !ret.success) {
              reject()
            } else {
              resolve()
            }
          });
      }
    });
  })})
  .then(() => {
    util.log('Org created successfully!');
  })
  .catch(err => {
    console.log(err);
  });
};

/**
 * Deploy the package to the scratch org.
 */
const deployScratchOrg = function() {
  const username = getCurrentScratchUsername();

  util.log(`Deploying package to ${ username }.`);

  return sfdx.mdapi.deploy({
    deploydir: path.resolve(__dirname, '../../pkg/'),
    targetusername: username,
    wait: 10 })
  .then(() => {
    util.log(`Org deployed with username: "${ username }".`);
  })
  .catch(err => {
    console.log(err);
  });
};

/**
 * Get the additional org informations for the Dev Hub. It will read the AlmReference from the ActiveScratchOrg object.
 */
const getAdditionalOrgInformations = function() {
  return sfdx.data.soqlQuery({
    query: '"select id, AlmReference, SignupUsername from ActiveScratchOrg"',
    targetusername: process.env.SFDX_AUTH_JWT_USERNAME
  })
  .then((response) => {
    var promises = [];
    _.each(response.result.records, (activeScratchOrg) => {
      if(activeScratchOrg.AlmReference) {
        try {
          activeScratchOrg.AlmReference = orgInfo = JSON.parse(activeScratchOrg.AlmReference);
        } catch(e) {
          activeScratchOrg.AlmReference = {};
        }
      }
    })
    return response.result.records;
  });
};

/**
 * restore the alias from the addition org informations.
 */
const restoreAlias = function() {
  util.log('Restoring alias');
  return getAdditionalOrgInformations()
    .then((orgInfos) => {
      var promises = [];
      _.each(orgInfos, (activeScratchOrg) => {
        if(activeScratchOrg.AlmReference && activeScratchOrg.AlmReference.branch) {
          util.log(`Setting '${activeScratchOrg.AlmReference.branch}' to ${activeScratchOrg.SignupUsername}`)
          promises.push(sfdx.alias.set({
            expression: activeScratchOrg.AlmReference.branch + '=' + activeScratchOrg.SignupUsername
          }));
        }
      })

      return Promise.all(promises)
    });
}

/**
 * Setup a scratch org by creating a new org using the branch alias, deploying everything
 * and ovewriting the dev.env.json file.
 */
gulp.task('setupScratchOrg', ['setEnv'], function(done) {
  authenticate()
  .then(() => {
    return createScratchOrg();
  })
  .then(() => {
    util.log('Coping scratch org environment to current dev environment file.');

    // Copy the scratch org to the dev env.
    fs.copySync(pathToCurrentEnv, path.resolve(__dirname, '../../env/.env'), { overwrite: true });
  })
  .then(() => {
    done();
  })
  .catch(err => {
    console.log(err);
    done(err);
  });
});

/**
 * Create a scratch org by creating a new org using the branch alias,
 * enabling the trusted ip range and creating an environment configuration to use later.
 */
gulp.task('createScratchOrg', ['setEnv'],  function(done) {
  authenticate()
  .then(() => {
    return createScratchOrg();
  })
  .then(() => {
    done();
  });
});

/**
 * deploy to the current scratch org, filling it with our package.xml.
 */
gulp.task('deployScratchOrg', ['setEnv', 'build'], function(done) {
  authenticate()
  .then(() => {
    return deployScratchOrg();
  })
  .then(() => {
    done();
  });
});

/**
 * restore the alias from the deb hub.
 */
gulp.task('restoreAlias', ['setEnv'], function(done) {
  authenticate()
  .then(() => {
    return restoreAlias();
  })
  .then(() => {
    done();
  });
});

/**
 * openInSalesforce
 */
gulp.task('openScratchInSalesforce', ['setEnv'], function(done) {
  const alias = yargs.argv.alias;
  var username = yargs.argv.username;

  // If we got nothing, default on the current scratch org configuration.
  if(!username) {
    try {
      username = getCurrentScratchUsername();
    } catch(e) {
      username = undefined;
    }
  }

  authenticate(process.env.SFDX_AUTH_JWT_USERNAME, process.env.SFDX_AUTH_JWT_INSTANCE_URL)
  .then(() => {
    if(alias) {
      return restoreAlias()
      .then(() => {
        return sfdx.alias.list().then((response) => {
          var usernameFromAlias;
          _.each(response.result, pair => {
            if(pair.alias === alias) {
              username = pair.value;
            }
          });

          if(!username) {
            throw new Error('Could not find associated username.');
          } else {
            util.log(`Found "${username}" associated with "${alias}".`)
          }
        })
      })
    }
  })
  .then(() => {
    return authenticate(username, 'https://test.salesforce.com');
  })
  .then(() => {
    return sfdx.org.open({ targetusername: username }).then((response) => {
      util.log(`Opening url: ${response.result.url}`)
    })
  })
  .catch(err => {
    console.log(err);
  })
  .then(() => done());
});
