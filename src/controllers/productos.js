import { pool } from "../db/db.js";

// Método para obtener todos los productos
export const getProductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Productos');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Método para obtener un producto por su ID
export const getProductoPorID = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM Productos WHERE ID_Producto = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send("Producto no encontrado");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Método para crear un nuevo producto
export const crearProducto = async (req, res) => {
    const { Nombre_Producto, Descripcion, Precio, Categoria, Imagen } = req.body;
    try {
        await pool.query('INSERT INTO Productos (Nombre_Producto, Descripcion, Precio, Categoria, Imagen) VALUES (?, ?, ?, ?, ?)', [Nombre_Producto, Descripcion, Precio, Categoria, Imagen]);
        res.status(201).send("Producto creado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Método para actualizar un producto existente
export const actualizarProducto = async (req, res) => {
    const id = req.params.id;
    const { Nombre_Producto, Descripcion, Precio, Categoria, Imagen } = req.body;
    try {
        await pool.query('UPDATE Productos SET Nombre_Producto = ?, Descripcion = ?, Precio = ?, Categoria = ?, Imagen = ? WHERE ID_Producto = ?', [Nombre_Producto, Descripcion, Precio, Categoria, Imagen, id]);
        res.send("Producto actualizado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Método para eliminar un producto existente
export const eliminarProducto = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM Productos WHERE ID_Producto = ?', [id]);
        res.send("Producto eliminado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}
