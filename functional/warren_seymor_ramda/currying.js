var _ = require('ramda');

var numbers = [4, 8, 15, 16, 23, 42];

var add = function(a, b) {
	return a + b;
};

console.log(add(4, 5)); // => 9

var add_curried = _.curry(add);

var addFourTo = add_curried(4);

console.log(addFourTo(5)); // => 9

console.log(add_curried(4)(5)); // => 9
console.log(add_curried(4, 5)); // => 9

var times = _.curry(function(a, b) {
	return a * b;
});

console.log(_.map(times(2), numbers));

// => [8, 16, 30, 32, 46, 84]

var mapTimes3 = _.map(times(3));

console.log(mapTimes3(numbers));
