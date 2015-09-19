var R = require('ramda');

var source = [4, 8, 15];

var dest = R.append(16, source);

console.log(dest);
// [4, 8, 15, 16]

console.log(source);
// [4, 8, 15]