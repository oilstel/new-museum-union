var html = require('choo/html')
var format = require('../components/format')
var navigation = require('../components/navigation')

module.exports = page

var title = 'Page'

function page (state, emit) {

  return html`
    <body>
    <a href="/">Home</a><br />
    ${state.pages.map(navigation)} : )
    ${state.pages.map(page)}
    </body>
  `


  function page (page) {
    let { title, content, slug } = page

    if ('/' + slug === state.href) {
      

      if (state.title !== title) emit('DOMTitleChange', title)

      return html`
          <p>${title}</p>
          <p>${format(content.text)}</p>
      `
    }

  }

  // function title (pagetitle) {
  //   let { title, slug } = pagetitle

  //   if ('/' + slug === state.href) {
  //     return title;
  //   }

  // }

}

