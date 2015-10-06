var request = require('supertest');

//var app = require('./postApp').postApp;

describe("Posting is easy to test with supertest", function (){

  it("posts a new user to /users", function(done){
    var user = { username : 'marcus', email : 'marcus@marcus.com'};

    request("http://localhost:3000")
      .post("/users")
      .send(user)
      .expect(200)
      .expect("marcus is stored", done);
  });
});
