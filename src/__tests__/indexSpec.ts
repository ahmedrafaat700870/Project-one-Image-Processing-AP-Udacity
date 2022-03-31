import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('start my app ', () => {
  it('test start / endpoint', () => {
    const res = request.get('/');
    res.expect(404);
  });
  it('test Error /bla endpoint', () => {
    const res = request.get('/bla');
    res.expect(404);
  });
});
