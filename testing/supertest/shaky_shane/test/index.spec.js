var assert = require("chai").assert;
var http = require("http");
var server = require("../src/index");

it("should return a 200 response", function(done) {

  var app = server();

  http.get("http://localhost:8000", function(res) {
    assert.equal(res.statusCode, 200);
    done();
  });
});
