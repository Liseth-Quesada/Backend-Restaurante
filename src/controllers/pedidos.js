import { pool } from "../db/db.js";

// Obtener todos los pedidos
export const getPedidos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Pedidos');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Obtener un pedido por su ID
export const getPedidoPorID = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM Pedidos WHERE ID_Pedido = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send("Pedido no encontrado");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Crear un nuevo pedido
export const crearPedido = async (req, res) => {
    const { ID_Usuario, Fecha_Hora_Pedido, Estado_Pedido, idEmpleado } = req.body;
    try {
        await pool.query('INSERT INTO Pedidos (ID_Usuario, Estado_Pedido, Fecha_Hora_Pedido, idEmpleado) VALUES (?, ?, ?, ?)', [ID_Usuario, Fecha_Hora_Pedido, Estado_Pedido, idEmpleado]);
        res.status(201).send("Pedido creado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Actualizar un pedido existente
export const actualizarPedido = async (req, res) => {
    const id = req.params.id;
    const { ID_Usuario, Fecha_Hora_Pedido, Estado_Pedido, idEmpleado } = req.body;
    try {
        await pool.query('UPDATE Pedidos SET ID_Usuario = ?, Fecha_Hora_Pedido = ?, Estado_Pedido = ?, idEmpleado = ? WHERE ID_Pedido = ?', [ID_Usuario, Fecha_Hora_Pedido, Estado_Pedido, idEmpleado, id]);
        res.send("Pedido actualizado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Eliminar un pedido existente
export const eliminarPedido = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM Pedidos WHERE ID_Pedido = ?', [id]);
        res.send("Pedido eliminado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}
