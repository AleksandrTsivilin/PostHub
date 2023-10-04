import express, { Application } from 'express';
import cors from 'cors';

export const createServer = () => {
    const app: Application = express();

    const corsOptions = {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    };

    app.use(cors(corsOptions));
    
    return app;
}

