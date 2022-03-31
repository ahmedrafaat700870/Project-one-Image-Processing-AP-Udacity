import express, { Response, Request, Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import handleError from './middlewares/error.middleware';
import route from './routes/main';
const app: Application = express();

app.use(morgan('common'));
app.use(helmet());
app.use(express.json());
app.use(cors());
const PORT = 5000;
app.use('/root', route);
// hendel request " / "
app.get('/', (_req: Request, res: Response) => {
  res.status(200).json('Ok');
});

// middleware Error .
app.use(handleError);
app.use((_res: Request, res: Response) => {
  res.status(404).json('ohh this site not exit !');
});
// app listen on port 5000 .
app.listen(PORT, () => {
  console.log('SERVER is Runing');
});
export default app;
