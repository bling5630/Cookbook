var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);

// older way

var snakeCase = function(word) {
	return word.toLowerCase().replace(/\s+/ig, '_');
};

var toUpperCase = function(x) {
	return x.toUpperCase();
};

var head = function(x) {
	return x[0];
};

// pointfree way

var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

console.log(snakeCase('BPVBPDFVBPDF'));

//not pointfree because we mention the data: name
var initials = function(name) {
	return name.split(' ').map(compose(toUpperCase, head)).join('. ');
};

//pointfree
var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '));

console.log(initials("hunter stockton thompson"));
// 'H. S. T'