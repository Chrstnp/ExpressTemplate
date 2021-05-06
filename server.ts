import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import LogRocket from 'logrocket';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import { corsOptions, limiter } from './config';

LogRocket.init('cem5zc/dev-api-amcor-desgin');

const app = express();

// Middlewares
app.use(morgan("common"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(limiter); //  apply to all requests

// Serve Favicon
app.use(favicon('favicon.ico'))

// Port
const PORT = 8000;

//Routes
app.get('/', (req, res) =>
  res.send('Server is up')
);

app.get('/orders', (req, res) =>
  res.send('here should list orders')
);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});