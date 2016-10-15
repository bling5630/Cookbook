var fs = require('fs');

function readTXT(filename, cb) {
  fs.readFile('./' + filename + '.txt',
    function(err, data) {
      cb(err, data.toString());
    });
}

readTXT('sample', function(err, data) {
  console.log(data);
});

setTimeout(function() {
  console.log("end2");
}, 50);

setTimeout(function() {
  readTXT('alma', function(err, data) {
    console.log(data);
  });
}, 3000);

console.log('end1');
