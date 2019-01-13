var fetch = require('unfetch/polyfill')

module.exports = data_piece

function data_piece (state, emitter) {


    console.log('DATA')

    fetch('https://blur.website/cms/spad')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      // now in your views you'll be able to access
      // your content using `state.content`
      state.content = json

      var people = state.content;


      console.log('data_p',state.content.children[0])

      // trigger an app render
      emitter.emit(state.events.RENDER)
    })

    console.log('plugin',state.content)


    




}
