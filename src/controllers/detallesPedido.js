import { pool } from "../db/db.js";

// Obtener todos los detalles de pedidos
export const getDetallesPedido = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM DetallesPedido');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Obtener un detalle de pedido por su ID
export const getDetallePedidoPorID = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM DetallesPedido WHERE ID_Detalle = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send("Detalle de pedido no encontrado");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Crear un nuevo detalle de pedido
export const crearDetallePedido = async (req, res) => {
    const { ID_Pedido, ID_Producto, Cantidad, Subtotal } = req.body;
    try {
        await pool.query('INSERT INTO DetallesPedido (ID_Pedido, ID_Producto, Cantidad, Subtotal) VALUES (?, ?, ?, ?)', [ID_Pedido, ID_Producto, Cantidad, Subtotal]);
        res.status(201).send("Detalle de pedido creado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Actualizar un detalle de pedido existente
export const actualizarDetallePedido = async (req, res) => {
    const id = req.params.id;
    const { ID_Pedido, ID_Producto, Cantidad, Subtotal } = req.body;
    try {
        await pool.query('UPDATE DetallesPedido SET ID_Pedido = ?, ID_Producto = ?, Cantidad = ?, Subtotal = ? WHERE ID_Detalle = ?', [ID_Pedido, ID_Producto, Cantidad, Subtotal, id]);
        res.send("Detalle de pedido actualizado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Eliminar un detalle de pedido existente
export const eliminarDetallePedido = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM DetallesPedido WHERE ID_Detalle = ?', [id]);
        res.send("Detalle de pedido eliminado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}
