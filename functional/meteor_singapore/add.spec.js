var expect = require('chai').expect;
var should = require('should');
var _ = require('ramda');
var add = require('./add');


describe('add', function() {
	it.only('currying', function() {
		var add = _.curry(function(x, y) {
			return x + y;
		});

		var addOne = add(1);

		should(addOne(2).to.equal(3));
	});
});