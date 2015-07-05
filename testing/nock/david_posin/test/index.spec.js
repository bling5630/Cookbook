var index = require('../src/index.js'),
	nock = require('nock');

describe('What is the your name response', function() {
	it('test a good name', function(done) {
		nock('localhost:3000')
			.get('/')
			.reply(200);
	});
});