var fs = require('fs');

function countLetter(fileName, cb) {
  'use strict';
  fs.readFile(fileName, function(err, content) {
    if (err) {
      return cb(err);
    }
    cb(null, String(content).length);
  });
}

countLetter('text.txt', function(err, count) {
  console.log(count);
});
