import express from 'express';
import { getPedidos, getPedidoPorID, crearPedido, actualizarPedido, eliminarPedido } from '../controllers/pedidos.js';

const router = express.Router();

// Ruta para obtener todos los pedidos
router.get('/pedidos', getPedidos);

// Ruta para obtener un pedido por su ID
router.get('/pedidos/:id', getPedidoPorID);

// Ruta para crear un nuevo pedido
router.post('/pedidos', crearPedido);

// Ruta para actualizar un pedido existente
router.put('/pedidos/:id', actualizarPedido);

// Ruta para eliminar un pedido existente
router.delete('/pedidos/:id', eliminarPedido);

export default router;
