var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello dreamz', function(done) {
    request(app).get('/').expect('hello dreamz', done);
  });
});


