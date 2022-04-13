"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const FoulderInput = '../../dist/img/';
const input = (name_img) => {
    const file = path_1.default.resolve(__dirname, FoulderInput + name_img + '.jpg');
    return file;
};
exports.default = input;
