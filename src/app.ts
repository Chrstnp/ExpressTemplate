import { corsOptions, limiter } from './config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import { IControllerBase } from 'interfaces';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: IControllerBase[], port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(morgan("common"));
        this.app.use(helmet());
        this.app.use(cors(corsOptions));
        this.app.use(limiter); //  apply to all requests
        this.app.use(favicon('favicon.ico')) // Serve Favicon
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    private initializeControllers(controllers: IControllerBase[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.port}`);
        });
    }
}

export default App;