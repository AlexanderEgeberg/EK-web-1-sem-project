import { pool } from "../db.js";

export const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM stages ORDER BY id ASC ");
  return rows;
};

export const findById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM stages WHERE id = $1", [id]);
  return rows[0];
};
