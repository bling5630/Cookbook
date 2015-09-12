var _ = require('underscore');

var greet = function(name) {
	return 'hi: ' + name;
};

var exclaim = function(statement) {
	return statement.toUpperCase() + '!';
};

var welcome = _.compose(
	greet,
	exclaim
);

console.log(welcome('there'));  // -> hi: THERE!