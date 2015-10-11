var should = require('chai').should,
  expect = require('chai').expect,
  supertest = require('supertest'),
  app = supertest('http://localhost:3000');


describe("User", function() {
  var location1;
  var location2;
  var location3;
  var locations = [location1, location2, location3];

  before(function(done) {

    app.post('/locations')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        addressStreet: "111 Main St",
        addressCity: "Portland",
        addressState: "OR",
        addressZip: "97209",
        userId: 1
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        location1 = res.body;
      });


    app.post('/locations')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        addressStreet: "222 Main St",
        addressCity: "Portland",
        addressState: "OR",
        addressZip: "97209",
        userId: 2
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        location2 = res.body;
      });

    app.post('/locations')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        addressStreet: "333 Main St",
        addressCity: "Portland",
        addressState: "OR",
        addressZip: "97209",
        userId: 3
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        location3 = res.body;
        done();
      });
  });


  it("#1 - should return a 200 response and testing the user/1 route",
    function(
      done) {
      app.get('/users/1')
        .set('Accept', 'application/json')
        .expect(200, done);
    });


  it("#2 - should return a 200 response and testing properties",
    function(
      done) {
      app.get('/users/1')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property("id");
          expect(res.body).to.not.equal(null);
          expect(res.body).to.have.property("name");
          expect(res.body.name).to.not
            .equal(null);
          expect(res.body).to.have.property("size");
          expect(res.body).to.not.equal(null);
          expect(res.body).to.have.property("weight");
          expect(res.body).to.not.equal(null);
          expect(res.body).to.have.property("fragility");
          expect(res.body).to.not.equal(null);
          done();
        });
    });

  it("#3 - should be updated with new name", function(done) {
    app.put('/users/1')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        id: 1,
        name: "Little Box",
        size: "Small",
        weight: "Light",
        fragility: "Yes"
      })
      .expect(200)
      .end(function(err, res) {
        expect(res.body.id).to.equal(1);
        expect(res.body.name).to.equal("Little Box");
        expect(res.body.size).to.equal("Small");
        expect(res.body.weight).to.equal("Light");
        expect(res.body.fragility).to.equal("Yes");
        done();
      });
  });

  it('#4 - should access their own locations', function(done) {
    app.get('/users/1/location')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        userId: 1
      })
      .expect(200)
      .end(function(err, res) {
        expect(res.body.userId).to.equal(1);
        expect(res.body.addressCity).to.equal("Portland");
        done();
      });
  });

  it("#5 - should not be able to acces other users locations", function() {
    app.get('/users/2/location')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        userId: 1,
      })
      .expect(401)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.error.text).to.equal("Unauthorized");
        //done(); done is missed as an argument in the function
      });
  });


});
