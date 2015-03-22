var test = require('tape');

var FizzBuzz = require('../src/fizzBuzz');

test('FizzBuzz', function(f) {
	f.plan(4);

	[15, 30, 45, 60].forEach(function(d) {
		f.equal(FizzBuzz(d), 'FizzBuzz', "Throw FizzBuzz if the number is divisble w/ 15");
	});
});

test('FizzBuzz', function(f) {
	f.plan(4);
	[3, 6, 9, 12].forEach(function(d) {
		f.equal(FizzBuzz(d), 'Buzz', "Throw Buzz if the number is divisble w/ 3");
	});
});


test('FizzBuzz', function(f) {
	f.plan(4);
	[5, 10, 20, 25].forEach(function(d) {
		f.equal(FizzBuzz(d), 'Fizz', "Throw Fizz if the number is divisble w/ 5");
	});
});