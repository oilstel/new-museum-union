var html = require('choo/html')
// var navigation = require('../components/navigation')

var TITLE = 'Home'

module.exports = home

function home (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  console.log(state.href);


  // console.log('home',state.content.children);




  return html`
    <body class="code lh-copy">

    <a href="/">Home</a><br />
    <a href="page">page</a><br />

    </body>
  `



}
