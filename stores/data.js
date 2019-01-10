module.exports = store
var data_raw = require('../data')
var data_set = data_raw.children;
console.log (data_set);

function store (state, emitter) {

  state.pages = data_set;

}
