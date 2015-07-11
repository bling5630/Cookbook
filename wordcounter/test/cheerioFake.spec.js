var cheerioFake = require('../src/cheerioFake'),
  nock = require('nock'),
  cheerio = require("cheerio"),
  expect = require('expect');

describe("cheerioFake", function() {
  describe("#getWordsJSON", function() {

    // verify that the getWordsJSON method exists
    it("exists as a public method on cheerioFake", function() {
      expect(typeof cheerioFake.getWordsJSON).toEqual('function');
    });

    // use nock to verify that the getWordsJSON method calls the correct URL
    it("makes the correct http call to any site based on the parameters it's passed", function(done) {
      var x = nock('https://medium.com')
        .get('/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363')
        .reply(200, {
          _id: '1',
          username: 'xy'
        });

    });



  });
});


/*


    // an example of a test that fails
    xit("makes the correct http call to Flickr's API based on the parameters it's passed", function() {
      nock('http://api.flickr.com')
        .get('/some_url_that_will_not_get_called')
        .reply(200, {
          'some_key': 'some_value'
        });

      cheerioFake.getWordsJSON({
        id: 'someFlickrID'
      }, function(data) {
        expect(JSON.parse(data).some_key).toEqual('some_value');
      });
    });
*/