var makeRequest = require('../src/index'),
	should = require('should'),
	nock = require('nock');

describe('makeRequest', function() {

	it('should return the correct response', function(done) {

		nock('http://www.medium.com')
			.get('/')
			.reply(200, 'Hello from Medium!');

		makeRequest(function(error, response) {
			response.should.equal('Hello from Medium!');
			done();
		});

	});

});