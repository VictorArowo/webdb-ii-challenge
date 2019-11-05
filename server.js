import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import carsRouter from './resources/cars/cars.router';

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(dotenv.config());

server.use('/api/cars', carsRouter);

export default server;
