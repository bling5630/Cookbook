var should = require('chai').should,
  expect = require('chai').expect,
  supertest = require('supertest'),
  app = supertest('http://localhost:3000');


describe("wordcounter", function() {

  it("#1 - should return a 200 response and Just saying!",
    function(done) {
      app.get('/')
        .set('Accept', 'application/text')
        .expect(200, done);
    });

  it("#2 - should return a 200 response and kitten.jpg",
    function(done) {
      app.get('/kitten.jpg')
        .set('Accept', 'application/jpg')
        .expect(200, done);
    });

  it("#3 - should return a 200 response and koala.jpg",
    function(done) {
      app.get('/koala.jpg')
        .set('Accept', 'application/jpg')
        .expect(200, done);
    });

  it("#4 - should return a 200 response and button",
    function(done) {
      app.get('/button.html')
        .set('Accept', 'application/html')
        .expect(200, done);
    });

  it("#5 - should return a 200 response and button and cancel",
    function(done) {
      app.get('/button_cancel.html')
        .set('Accept', 'application/html')
        .expect(200, done);
    });



  //end
});
