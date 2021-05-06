import express from 'express';

var homeRouter = express.Router();

/* GET home page. */
homeRouter.get('/', function(req, res, next) {
  res.send('Server is up');
});

export default homeRouter;
