var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js

describe('[LIONS]', function () {

  it('should get all lions', function (done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });

  it('should get a lion', function (done) {
    request(app)
      .get('/lions/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        expect(resp.body).to.be.an('object');
        done();
      })
  })

  it('should create a lion', function (done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil lions',
        gender: 'male'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, resp) {
        expect(resp.body).to.be.an('object');
        expect(resp.body.id).to.be.not.null;
        expect(resp.body.id).to.equal('1');
        done();
      })
    })
});


