'use strict';

var expect = require('chai').expect;
var _ = require('ramda');

describe('basic', function () {
	it.only('currying', function () {
		var add = _.curry(function (x, y) {
			return x + y;
		});

		var addOne = add(1);

		expect(addOne(2).to.equal(3));
	});
});
