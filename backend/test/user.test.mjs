import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js'; // Ensure this path is correct

describe('GET /api/users', () => {
  it('should return a 200 status and has test ', (done) => {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.an('array').that.deep.equals([{"id":0,"email":"test@test.com"}]);
        done();
      });
  });
});
