const path = require('path');

const camelize = function (str) {
  str = str.replace(/-/g, ' ')

  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return word.toUpperCase()
  }).replace(/\s+/g, '')
}

exports.componentName = function (file) {
  file = path.basename(file, '.svg')
  file = camelize(`Icon ${file}`)

  return file
}

exports.optimizeSvgCode = function (svgCode) {
  return svgCode.replace(/<path stroke="none" d="M0 0h24v24H0z"[^>]+>/, '')
}
