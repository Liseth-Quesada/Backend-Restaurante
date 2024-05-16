import { pool } from "../db/db.js";

// Obtener todos los empleados
export const getEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Empleados');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Crear un nuevo empleado
export const crearEmpleado = async (req, res) => {
    const { nombres, apellidos, numeroIdentificacion, correo, clave } = req.body;
    try {
        await pool.query('INSERT INTO Empleados (nombres, apellidos, numeroIdentificacion, correo, clave) VALUES (?, ?, ?, ?, ?)', [nombres, apellidos, numeroIdentificacion, correo, clave]);
        res.status(201).send("Empleado creado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Actualizar un empleado existente
export const actualizarEmpleado = async (req, res) => {
    const id = req.params.id;
    const { nombres, apellidos, numeroIdentificacion, correo, clave } = req.body;
    try {
        await pool.query('UPDATE Empleados SET nombres = ?, apellidos = ?, numeroIdentificacion = ?, correo = ?, clave = ? WHERE idEmpleado = ?', [nombres, apellidos, numeroIdentificacion, correo, clave, id]);
        res.send("Empleado actualizado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}

// Eliminar un empleado existente
export const eliminarEmpleado = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM Empleados WHERE idEmpleado = ?', [id]);
        res.send("Empleado eliminado correctamente");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de servidor");
    }
}
