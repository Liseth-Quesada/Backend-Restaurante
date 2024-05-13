import { pool } from "../db/db.js";

export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Usuarios')
        res.json(rows)
    } catch (err) {
      console.error(err);
      res.status(500).send("Error de servidor");
    }
  }