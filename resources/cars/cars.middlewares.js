import { getOne } from './cars.model';

export const verifyId = async (req, res, next) => {
  const { id } = req.params;
  if (Number(id) != id)
    return res.status(404).json({ error: 'Your ID is garbage :)' });

  try {
    const car = await getOne(id);

    if (!car.length)
      return res.status(404).json({ error: 'Car does not exist' });

    // eslint-disable-next-line require-atomic-updates
    req.car = car;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

export const verifyBody = (req, res, next) => {
  const { vin, model, make, mileage } = req.body;
  if (!vin || !model || !make || !mileage)
    return res.status(400).json({ error: 'Body incomplete' });
  next();
};
