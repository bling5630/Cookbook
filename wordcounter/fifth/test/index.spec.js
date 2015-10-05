var supertest = require('supertest'),
  platform = require('../src/index'),
  request = require('request'),
  should = require('should');

var app = require('../src/index').index;

describe("platform", function() {
  it("should respond with just sayin!", function(done) {
    request('http://localhost:3000',
      function(err, res, body) {
        expect(body).toEqual('Just sayin!');
        done();
      });
  });


  it("should respond with a cute kitten", function(done) {

    request('http://localhost:3000/kitten.jpg',
      function(err, res,
        body) {
        expect(typeof body).toEqual('string');
        done();
      });
  });



});

describe("GET/kitten.jpg", function() {

  it("respond with kitten.jpg", function(done) {
    request(app)
      .get('/kitten.jpg')
      .set('Accept', 'application/jpg')
      .expect('Content-Type', /jpg/)
      .expect(200, done);
  });



});
