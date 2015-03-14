describe("FizzBuzz", function() {
	it("It should return FizzBuzz if the number divisble 15", function() {
		expect(FizzBuzz(15)).toEqual("FizzBuzz");
	});
	it("It should return FizzBuzz if the number divisble 15", function() {
		expect(FizzBuzz(30)).toEqual("FizzBuzz");
	});
	it("It should return FizzBuzz if the number divisble 15", function() {
		expect(FizzBuzz(45)).toEqual("FizzBuzz");
	});
	it("It should return Fizz if the number divisble 5", function() {
		expect(FizzBuzz(5)).toEqual("Fizz");
	});
	it("It should return Fizz if the number divisble 5", function() {
		expect(FizzBuzz(10)).toEqual("Fizz");
	});
	it("It should return Fizz if the number divisble 5", function() {
		expect(FizzBuzz(25)).toEqual("Fizz");
	});
	it("It should return Fizz if the number divisble 3", function() {
		expect(FizzBuzz(3)).toEqual("Buzz");
	});
	it("It should return Fizz if the number divisble 3", function() {
		expect(FizzBuzz(6)).toEqual("Buzz");
	});
	it("It should return Fizz if the number divisble 3", function() {
		expect(FizzBuzz(9)).toEqual("Buzz");
	});
	it("It should return Mehh if the number doesn't divisble 3,5 or 15", function() {
		expect(FizzBuzz(61)).toEqual("Mehh");
	});
	it("It should return Mehh if the number doesn't divisble 3,5 or 15", function() {
		expect(FizzBuzz(73)).toEqual("Mehh");
	});
	it("It should return Mehh if the number doesn't divisble 3,5 or 15", function() {
		expect(FizzBuzz(29)).toEqual("Mehh");
	});

});