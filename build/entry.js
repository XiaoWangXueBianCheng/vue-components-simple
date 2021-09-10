const path = require('path')
const fs = require('fs')
const resolve = dir => path.resolve(__dirname, '../', dir)
const entry = {
  index: resolve('src/index.js'),
}

function setEntry (entry) {
  const modulesDir = resolve('src/modules')
  try {
    const files = fs.readdirSync(modulesDir)
    files.forEach(folderName => {
      const key = folderName
      const pathName = resolve('src/modules/' + folderName + '/index.js')
      entry[key] = pathName
    })
  } catch (err) {
    console.log(err)
  }
}
setEntry(entry)
module.exports = entry
