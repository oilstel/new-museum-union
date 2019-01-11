module.exports = store
module.exports = storeNew
var data_raw = require('../data')
var data_set = data_raw.children;
// console.log (data_set);

function store (state, emitter) {

  state.pages = data_set;

}

function storeNew (state, emitter) {
  // fetch('https://blur.website/cms/spad',function (newset) {
  //     // state.pages = newset;
  //     // emitter.emit('render')
  //     console.log(newset);
  // })

  fetch('https://blur.website/cms/spad').then(function(response) {
    response.json().then(function(data) {
      // console.log(data.children);
      return data.children;
    });
  })

}

