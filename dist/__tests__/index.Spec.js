"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
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
