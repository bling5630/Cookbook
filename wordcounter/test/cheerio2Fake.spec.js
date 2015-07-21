var cheerioFake = require('../src/cheerio2Fake'),
  test = require('tape'),
  tapSpec = require('tap-spec'),
  nock = require('nock');


test('cheerioFake', function(c) {
  c.plan(2);
  c.equal(typeof cheerioFake, 'function', 'should be a function');

  nock('https://medium.com')
    .get('/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363')
    .reply(200, 'Hello from Medium');

  c.equal(cheerioFake, 'Hello from Medium', 'should be Hello from Medium');

  c.end();

});