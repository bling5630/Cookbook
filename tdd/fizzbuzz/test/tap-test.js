var test = require('tape'),
	tapSpec = require('tap-spec'),
	kataFizzBuzzCalclulator = require('../src/2fizzBuzz');

test("FizzBuzz", function(f) {
	f.plan(5);

	f.throws(function() {
		FizzBuzz();
	});

	f.equal(kataFizzBuzzCalclulator(15), "FizzBuzz");
	f.equal(kataFizzBuzzCalclulator(5), "Buzz");
	f.equal(kataFizzBuzzCalclulator(3), "Fizz");
	f.equal(kataFizzBuzzCalclulator(), "Mehh");

	f.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);


module.exports = kataFizzBuzzCalclulator;