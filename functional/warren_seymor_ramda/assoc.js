var _ = require('lodash');
var R = require('ramda');

var source = {foo: 'bar'};

var dest = R.assoc('baz', 'qux', source);

console.log(dest);
// { foo: 'bar', baz: 'qux' }

console.log(source);
// { foo: 'bar' }