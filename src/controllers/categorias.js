import { pool } from "../db/db.js";

// Obtener todas las categorías
export const getCategorias = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Categorias');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Obtener una categoría por su ID
export const getCategoriaPorID = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM Categorias WHERE idCategorias = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send("Categoría no encontrada");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Crear una nueva categoría
export const crearCategoria = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        await pool.query('INSERT INTO Categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion]);
        res.status(201).send("Categoría creada correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Actualizar una categoría existente
export const actualizarCategoria = async (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion } = req.body;
    try {
        await pool.query('UPDATE Categorias SET nombre = ?, descripcion = ? WHERE idCategorias = ?', [nombre, descripcion, id]);
        res.send("Categoría actualizada correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Eliminar una categoría existente
export const eliminarCategoria = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM Categorias WHERE idCategorias = ?', [id]);
        res.send("Categoría eliminada correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}
