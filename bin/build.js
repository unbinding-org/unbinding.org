const fs = require('fs')
const path = require('path')
const buildSass = require('./build-sass')
const app = require('../src')
const SEP = '<body><script src="bundle.js"></script></body>'

buildSass(err => {
  const routes = ['/']

  fs.readFile(path.join(__dirname, '../src/index.html'), (err, buf) => {
    if (err) throw err

    const parts = buf.toString().split(SEP)

    routes.forEach(route => {
      const filename = `../public${route === '/' ? '/index' : route}.html`
      const routeBody = app.toString(route)
      const content = [parts[0], routeBody, parts[1]].join('')
      fs.writeFileSync(path.join(__dirname, filename), content)
    })

  })
})