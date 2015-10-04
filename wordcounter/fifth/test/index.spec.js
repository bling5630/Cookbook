var platform = require('../src/index'),
  nock = require('nock'),
  request = require('request');

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
        expect(body).toEqual('kitten.jpg');
        done();
      });
  });

  /*
  it("should respond with want!", function(done) {
    request('http://localhost:3000/want', function(err, res, body) {
      expect(body).toEqual('Do you want something?');
      done();
    });
  });
  it("should  respond with book!", function(done) {
    request('http://localhost:3000/book', function(err, res, body) {
      expect(body).toEqual('Read more buddy!');
      done();
    });
  });
  it("should respond with eat!", function(done) {
    request('http://localhost:3000/eat', function(err, res, body) {
      expect(body).toEqual('Which is your favorite dish?');
      done();
    });
  });
  it("should respond with ignore!", function(done) {
    request('http://localhost:3000/ignore', function(err, res, body) {
      expect(body).toEqual('Sorry, I am not your friend!');
      done();
    });
  });
*/



});
