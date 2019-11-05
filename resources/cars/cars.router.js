import { Router } from 'express';
import {
  getAllCars,
  getCarById,
  createCar,
  editCar,
  deleteCar
} from './cars.controllers';

import { verifyId, verifyBody } from './cars.middlewares';

const router = Router();

router
  .route('/')
  .get(getAllCars)
  .post(verifyBody, createCar);

router
  .route('/:id')
  .get(verifyId, getCarById)
  .put(verifyId, verifyBody, editCar)
  .delete(verifyId, deleteCar);

export default router;
