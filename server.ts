import LogRocket from 'logrocket';
import express from 'express';

LogRocket.init('cem5zc/dev-api-amcor-desgin');

const app = express();
const PORT = 8000;

app.get('/', (req,res) => 
  res.send('Express + TypeScript Server')
);

app.get('/orders', (req,res) => 
  res.send('here should list orders')
);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});