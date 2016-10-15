var fs = require('fs');

// sync
var file = fs.readFileSync('alma.txt');
console.log(file.toString());


// async

fs.readFile('sample.txt', function(err, file) {
  console.log(file.toString());
});

function getAlmaContentAndKorte(cb) {
  fs.readFile('alma.txt', function(err, file) {
    var output = '';
    output = file.toString();
    output = 'korte';
    return cb(err, output);
  });
}

getAlmaContentAndKorte(function(err, content) {
  console.log(content);
});
