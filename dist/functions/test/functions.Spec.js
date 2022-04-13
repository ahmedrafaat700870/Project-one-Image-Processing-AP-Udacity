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
const InputFile_1 = __importDefault(require("../InputFile"));
const outputfile_1 = __importDefault(require("../outputfile"));
const ressizeImg_1 = __importDefault(require("../ressizeImg"));
const path_1 = __importDefault(require("path"));
describe(`test defination functions`, () => {
    it(`input function`, () => {
        expect(InputFile_1.default).toBeDefined();
    });
    it(`OutPutFile function`, () => {
        expect(outputfile_1.default).toBeDefined();
    });
    it(`ResizeImg function`, () => {
        expect(ressizeImg_1.default).toBeDefined();
    });
});
describe('Start test function logic', () => {
    let inp;
    beforeAll(() => {
        inp = (0, InputFile_1.default)('coco_ot');
    });
    it('test input function', () => {
        const filepath = path_1.default.resolve(__dirname, '../../img/', 'input.jpg');
        expect((0, InputFile_1.default)('input')).toBe(filepath);
    });
    it('test OutPutFile function', () => {
        const width = 200;
        const height = 200;
        const filepath = path_1.default.resolve(__dirname, '../../out/', `output-${width}-${height}.jpg`);
        expect((0, outputfile_1.default)('output', width, height)).toBe(`${filepath}`);
    });
    it('test ResizeImg function', () => __awaiter(void 0, void 0, void 0, function* () {
        const output = ressizeImg_1.default;
        const resize = yield (0, ressizeImg_1.default)(inp, output, `200`, `200`);
        expect(resize.allowHalfOpen).toBeTrue();
    }));
});
