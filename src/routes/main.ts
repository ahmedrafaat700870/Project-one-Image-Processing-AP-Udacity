import express from 'express';
const route = express.Router();
import ImgResquesRoute from './API/ImgRequest.Route';

route.use('/resize', ImgResquesRoute);
// route.use('/option' , ) ;

export default route;
