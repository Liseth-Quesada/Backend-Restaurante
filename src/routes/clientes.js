import { Router } from 'express';
import { getClientes, getClientePorID, crearCliente, actualizarCliente, eliminarCliente } from '../controllers/clientes.js';

const router = Router();

router.get('/clientes', getClientes);
router.get('/clientes:id', getClientePorID);
router.post('/clientes', crearCliente); // Asegúrate de que esta línea esté presente y sea correcta
router.put('/clientes:id', actualizarCliente);
router.delete('/clientes:id', eliminarCliente);

export default router;

