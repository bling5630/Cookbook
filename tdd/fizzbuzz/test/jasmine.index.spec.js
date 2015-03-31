var kataFizzBuzzCalclulator = require('../src/2fizzBuzz.js');

describe("kataFizzBuzzCalclulator", function() {
	it("Throw FizzBuzz if number divisible 15", function() {
		expect(kataFizzBuzzCalclulator(15)).toEqual("FizzBuzz");
	});
	it("Throw FizzBuzz if number divisible 15", function() {
		expect(kataFizzBuzzCalclulator(30)).toEqual("FizzBuzz");
	});
	it("Throw FizzBuzz if number divisible 15", function() {
		expect(kataFizzBuzzCalclulator(45)).toEqual("FizzBuzz");
	});
	it("Throw Fizz if number divisible 5", function() {
		expect(kataFizzBuzzCalclulator(5)).toEqual("Buzz");
	});
	it("Throw Fizz if number divisible 5", function() {
		expect(kataFizzBuzzCalclulator(25)).toEqual("Buzz");
	});
	it("Throw Fizz if number divisible 5", function() {
		expect(kataFizzBuzzCalclulator(35)).toEqual("Buzz");
	});
	it("Throw Buzz if number divisible 3", function() {
		expect(kataFizzBuzzCalclulator(3)).toEqual("Fizz");
	});
	it("Throw Buzz if number divisible 3", function() {
		expect(kataFizzBuzzCalclulator(33)).toEqual("Fizz");
	});
	it("Throw Buzz if number divisible 3", function() {
		expect(kataFizzBuzzCalclulator(63)).toEqual("Fizz");
	});
	it("Throw Mehh if number doesen't divisible 3, 5 or 15", function() {
		expect(kataFizzBuzzCalclulator(1)).toEqual("Mehh");
	});
	it("Throw Mehh if number doesen't divisible 3, 5 or 15", function() {
		expect(kataFizzBuzzCalclulator(11)).toEqual("Mehh");
	});
	it("Throw Mehh if number doesen't divisible 3, 5 or 15", function() {
		expect(kataFizzBuzzCalclulator(1)).toEqual("Mehh");
	});
});