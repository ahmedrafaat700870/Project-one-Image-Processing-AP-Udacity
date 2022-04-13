"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const main_1 = __importDefault(require("./routes/main"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('common'));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = 5000;
app.use('/root', main_1.default);
// hendel request " / "
app.get('/', (_req, res) => {
    res.status(200).json('Ok');
});
// middleware Error .
app.use(error_middleware_1.default);
app.use((_res, res) => {
    res.status(404).json('ohh this site not exit !');
});
// app listen on port 5000 .
app.listen(PORT, () => {
    console.log('SERVER is Runing');
});
exports.default = app;
