var request = require('supertest');

var app = require('./getApp').getApp;

describe("GET/users", function() {
  it("respond with json", function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });



});
