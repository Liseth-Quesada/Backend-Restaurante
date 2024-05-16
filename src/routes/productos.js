import express from 'express';
import { getProductos, getProductoPorID, crearProducto, actualizarProducto, eliminarProducto } from '../controllers/productos.js';

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/productos', getProductos);

// Ruta para obtener un producto por su ID
router.get('/productos/:id', getProductoPorID);

// Ruta para crear un nuevo producto
router.post('/productos', crearProducto);

// Ruta para actualizar un producto existente
router.put('/productos/:id', actualizarProducto);

// Ruta para eliminar un producto existente
router.delete('/productos/:id', eliminarProducto);

export default router;
