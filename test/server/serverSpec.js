var app = require('../../server')
  , request = require('supertest');
;

describe('server', function () {
  it('starts', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done)
    ;
  });
});