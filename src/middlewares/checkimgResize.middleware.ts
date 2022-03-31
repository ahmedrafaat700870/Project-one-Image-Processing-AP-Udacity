import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

// interface
import data from '../interfaces/InputOutput.interface';
import ImgDetails from '../interfaces/Imgdetails.interface';

//functions
import OutPutFile from '../functions/outputfile';

const CheckImgResize = (req: Request, res: Response, next: NextFunction) => {
  data.OupFoulder = OutPutFile(
    ImgDetails.Name,
    ImgDetails.Height,
    ImgDetails.Width
  );
  const check = fs.promises.readFile(data.OupFoulder);
  check
    .then((data) => res.status(402).json('this img was Resizing befor'))
    .catch((err) => next());
};
export default CheckImgResize;
