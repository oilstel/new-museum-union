module.exports = dataStore
const url = 'https://blur.website/cms/spad'

function dataStore (state, emitter) {
  return fetch(url).then(function(response){
      var data = response.json();
      return data;
  });
}
