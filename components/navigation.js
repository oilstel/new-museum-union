var html = require('choo/html')
// var Component = require('choo/component') I did install this package

module.exports = navigation

function navigation (navigation) {
    let { title, slug } = navigation

    return html`
        <a href="${slug}">${title}</a><br />
    `
}