"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imgdetails_interface_1 = __importDefault(require("../interfaces/Imgdetails.interface"));
const fildes = (req, res, next) => {
    Imgdetails_interface_1.default.Name = req.query.name;
    Imgdetails_interface_1.default.Height = req.query.height;
    Imgdetails_interface_1.default.Width = req.query.widht;
    if (Imgdetails_interface_1.default.Name === undefined ||
        Imgdetails_interface_1.default.Height === undefined ||
        Imgdetails_interface_1.default.Width === undefined) {
        res.status(400).json('please Enter all filds');
    }
    else {
        next();
    }
};
exports.default = fildes;
