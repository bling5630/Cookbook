var nock = require('nock'),
	expect = require('expect'),
	productFeeder = require('../index');

describe("productFeeder", function() {
	describe("#stuff", function() {

		// verify that the stuff method exists
		it("exists as a public method on productFeeder", function() {
			expect(typeof productFeeder.stuff).toEqual('function');
		});

		// use nock to verify that the stuff method calls the correct URL
		it("makes the correct http call to productFeeder's API based on the parameters it's passed", function() {
			nock('http://localhost:3000')
				.get('/api/product/15')
				.reply(200, {
					some_key: 'some_value'
				});

			productFeeder.stuff({
				id: '15'
			}, function(data) {
				expect(JSON.parse(data).some_key).toEqual('some_value');
			});

		});
		
		it("makes the correct http call to productFeeder's API based on the parameters it's passed", function() {
			nock('http://localhost:3000')
				.get('/api/product/21')
				.reply(200, {
					some_key: 14
				});

			productFeeder.stuff({
				id: '21'
			}, function(data) {
				expect(JSON.parse(data).some_key).toEqual(123);
			});

		});

	});
});