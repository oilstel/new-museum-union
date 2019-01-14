var html = require('choo/html')
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})


module.exports = format

function format (str) {
  str = str || ''
  return rawCreateElement(md.render(str))
}

function rawCreateElement (tag) {
  if (typeof window !== 'undefined') {
    return browser()
  } else {
    return server()
  }

  function browser () {
    var el = html`<div></div>`
    el.innerHTML = tag
    return toArray(el.childNodes)
  }

  function server () {
    var wrapper = String(tag)
    wrapper.__encoded = true
    return wrapper
  }
}

function toArray (arr) {
  return Array.isArray(arr) ? arr : [].slice.call(arr)
}
