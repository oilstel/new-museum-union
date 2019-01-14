var html = require('choo/html')

var TITLE = 'Home'

module.exports = home

function home (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  console.log(state.href);

  if (state.content) {
    console.log('Content loaded!')

    const pages = state.content.children // init data into pages const
    const url_slug = state.href.substr(1) // Current page path from state
    
    var nav = pages.map((page) => { // Get the page nav
      if (page.uri === url_slug) {
        return html`
            <p style="font-weight:bold;"><a href="/${page.uri}">${page.uri === url_slug ? page.title : ''}</a></p>
        `
      } else {
        return html`
            <p><a href="/${page.uri}">${page.uri === url_slug ? '' : page.title}</a></p>
        `
      }
    })
  } else {
    console.log('Content not loaded yet.')
  }

  return html`
    <body>
      <nav>
        ${nav}
    </body>
  `
}
