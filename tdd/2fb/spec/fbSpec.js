describe('fizzBuzz', function() {

	it('should return Fizz multiplies of three', function() {
		var result = fizzBuzz.getResult(3);

		expect(result).toEqual("Fizz");
	});

	it('should return Buzz multiplies of five', function() {
		var result = fizzBuzz.getResult(5);

		expect(result).toEqual("Buzz");
	});

	it('should return fizzBuzz multiplies of three and five', function() {
		var result = fizzBuzz.getResult(15);

		expect(result).toEqual("fizzBuzz");
	});

	it('should return fizzBuzz non-multiplies of three and five', function() {
		var result = fizzBuzz.getResult(7);

		expect(result).toEqual("7");
	});
});