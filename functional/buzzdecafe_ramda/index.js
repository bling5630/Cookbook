var _ = require('lodash'),
	R = require('ramda');

// Underscore/Lodash style:
var validUsersNamedBuzz = function(users) {
	return _.filter(users, function(user) {
		return user.name === 'Buzz' && _.isEmpty(user.errors);
	});
};

// Ramda style:
var validUsersNamedBuzz = R.filter(R.where({
	name: 'Buzz',
	errors: R.isEmpty
}));

// `prop` takes two arguments. If I just give it one, I get a function back
var moo = R.prop('moo');
// when I call that function with one argument, I get the result.
var value = moo({
	moo: 'cow'
}); // => 'cow'

// take an object with an `amount` property
// add one to it
// find its remainder when divided by 7
var amtAdd1Mod7 = R.compose(R.moduloBy(7), R.add(1), R.prop('amount'));

// we can use that as is:
amtAdd1Mod7({
	amount: 17
}); // => 4
amtAdd1Mod7({
	amount: 987
}); // => 1
amtAdd1Mod7({
	amount: 68
}); // => 6
// etc. 

// But we can also use our composed function on a list of objects, e.g. to `map`:
var amountObjects = [{
	amount: 903
}, {
	amount: 2875654
}, {
	amount: 6
}];
R.map(amtAdd1Mod7, amountObjects); // => [1, 6, 0]

// of course, `map` is also curried, so you can generate a new function 
// using `amtAdd1Mod7` that will wait for a list of "amountObjects" to 
// get passed in:
var amountsToValue = map(amtAdd1Mod7);
amountsToValue(amountObjects); // => [1, 6, 0]