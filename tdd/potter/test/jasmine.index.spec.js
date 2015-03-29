var kataPotter = require('../index');

describe("kataPotter", function() {

	it('BASE_PRICE should return 8', function() {
		var BASE_PRICE = 8;

		expect(BASE_PRICE).toEqual(8);
	});

	it('Should return the amount to be paid', function() {
		expect(kataPotter(8, 3)).toEqual(8 * 3);
	});
});