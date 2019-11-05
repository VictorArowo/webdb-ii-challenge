import db from '../../data/dbConfig';

export const getAll = () => {
  return db('cars');
};

export const getOne = id => {
  return db('cars').where('id', '=', id);
};

export const postOne = async body => {
  let [id] = await db('cars').insert(body);
  return getOne(id);
};

export const editOne = async (id, body) => {
  const result = await db('cars')
    .where('id', '=', id)
    .update(body);
  return result > 0 ? { id, ...body } : null;
};

export const deleteOne = async id => {
  const result = db('cars')
    .where('id', '=', id)
    .delete();

  return result ? id : null;
};
