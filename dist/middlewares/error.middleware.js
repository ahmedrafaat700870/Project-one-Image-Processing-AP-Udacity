"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (error, _req, res, _next) => {
    const status = error.status || 500;
    const msg = error.message || 'Error';
    res.status(status).json({ status, msg });
};
exports.default = handleError;
