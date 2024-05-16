import express from 'express';
import { getDetallesPedido, getDetallePedidoPorID, crearDetallePedido, actualizarDetallePedido, eliminarDetallePedido } from '../controllers/detallesPedido.js';

const router = express.Router();

// Ruta para obtener todos los detalles de pedidos
router.get('/detalles-pedido', getDetallesPedido);

// Ruta para obtener un detalle de pedido por su ID
router.get('/detalles-pedido/:id', getDetallePedidoPorID);

// Ruta para crear un nuevo detalle de pedido
router.post('/detalles-pedido', crearDetallePedido);

// Ruta para actualizar un detalle de pedido existente
router.put('/detalles-pedido/:id', actualizarDetallePedido);

// Ruta para eliminar un detalle de pedido existente
router.delete('/detalles-pedido/:id', eliminarDetallePedido);

export default router;
