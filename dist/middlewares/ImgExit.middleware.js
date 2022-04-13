"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// interface
const Imgdetails_interface_1 = __importDefault(require("../interfaces/Imgdetails.interface"));
const InputOutput_interface_1 = __importDefault(require("../interfaces/InputOutput.interface"));
// functions
const InputFile_1 = __importDefault(require("../functions/InputFile"));
const CheckImgExit = (req, res, next) => {
    InputOutput_interface_1.default.inputfile = (0, InputFile_1.default)(Imgdetails_interface_1.default.Name);
    const CheckImgExit = fs_1.default.promises.readFile(InputOutput_interface_1.default.inputfile);
    CheckImgExit.then((info) => {
        next();
    }).catch((err) => res.status(401).json('ohh this img not Exit'));
};
exports.default = CheckImgExit;
