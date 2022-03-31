import { NextFunction, Request, Response } from 'express';
import Error from '../interfaces/middleware.interface';
const handleError = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.status || 500;
  const msg = error.message || 'Error';
  res.status(status).json({ status, msg });
};
export default handleError;
