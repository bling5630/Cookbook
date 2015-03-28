var test = require('tape'),
	kataFizzBuzzCalclulator = require('../src/2fizzBuzz');

test("FizzBuzz", function(f) {
	f.throws(function() {
		FizzBuzz();
	});

	f.equal(kataFizzBuzzCalclulator(15), "FizzBuzz");
	f.equal(kataFizzBuzzCalclulator(5), "Buzz");
	f.equal(kataFizzBuzzCalclulator(3), "Fizz");
	f.equal(kataFizzBuzzCalclulator(5), "Mehh");
	f.end();
});


module.exports = kataFizzBuzzCalclulator;