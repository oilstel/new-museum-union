var html = require('choo/html')
var format = require('../components/format')

module.exports = function page (page) {
    let { title, content, slug } = page

    console.log(title)



      return html`
          <p>${title}</p>
          <p>${format(content)}</p>
      `


  }