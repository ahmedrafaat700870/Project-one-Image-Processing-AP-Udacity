"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const FoulderOutput = '../../dist/out/';
const OutPutFile = (name, Height, Width) => {
    return path_1.default.resolve(__dirname, FoulderOutput + name + '-' + Height + '-' + Width + '.jpg');
};
exports.default = OutPutFile;
