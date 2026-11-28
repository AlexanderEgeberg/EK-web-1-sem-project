import { pool } from "../db.js";

export const getAll = async () => {
  const { rows } = await pool.query("SELECT * FROM concerts ORDER BY id ASC ");
  return rows;
};

export const getById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM concerts WHERE id = $1", [
    id,
  ]);
  return rows[0];
};
