var cheerioFake = require('../src/cheerio2Fake'),
  tapSpec = require('tap-spec'),
  request = require("request"),
  cheerio = require("cheerio"),
  test = require('tape'),
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
    c.error(err, 'error');

    request('https://medium.com/life-at-confetti', function(err) {
      c.error(err, 'error');
      c.ok(scope.isDone(), 'request satisfied');
      c.end();
    });
  });
});


test('filter check', function(c) {
  c.plan(1);

  nock('https://medium.com')
    .get('/life-at-confetti')
    .reply(200, 'Hello from Medium');

  request('https://medium.com/life-at-confetti', function(error, response, body) {
    if (error) {
      console.log(error);
      return;
    }
    var $page = cheerio.load(body);
    var article = $page('body').text();

    c.equal(typeof article, 'string', 'type of article is a string');
  });
});