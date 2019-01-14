var html = require('choo/html')

module.exports = navigation

function navigation() {
    // if (state.content) {
    //     console.log(state.content)
    //     const pages = state.content.children // init data into pages const
        var nav_content = pages.map((page) => { // Get the page nav
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
    // }
}