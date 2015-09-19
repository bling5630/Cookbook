var _ = require('lodash');
var R = require('ramda');

// lodash way

var source = {
	foo: 'bar'
};

var dest = _.extend(source, {
	baz: 'qux'
});

console.log(dest);
// { foo: 'bar', baz: 'qux' }

console.log(source);
// { foo: 'bar', baz: 'qux' }

// Returns merged object and mutates source

// ramda way

var source = {
	foo: 'bar'
};

var dest = R.merge(source, {
	baz: 'qux'
});

console.log(dest);
// { foo: 'bar', baz: 'qux' }

console.log(source);
// { foo: 'bar'}

// Does not mutate source