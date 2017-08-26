const fs = require('fs')
const path = require('path')
const app = require('../src')
const SEP = '<body><script src="bundle.js"></script></body>'
const routes = ['/']
const buf = fs.readFileSync(path.join(__dirname, '../src/index.html'))
const parts = buf.toString().split(SEP)

routes.forEach(route => {
  const filename = `${route === '/' ? 'index' : route}.html`
  const routeBody = app.toString(route)
  const content = [parts[0], routeBody, parts[1]].join('')
  fs.writeFileSync(path.join(__dirname, '../public/', filename), content)
})
