var css = require('sheetify')
var choo = require('choo')
var html = require('choo/html')
var fetch = require('unfetch')
var nav = require('./components/navigation')
const api = 'https://newmuseumunion.org/cms/spad'
// css('tachyons')
require('./design')

var app = choo()
app.route('*', require('./views/main'))
app.mount('body')

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(function (state, emitter) {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      // Here's a list of repos!
      state.content = data
      emitter.emit(state.events.RENDER)
  });
})



