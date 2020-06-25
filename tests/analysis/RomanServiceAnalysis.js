const fs = require('fs')
const path = require('path')
const Iroh = require('iroh')

function loadScript(scriptPath) {
  const script = fs.readFileSync(
    path.join(__dirname, scriptPath),
    { encoding: 'utf8' }
  ).replace('export default', 'const service =')

  return script + 'service.arabicToRoman(61)'
}

function indent(n) {
  return ' '.repeat(n)
}

function addListeners(stage) {
  stage.addListener(Iroh.PROGRAM)
    .on('enter', (event) => {
      console.log(`${indent(event.indent)} Program START`)
    })
    .on('leave', (event) => {
      console.log(`${indent(event.indent)} Program END -> ${event.return}`)
    })
  
    stage.addListener(Iroh.FUNCTION)
      .on('enter', (event) => {
        let sloppy = event.sloppy ? 'sloppy' : ''
        console.log(`${indent(event.indent)} Call function ${event.name} ${sloppy} (${event.arguments})`)
        // console.log(event.getSource())
      })
      .on('return', (event) => {
        let sloppy = event.sloppy ? 'sloppy' : ''
        console.log(`${indent(event.indent)} End function ${event.name} ${sloppy} -> ${event.return}`)
        // console.log(event.getSource())
      })
}

module.exports = {
  run() {
    const stage = new Iroh.Stage(loadScript('../../src/services/RomanService.js'))
    addListeners(stage)
    eval(stage.script)
  }
}

