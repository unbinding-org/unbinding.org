const choo = require('choo')
const app = choo()

app.route('/', require('./views/layout.view'))

if (require.main === module) {
  app.mount('body')
} else {
  module.exports = app
}