var kataPotter = require('../index');

describe("kataPotter", function() {

	it('Should return the amount to be paid', function() {
		expect(kataPotter(8, 3)).toEqual(8 * 3);
	});
});