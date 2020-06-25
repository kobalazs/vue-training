const fs = require('fs')
const path = require('path')
const Iroh = require('iroh')

function loadScript(scriptPath) {
  const script = fs.readFileSync(
    path.join(__dirname, scriptPath),
    { encoding: 'utf8' }
  ).replace('export default ', '')

  return `
    const service = ${script}
    service.arabicToRoman(6)
  `
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
}

module.exports = {
  run() {
    const stage = new Iroh.Stage(loadScript('../../src/services/RomanService.js'))
    addListeners(stage);
    eval(stage.script)
  }
}

