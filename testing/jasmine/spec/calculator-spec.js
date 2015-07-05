var calculator = require('../calculator');

describe('multipliction', function() {
	it("should multiply 323 and 52", function() {
		var product = calculator.multiply(323, 52);
		expect(product).toBe(16796);
	});
	it("should multiply 3 and 5", function() {
		var product = calculator.multiply(3, 5);
		expect(product).toBe(15);
	});
});