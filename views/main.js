var html = require('choo/html')
var raw = require('nanohtml/raw')
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

          var subpage_title = page.children.map((subpage) => {
            return html`
              <p>- <a href="/${subpage.uri}">${subpage.title}</a></p>
            `

          })

          return html`
            <p>${raw(page.content.text)}</p>
            <b>${subpage_title}</b>
          `

        }
      })

      var subpage_content = pages.map((page) => { // Get those subpages
        return page.children.map((subpage) => {
          if (subpage.uri === url_slug) { // If current page
            emit(state.events.DOMTITLECHANGE, subpage.title) // Update page title

            return html`
              <p>${raw(subpage.content.text)}</p>
            `
          }
        })
      })

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
        </nav>

        ${page_content}
        ${subpage_content}
      </body>
    `
}