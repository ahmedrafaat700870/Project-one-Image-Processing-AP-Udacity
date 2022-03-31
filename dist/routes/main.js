"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const ImgRequest_Route_1 = __importDefault(require("./API/ImgRequest.Route"));
route.use('/resize', ImgRequest_Route_1.default);
// route.use('/option' , ) ;
exports.default = route;
