var generator = require('../compiled_tools/generator')
var path = require('path')
console.log(generator)

var root = path.resolve(__dirname, './..')
var generator = new generator.Generator("sfdx", root)
var commandFile = require('../commands.json')
var stringFile = JSON.stringify(commandFile)
generator.generate(stringFile).then(() => {
  console.log('Generating done')
})
