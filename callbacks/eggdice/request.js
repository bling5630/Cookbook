var request = require('request');

request('http://google.com', function(err, body) {
  console.log('body');    
});
console.log('alma');
