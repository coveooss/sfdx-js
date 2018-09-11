var generator = require('sfdx-generator')
var path = require('path')
var root = path.resolve(__dirname, './..')
var generator = new generator.Generator({
  SFDXPath: 'sfdx',
  outputDirectory: path.resolve(root, 'src/generated'),
  templateDirectory: path.resolve(root, './tools/templates'),
  fileExtension: 'ts'
});

var commandFile = require('../commands.json')
var stringFile = JSON.stringify(commandFile)
generator.generate(stringFile).then(() => {
  console.log('Generating done')
})
