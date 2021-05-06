import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import { corsOptions, limiter } from './config';
import homeRouter from './routes/home';
import ordersRouter from './routes/orders';

const app = express();

// Middlewares
app.use(morgan("common"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(limiter); //  apply to all requests
app.use(favicon('favicon.ico')) // Serve Favicon
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Port
const PORT = 8000;

//Routes

app.use('/', homeRouter);
app.use('/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});