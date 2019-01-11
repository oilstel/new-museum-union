var css = require('sheetify')
var choo = require('choo')
var dataStore = require('./stores/data')


var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(dataStore)

app.route('/', require('./views/home'))
app.route('/*', require('./views/page'))
// app.route('/*/:slug', require('./views/page'))

module.exports = app.mount('body')




