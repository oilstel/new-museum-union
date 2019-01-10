var css = require('sheetify')
var choo = require('choo')
var store = require('./stores/data')
require('./design')

// css('tachyons')

// module.exports = {
//   main: require('./views/main'),
//   page: require('./views/page')
// }


var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(store)


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



