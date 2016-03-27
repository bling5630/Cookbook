var fsp = require('fs-promise');

var promise = fsp.readFile('text.txt');

promise.then(function(content) {
  console.log(String(content).length);
}).catch(function() {
  console.log('baj van');
});

// promise nodeschool
// async await
