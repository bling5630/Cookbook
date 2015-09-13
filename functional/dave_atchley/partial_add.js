var _ = require('ramda');

function add3(a, b, c) {
	return a + b + c;
}

console.log(add3(2, 4, 8));

var add6 = add3.bind(this, 2, 4);

console.log(add6(8));

var add6_6 = _.curry(add3)(2)(4);

console.log(add6_6(8));