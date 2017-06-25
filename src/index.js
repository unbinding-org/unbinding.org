const fs = require('fs')
const path = require('path')
const express = require('express')
const yaml = require('js-yaml')
const app = express()
const PORT = 1108

app.use(express.static('public'))
app.set('views', path.join(__dirname, '/templates'))
app.set('view engine', 'pug')

assignRoutes(yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'routes.yaml'))))

app.listen(PORT)

console.log('unbinding.org website listening on port', PORT)

function assignRoutes (routes) {
  Object.keys(routes).forEach(route => {
    const url = route
    const template = routes[route]
    app.get(url, (req, res) => {
      const filename = url.slice(-1) === '/' ? url + 'index.yaml' : url + '.yaml'
      const filepath = path.join(__dirname, '/content', filename)
      const content = yaml.safeLoad(fs.readFileSync(filepath))

      return res.render(template, content)
    })
  })
}

