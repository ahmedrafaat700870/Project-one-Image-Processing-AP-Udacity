"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
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
    it('test localhost:5000/root/resize?name=done endpoint ', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = request.get('localhost:5000/root/resize?name=done');
        res.expect(400);
    }));
    it('test localhost:5000/root/resize?name=done&widht=199 endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = request.get('localhost:5000/root/resize?name=done');
        res.expect(404);
    }));
});
describe('start testing Img not Exit in img Folder', () => {
    it('tset localhost:5000/root/resize?name=done&widht=199&height=200 endPoint', () => {
        const res = request.get('localhost:5000/root/resize?name=done&widht=199&height=200');
        res.expect(401);
    });
});
describe('start test if input data is true and img are resized befor', () => {
    it('test localhost:5000/root/resize?name=coco_ot&widht=199&height=200 endpoint', () => {
        const res = request.get('localhost:5000/root/resize?name=coco_ot&widht=199&height=200');
        res.expect(402);
    });
});
describe('start test if input data is true and img are not resized before ', () => {
    it('test localhost:5000/root/resize?name=io_ot&widht=199&height=200 endPoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = request.get('localhost:5000/root/resize?name=io_ot&widht=199&height=200');
        res.expect(200);
    }));
});
