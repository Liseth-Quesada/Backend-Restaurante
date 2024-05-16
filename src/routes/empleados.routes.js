import express from 'express';
import { getEmpleados, crearEmpleado, actualizarEmpleado, eliminarEmpleado } from '../controllers/empleados.js';

const router = express.Router();

// Rutas para obtener empleados
router.get('/empleados', getEmpleados);
// Rutas para crear, actualizar y eliminar empleados
router.post('/empleados', crearEmpleado);
router.put('/empleados/:id', actualizarEmpleado);
router.delete('/empleados/:id', eliminarEmpleado);

export default router;
