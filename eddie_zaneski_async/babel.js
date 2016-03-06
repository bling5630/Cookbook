var request = require('request');
// babel-node babel.js
function getQuote() {
  var quote;

  return new Promise(function(resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
      quote = body;

      resolve(quote);
    });
  });
}

async function main() {
  var quote = await getQuote();
  console.log(quote);
}

main();
console.log('Ron once said,');
/*
Ron once said,
["Turkey can never beat cow."]
*/
