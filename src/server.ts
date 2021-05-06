import HomeController from './controllers/Home.controller';
import App from './app';
import OrdersController from './controllers/Orders.controller';

const app = new App(
  [
    new HomeController(),
    new OrdersController(),
  ],
  8000,
);

app.listen();