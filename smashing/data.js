var data = require('./2search');
var fs = require('fs');

fs.appendFile('message.txt', './2search', function (err) {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});