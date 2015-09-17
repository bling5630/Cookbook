var expect = require('chai').expect;
var _ = require('ramda');


describe('basic', () => {
	it.only('currying', () => {
		var add = _.curry((x, y) => {
			return x + y;
		});

		var addOne = add(1);

		expect(addOne(2).to.equal(3));
	});
});