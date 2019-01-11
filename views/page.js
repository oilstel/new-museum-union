var html = require('choo/html')
var format = require('../components/format')
var navigation = require('../components/navigation')
var dataStore = require('../stores/data')


module.exports = page

var title = 'Page'



function page (state, emit) {



    var testing = dataStore().then(function(data){

      var pages = data.children;

      return pages;


      // pages.map(function(page) {

      //     console.log(page.content.title);
      //     console.log(':',page.content.text);

      //     page.children.map(function(subpage) {
      //         console.log('>>',subpage.title);
      //         console.log(':::',subpage.content.text);
      //     })

      // })
      
    })

    return html`
    <body class="code lh-copy">
  
      <p>hell</p>
  
    </body>
    `


  // console.log(this_page);

  // return html`
  //   <body class="code lh-copy">

  //     <p>${this_page}</p>

  //   </body>
  // `



}

