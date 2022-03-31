import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
// interface
import ImgDetails from '../interfaces/Imgdetails.interface';
import data from '../interfaces/InputOutput.interface';
// functions
import input from '../functions/InputFile';
const CheckImgExit = (req: Request, res: Response, next: NextFunction) => {
  data.inputfile = input(ImgDetails.Name);
  const CheckImgExit = fs.promises.readFile(data.inputfile);
  CheckImgExit.then((info) => {
    next();
  }).catch((err) => res.status(401).json('ohh this img not Exit'));
};
export default CheckImgExit;
