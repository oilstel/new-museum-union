var html = require('choo/html')
var format = require('../components/format')
// var Component = require('choo/component')

module.exports = function navigation (navigation) {
    let { title, slug } = navigation

    return html`
      <a href="${slug}">${title}</a><br />
    `
  }