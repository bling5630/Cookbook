describe("FizzBuzz", function() {
	it("Throw FizzBuzz if number divisible 15", function() {
		expect(FizzBuzz(15)).toEqual("FizzBuzz");
	});
	it("Throw FizzBuzz if number divisible 15", function() {
		expect(FizzBuzz(30)).toEqual("FizzBuzz");
	});
	it("Throw FizzBuzz if number divisible 15", function() {
		expect(FizzBuzz(45)).toEqual("FizzBuzz");
	});
	it("Throw Fizz if number divisible 5", function() {
		expect(FizzBuzz(5)).toEqual("Fizz");
	});
	it("Throw Fizz if number divisible 5", function() {
		expect(FizzBuzz(25)).toEqual("Fizz");
	});
	it("Throw Fizz if number divisible 5", function() {
		expect(FizzBuzz(35)).toEqual("Fizz");
	});
	it("Throw Buzz if number divisible 3", function() {
		expect(FizzBuzz(3)).toEqual("Buzz");
	});
	it("Throw Buzz if number divisible 3", function() {
		expect(FizzBuzz(33)).toEqual("Buzz");
	});
	it("Throw Buzz if number divisible 3", function() {
		expect(FizzBuzz(63)).toEqual("Buzz");
	});
	it("Throw Mehh if number doesen't divisible 3, 5 or 15", function() {
		expect(FizzBuzz(1)).toEqual("Mehh");
	});
	it("Throw Mehh if number doesen't divisible 3, 5 or 15", function() {
		expect(FizzBuzz(11)).toEqual("Mehh");
	});
	it("Throw Mehh if number doesen't divisible 3, 5 or 15", function() {
		expect(FizzBuzz(1)).toEqual("Mehh");
	});
});