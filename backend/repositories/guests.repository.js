import { pool } from "../db.js";

export const getAll = async () => {
  const { rows } = await pool.query("SELECT * FROM guests ORDER BY id ASC ");
  return rows;
};

export const getById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM guests WHERE id = $1", [id]);
  return rows[0];
};

export async function createGuest(guest) {
  const result = await pool.query(
    /*sql*/
    `INSERT INTO guests (first_name, last_name, email)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [guest.first_name, guest.last_name, guest.email],
  );

  return result.rows[0];
}

export async function updateGuest(guest) {
  const result = await pool.query(
    /*sql*/ ` UPDATE guests
     SET id = $1, first_name = $2, last_name = $3, email = $4
     WHERE id = $4
     RETURNING id`,
    [guest.first_name, guest.last_name, guest.email],
  );

  if (!result.rows[0]) return undefined;

  const updatedId = result.rows[0].id;

  return getById(updatedId);
}

export async function deleteGuest(id) {
  const result = await pool.query("DELETE FROM guests WHERE id = $1", [id]);

  return result.rowCount;
}
