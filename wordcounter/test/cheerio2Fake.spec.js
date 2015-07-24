var cheerioFake = require('../src/cheerio2Fake'),
  request = require("request"),
  test = require('tape'),
  tapSpec = require('tap-spec'),
  nock = require('nock');


test('module exist', function(c) {
  c.plan(1);

  c.equal(typeof cheerioFake, 'object', 'cheerioFake is an object');

  c.end();

});

test('module works', function(c) {
  c.plan(3);

  nock('https://medium.com')
    .get('/life-at-confetti')
    .reply(200, 'Hello from Medium');

  var scope = nock('https://medium.com')
    .get('/life-at-confetti')
    .reply(200, 'Hello from Medium');

  request('https://medium.com/life-at-confetti', function(err) {
    c.error(err, 'no error');

    request('https://medium.com/life-at-confetti', function(err) {
      c.error(err, 'no error');
      c.ok(scope.isDone(), 'request satisfied');
      c.end();
    });
  });



});