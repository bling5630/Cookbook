var curry_2 = require('./curryTwo');
var _ = require('ramda');

module.exports = curry_2(function append(el, list) {
    return _.concat(list, [el]);
});

//@example

var tool = require('./append');

/*
console.log(tool('more', ['1', 'test']));
console.log(tool('more', []));
console.log(tool(['tests'], ['write', 'cherry']));

console.log(tool('tests', ['write', 'more']));
console.log(tool('tests', []));
console.log(tool(['tests'], ['write', 'more']));
*/
