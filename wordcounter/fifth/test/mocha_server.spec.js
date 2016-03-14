var should = require('chai').should,
  expect = require('chai').expect,
  supertest = require('supertest'),
  app = supertest('http://localhost:3000');

// node src/server.js
// mocha test/mocha_server.spec.js --watch --colors

describe("wordcounter", function() {

  it("#1 - should return a 200 response and Just saying!",
    function(done) {
      app.get('/')
        .set('Accept', 'application/text')
        .expect(200, done);
    });

  it("#2 - should return a 200 response and Here you go!",
    function(done) {
      app.get('/result')
        .set('Accept', 'application/text')
        .expect(200, done);
    });

  it("#3 - should return a 200 response and unicorn.jpg",
    function(done) {
      app.get('/unicorn.png')
        .set('Accept', 'application/png')
        .expect(200, done);
    });

  it("#4 - should return a 200 response and show add url",
    function(done) {
      app.get('/add_url.html')
        .set('Accept', 'application/html')
        .expect(200, done);
    });



  //end
});
