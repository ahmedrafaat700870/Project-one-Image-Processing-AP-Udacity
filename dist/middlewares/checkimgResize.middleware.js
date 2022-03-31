"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// interface
const InputOutput_interface_1 = __importDefault(require("../interfaces/InputOutput.interface"));
const Imgdetails_interface_1 = __importDefault(require("../interfaces/Imgdetails.interface"));
//functions
const outputfile_1 = __importDefault(require("../functions/outputfile"));
const CheckImgResize = (req, res, next) => {
    InputOutput_interface_1.default.OupFoulder = (0, outputfile_1.default)(Imgdetails_interface_1.default.Name, Imgdetails_interface_1.default.Height, Imgdetails_interface_1.default.Width);
    const check = fs_1.default.promises.readFile(InputOutput_interface_1.default.OupFoulder);
    check
        .then((data) => res.status(402).json('this img was Resizing befor'))
        .catch((err) => next());
};
exports.default = CheckImgResize;
