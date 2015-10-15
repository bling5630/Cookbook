var fs = require('fs');

// sync
var file = fs.readFileSync('alma');
console.log(file.toString());


// async

fs.readFile('alma', function(err, file) {
  console.log(file.toString());
});

function getAlmaContentAndKorte(cb) {
  fs.readFile('alma', function(err, file) {
    var output = '';
    output = file.toString();
    output = 'korte';
    return cb(err, output);
  });
}

getAlmaContentAndKorte(function(err, content) {
  console.log(content);
});
