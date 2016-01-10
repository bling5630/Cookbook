var tool = require('./append');

console.log(tool('more', ['1', 'test']));
console.log(tool('more', []));
console.log(tool(['tests'], ['write', 'cherry']));

console.log(tool('tests', ['write', 'more']));
console.log(tool('tests', []));
console.log(tool(['tests'], ['write', 'more']));
