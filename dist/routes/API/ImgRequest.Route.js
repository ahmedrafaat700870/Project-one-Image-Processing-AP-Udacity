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
const express_1 = __importDefault(require("express"));
// middleware
const checkFildesmiddlewre_1 = __importDefault(require("../../middlewares/checkFildesmiddlewre"));
const ImgExit_middleware_1 = __importDefault(require("../../middlewares/ImgExit.middleware"));
const checkimgResize_middleware_1 = __importDefault(require("../../middlewares/checkimgResize.middleware"));
// interfaces .
const Imgdetails_interface_1 = __importDefault(require("../../interfaces/Imgdetails.interface"));
const InputOutput_interface_1 = __importDefault(require("../../interfaces/InputOutput.interface"));
// function
const ressizeImg_1 = __importDefault(require("../../functions/ressizeImg"));
const ImgResquesRoute = express_1.default.Router();
ImgResquesRoute.get('/', checkFildesmiddlewre_1.default, ImgExit_middleware_1.default, checkimgResize_middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(Imgdetails_interface_1.default);
    console.log(InputOutput_interface_1.default);
    (0, ressizeImg_1.default)(InputOutput_interface_1.default.inputfile, InputOutput_interface_1.default.OupFoulder, req.query.widht, req.query.height)
        .then((info) => res.status(200).json('img is Resized'))
        .catch((err) => res.status(404).json('fild to  Resize Img !'));
}));
exports.default = ImgResquesRoute;
