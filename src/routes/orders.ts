import express from 'express';

var ordersRouter = express.Router();

/* GET orders listing. */
ordersRouter.get('/', function(req, res, next) {
  res.send('here should list orders');
});

export default ordersRouter;
