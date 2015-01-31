describe('fizzbuzz', function() {

	it('should return fizz when arg is divisible by three', function() {
		expect(fizzbuzz(3)).toEqual('fizz');
	});

	it('should return fizz when arg is divisible by five', function() {
		expect(fizzbuzz(5)).toEqual('buzz');
	});

	it('should return fizz when arg is divisible by three and five', function() {
		expect(fizzbuzz(15)).toEqual('fizzbuzz');
	});

	it('should return fizz when arg not divisible by three or five', function() {
		expect(fizzbuzz(8)).toEqual('8');
	});
});