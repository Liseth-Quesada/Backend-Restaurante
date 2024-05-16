import { pool } from '../db/db.js';

// Obtener todos los clientes
export const getClientes = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Clientes');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
};

// Obtener un cliente por su ID
export const getClientePorID = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM Clientes WHERE ID_Usuario = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send("Cliente no encontrado");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
};

// Crear un nuevo cliente
export const crearCliente = async (req, res) => {
    console.log('Solicitud POST recibida en /clientes'); // Debugging
    const { Nombre_Usuario, email, Contrasena } = req.body;
    try {
        await pool.query('INSERT INTO Clientes (Nombre_Usuario, email, Contrasena) VALUES (?, ?, ?)', [Nombre_Usuario, email, Contrasena]);
        res.status(201).send("Cliente creado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
};


// Actualizar un cliente existente
export const actualizarCliente = async (req, res) => {
    const id = req.params.id;
    const { Nombre_Usuario, email, Contrasena } = req.body;
    try {
        await pool.query('UPDATE Clientes SET Nombre_Usuario = ?, email = ?, Contrasena = ? WHERE ID_Usuario = ?', [Nombre_Usuario, email, Contrasena, id]);
        res.send("Cliente actualizado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
};

// Eliminar un cliente existente
export const eliminarCliente = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM Clientes WHERE ID_Usuario = ?', [id]);
        res.send("Cliente eliminado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
};
