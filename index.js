var css = require('sheetify')
var choo = require('choo')
var store = require('./stores/data')
var storeNew = require('./stores/data')
require('./design')

const request = require("request")
var url = "https://blur.website/cms/spad"

request({ url: url, json: true }, 
  function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body.children);
    }
})


var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(store)
app.use(storeNew)



app.route('/', require('./views/home'))
app.route('/*', require('./views/page'))
app.route('/*/:slug', require('./views/page'))


// state.pages.forEach(function(element) {
//   console.log(element.id);
//   let route_name = '/' + element.id;
//   app.route(route_name, require('./views/page'))
// })

// function urls (url) {
//   let { slug } = url

//   let route_name = '/' + slug;

//   app.route(route_name, require('./views/page'))
// }


module.exports = app.mount('body')



