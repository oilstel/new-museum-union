var css = require('sheetify')
var choo = require('choo')
var html = require('choo/html')
var fetch = require('unfetch')
const url = 'https://blur.website/cms/spad'

var app = choo()
app.route('/', require('./views/home'))
app.route('/*', require('./views/main'))
app.mount('body')


if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}


app.use(function (state, emitter) {
 // init state.content as object
  // state.content.children = {}
  // state.content = ''
  // emitter.emit(state.events.RENDER)

  // state.content = {}

  fetch('https://blur.website/cms/spad')
  .then(response => response.json())
  .then(data => {
    // Here's a list of repos!
    state.content = data
    emitter.emit(state.events.RENDER)
  });



})



