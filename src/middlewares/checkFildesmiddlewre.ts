import { NextFunction, Request, Response } from 'express';
import ImgDetails from '../interfaces/Imgdetails.interface';
const fildes = (req: Request, res: Response, next: NextFunction) => {
  ImgDetails.Name = req.query.name as unknown as string | null;
  ImgDetails.Height = req.query.height as unknown as number | null;
  ImgDetails.Width = req.query.widht as unknown as number | null;
  if (
    ImgDetails.Name === undefined ||
    ImgDetails.Height === undefined ||
    ImgDetails.Width === undefined
  ) {
    res.status(400).json('please Enter all filds');
  } else {
    next();
  }
};

export default fildes;
