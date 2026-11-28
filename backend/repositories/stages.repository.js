import { pool } from "../db.js";

export const getAll = async () => {
  const { rows } = await pool.query("SELECT * FROM stages ORDER BY id ASC ");
  return rows;
};

export const getById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM stages WHERE id = $1", [id]);
  return rows[0];
};
