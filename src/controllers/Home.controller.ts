import * as express from 'express';
import { IControllerBase } from 'interfaces';

class HomeController implements IControllerBase {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.get);
  }

  get = (request: express.Request, response: express.Response) => {
    response.send('Server is up');
  }
}

export default HomeController;