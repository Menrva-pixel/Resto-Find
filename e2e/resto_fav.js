/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
const request = require('supertest');
const chai = require('chai');
const app = require('../app');

const expect = chai.expect;

describe('Integration Test', () => {
  describe('POST /restaurants/:id/like', () => {
    it('should like a restaurant', (done) => {
      request(app)
        .post('/restaurants/1/like')
        .expect(200)
        .end((err, res) => {
          expect(res.body.id).to.equal(1);
          expect(res.body.likes).to.equal(1);
          done();
        });
    });
  });

  describe('POST /restaurants/:id/unlike', () => {
    it('should unlike a restaurant', (done) => {
      request(app)
        .post('/restaurants/1/unlike')
        .expect(200)
        .end((err, res) => {
          expect(res.body.id).to.equal(1);
          expect(res.body.likes).to.equal(0);
          done();
        });
    });
  });
});
