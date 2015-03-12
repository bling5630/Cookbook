describe("FizzBuzz", function() {
	it("Should return Fizz if it is divisible by 3 or if it has a 3 in it", function() {
		expect(FizzBuzz(3)).toEqual("Fizz");
	});
	it("Should return Buzz if it is divisible by 5 or if it has a 5 in it", function() {
		expect(FizzBuzz(5)).toEqual("Buzz");
	});
	it("Should return FizzBuzz if it is divisible by 5 and 3 or if it has a 15 in it", function() {
		expect(FizzBuzz(15)).toEqual("FizzBuzz");
	});
	it("Should return FizzBuzz if it is not divisible by 5 or 3 or 15", function() {
		expect(FizzBuzz(20)).toEqual("Buzz");
	});
});