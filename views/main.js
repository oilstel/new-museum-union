var html = require('choo/html')
var raw = require('nanohtml/raw')
// var navigation = require('../components/navigation')
var format = require('../components/format')

module.exports = main

function main (state, emit) { 
    // This checks if the content is loaded yet. If so start manipulating the data.
    if (state.content) {
      console.log('Content loaded!')

      const pages = state.content.children // init data into pages const
      const url_slug = state.href.substr(1) // Current page path from state

      var page_content = pages.map((page) => { // Get our pages
        if (page.uri === url_slug) { // If current page
          emit(state.events.DOMTITLECHANGE, page.title) // Update page title

          var subpages = page.children.map((subpage) => {
            return html`
              <p>- <a href="/${subpage.uri}">${subpage.title}</a></p>
            `
          })

          return html`
            <section>
              ${format(page.content.text)}
            </section>
          `

        }
      })

      var subpage_content = pages.map((page) => { // Get those subpages
        return page.children.map((subpage) => {
          if (subpage.uri === url_slug) { // If current page
            emit(state.events.DOMTITLECHANGE, subpage.title) // Update page title

            return html`
              <section>${format(subpage.content.text)}</section>
            `
          }
        })
      })

      var nav = pages.map((page) => { // Get the page nav
        if (page.uri === url_slug) {
          return html`
            <a href="/${page.uri}" class="current">${page.uri === url_slug ? page.title : ''}</a>
          `
        } else {
          return html`
            <a href="/${page.uri}">${page.uri === url_slug ? '' : page.title}</a>
          `
        }
      })


      

    } else {
      console.log('Content not loaded yet.')
    }

    return html`
      <body>
        <header>
          <a href="/">
            <svg id="New Mueseum Union" data-name="New Mueseum Union" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.13 43.23" style="max-width:600px;"><defs><style>.cls-1{font-size:38px;font-family:TimesNewRomanPSMT, Times New Roman;}.cls-2{fill:blue;}</style></defs><title>title</title><text class="cls-1" transform="translate(0.51 31.58)">New Mueseum Union</text><circle class="cls-2" cx="292.95" cy="6.06" r="4"/></svg>
          </a>
        </header>
        <nav>
          ${nav}
        </nav>

        <div class="content">
          ${page_content}
          ${subpage_content}
        </div>

        <div id="bug"></div>
      </body>
    `
}