const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const sass = require('node-sass')
const IN = './src/style.sass'
const OUT = './public/style.css'

module.exports = buildSass

function buildSass (callback) {
  const opts = { file: IN }

  mkdirp(__dirname + path.dirname(OUT), (err) => {
    if (err) return callback(err)
    sass.render(opts, function (err, result) {
      if (err) return callback(err)
      fs.writeFile(OUT, result.css, err => {
        if (err) return callback(err)
        return callback(null)
      })
    })
  })
}