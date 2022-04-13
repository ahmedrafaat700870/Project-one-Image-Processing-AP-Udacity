import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('start testing main middleware', () => {
  it('test localhost:5000/root endPoint', () => {
    const res = request.get('localhost:5000/resize').expect(404);
    res.expect(404);
  });
  it('test localhost:5000/root/resize endPoint', () => {
    const res = request.get('localhost:5000/resize');
    res.expect(404);
  });
});
describe('start testing Lose of Parames in middlewares ', () => {
  it('test localhost:5000/root/resize?name=done endpoint ', async () => {
    const res = request.get('localhost:5000/root/resize?name=done');
    res.expect(400);
  });
  it('test localhost:5000/root/resize?name=done&widht=199 endpoint', async () => {
    const res = request.get('localhost:5000/root/resize?name=done');
    res.expect(404);
  });
});
describe('start testing Img not Exit in img Folder', () => {
  it('tset localhost:5000/root/resize?name=done&widht=199&height=200 endPoint', () => {
    const res = request.get(
      'localhost:5000/root/resize?name=done&widht=199&height=200'
    );
    res.expect(401);
  });
});

describe('start test if input data is true and img are resized befor', () => {
  it('test localhost:5000/root/resize?name=coco_ot&widht=199&height=200 endpoint', () => {
    const res = request.get(
      'localhost:5000/root/resize?name=coco_ot&widht=199&height=200'
    );
    res.expect(402);
  });
});
describe('start test if input data is true and img are not resized before ', () => {
  it('test localhost:5000/root/resize?name=io_ot&widht=199&height=200 endPoint', async () => {
    const res = request.get(
      'localhost:5000/root/resize?name=io_ot&widht=199&height=200'
    );
    res.expect(200);
  });
});
