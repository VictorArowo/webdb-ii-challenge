import { getAll, deleteOne, postOne, editOne } from './cars.model';

export const getCarById = async (req, res) => {
  return res.status(200).json(req.car);
};

export const getAllCars = async (req, res) => {
  try {
    let cars = await getAll();
    return res.status(200).json(cars);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};

export const deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    let car = await deleteOne(id);
    return res.status(200).json(car);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};

export const createCar = async (req, res) => {
  const { vin, model, make, mileage, transmission_type, status } = req.body;

  try {
    let car = await postOne({
      vin,
      model,
      make,
      mileage,
      transmission_type,
      status
    });
    return res.status(201).json(car);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};

export const editCar = async (req, res) => {
  const { id } = req.params;
  const { vin, model, make, mileage, transmission_mode, status } = req.body;

  try {
    let car = await editOne(id, {
      vin,
      model,
      make,
      mileage,
      transmission_mode,
      status
    });
    return res.status(200).json(car);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};
