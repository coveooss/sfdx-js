var sfdx = require('../dist/sfdx-js.cjs')
var path = require('path')

var root = path.resolve(__dirname, './..')
var commandRunner = new sfdx.CommandRunner("sfdx")
var generator = new sfdx.Generator(commandRunner, root)
var commandFile = require('../commands.json')
var stringFile = JSON.stringify(commandFile)
generator.generate(stringFile).then(() => {
  console.log('Generating done')
})

