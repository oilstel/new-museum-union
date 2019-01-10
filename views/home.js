var html = require('choo/html')
var navigation = require('../components/navigation')

var TITLE = 'Home'

module.exports = home

function home (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  console.log(state.href);

  return html`
    <body class="code lh-copy">

    <a href="/">Home</a><br />
    
    ${state.pages.map(navigation)}
    </body>
  `



}
