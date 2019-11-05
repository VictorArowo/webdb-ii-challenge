import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

import carsRouter from './resources/cars/cars.router';

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/cars', carsRouter);

export default server;
