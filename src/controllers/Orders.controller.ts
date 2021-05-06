import * as express from 'express';
import { IControllerBase } from 'interfaces';

class OrdersController implements IControllerBase {
  public path = '/orders';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(`${this.path}/:id`, this.getPost);
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }

  getPost = (request: express.Request, response: express.Response) => {
    const { id } = request.params;
    response.send(`here should list order ${id}`);
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send("here should list orders");
  }

  createAPost = (request: express.Request, response: express.Response) => {
    response.send("here should add an order");
  }
}

export default OrdersController;