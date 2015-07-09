var test = require('tape'),
	kataFizzBuzzCalclulator = require('../src/2fizzBuzz');

test("FizzBuzz", function(f) {
	f.plan(21);

	f.throws(function() {
		kataFizzBuzzCalclulator();
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
	f.equal(kataFizzBuzzCalclulator(13), "**Magic_Fizz**");
	f.equal(kataFizzBuzzCalclulator(31), "**Magic_Fizz**");
	f.equal(kataFizzBuzzCalclulator(37), "**Magic_Fizz**");
	f.equal(kataFizzBuzzCalclulator(73), "**Magic_Fizz**");
	f.equal(kataFizzBuzzCalclulator(103), "**Magic_Fizz**");
	//f.equal(kataFizzBuzzCalclulator("cdc"), "Mehh");
	//f.equal(kataFizzBuzzCalclulator("sgfsgh"), "Mehh");
	//f.equal(kataFizzBuzzCalclulator("dsfas"), "Mehh");
	//f.equal(kataFizzBuzzCalclulator("gdgg3vdfds"), "Mehh");
	f.end();
});

//module.exports = kataFizzBuzzCalclulator;