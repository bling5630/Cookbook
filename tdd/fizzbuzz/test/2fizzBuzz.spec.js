var test = require('tape'),
	kataFizzBuzzCalclulator = require('../src/2fizzBuzz');

test("FizzBuzz", function(f) {
	f.plan(19);

	f.throws(function() {
		FizzBuzz();
	});

	f.equal(kataFizzBuzzCalclulator(15), "FizzBuzz");
	f.equal(kataFizzBuzzCalclulator(150), "FizzBuzz");
	f.equal(kataFizzBuzzCalclulator(45), "FizzBuzz");
	f.equal(kataFizzBuzzCalclulator(105), "FizzBuzz");
	f.equal(kataFizzBuzzCalclulator(30), "FizzBuzz");
	f.equal(kataFizzBuzzCalclulator(5), "Buzz");
	f.equal(kataFizzBuzzCalclulator(25), "Buzz");
	f.equal(kataFizzBuzzCalclulator(55), "Buzz");
	f.equal(kataFizzBuzzCalclulator(95), "Buzz");
	f.equal(kataFizzBuzzCalclulator(85), "Buzz");
	f.equal(kataFizzBuzzCalclulator(3), "Fizz");
	f.equal(kataFizzBuzzCalclulator(6), "Fizz");
	f.equal(kataFizzBuzzCalclulator(33), "Fizz");
	f.equal(kataFizzBuzzCalclulator(18), "Fizz");
	f.equal(kataFizzBuzzCalclulator(81), "Fizz");
	f.equal(kataFizzBuzzCalclulator("cdc"), "Mehh");
	f.equal(kataFizzBuzzCalclulator("sgfsgh"), "Mehh");
	f.equal(kataFizzBuzzCalclulator("dsfas"), "Mehh");
	f.end();
});

// 'gdgg3vdfds'

module.exports = kataFizzBuzzCalclulator;