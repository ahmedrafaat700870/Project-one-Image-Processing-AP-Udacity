import express, { Request, Response } from 'express';
// middleware
import checkFildes from '../../middlewares/checkFildesmiddlewre';
import CheckImgExit from '../../middlewares/ImgExit.middleware';
import CheckImgResize from '../../middlewares/checkimgResize.middleware';

// interfaces .
import ImgDetails from '../../interfaces/Imgdetails.interface';
import data from '../../interfaces/InputOutput.interface';
// function
import ResizeImg from '../../functions/ressizeImg';
const ImgResquesRoute = express.Router();

ImgResquesRoute.get(
  '/',
  checkFildes,
  CheckImgExit,
  CheckImgResize,
  async (req: Request, res: Response) => {
    console.log(ImgDetails);
    console.log(data);
    ResizeImg(
      data.inputfile as string,
      data.OupFoulder as string,
      req.query.widht as unknown as string,
      req.query.height as unknown as string
    )
      .then((info) => res.status(200).json('img is Resized'))
      .catch((err) => res.status(404).json('fild to  Resize Img !'));
  }
);

export default ImgResquesRoute;
