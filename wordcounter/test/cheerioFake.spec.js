var cheerioFake = require('../src/cheerioFake'),
  nock = require('nock'),
  should = require('should'),
  expect = require('expect');

describe("cheerioFake", function() {
  describe("#getWordsJSON", function() {

    // verify that the getWordsJSON method exists
    it("exists as a public method on cheerioFake", function(done) {
      expect(typeof cheerioFake.getWordsJSON).toEqual('function');
      done();
    });


    // verify that the getWordsJSON method calls the correct URL
    it("should return the correct response", function(done) {

      nock('https://medium.com')
        .get('/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363')
        .reply(200, 'Hello from Medium');

      cheerioFake.getWordsJSON(function(error, response) {
        response.should.equal('Hello from Medium');
      });

      done();
    });
    /*
        it("should return the error if url bad", function(done) {

          nock('https://medium.com')
            .get('/')
            .replyWithError('something awful happened');

          cheerioFake.getWordsJSON(function(error, response) {
            response.should.equal('something awful happened');
          });

          done();


        });
    */



  });

});