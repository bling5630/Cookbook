var test = require('tape');

var kataFizzBuzzCalclulator = require('../src/2fizzBuzz');

test("FizzBuzz", function(f) {
	f.throws(function() {
		FizzBuzz();
	});

	f.equal(kataFizzBuzzCalclulator(15), "FizzBuzz");
	f.end();
});


module.exports = kataFizzBuzzCalclulator;