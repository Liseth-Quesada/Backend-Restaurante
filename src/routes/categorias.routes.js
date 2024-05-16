import express from 'express';
import { getCategorias, getCategoriaPorID, crearCategoria, actualizarCategoria, eliminarCategoria } from '../controllers/categorias.js';

const router = express.Router();

// Rutas para obtener categorías
router.get('/categorias', getCategorias);
router.get('/categorias/:id', getCategoriaPorID); // Ruta para obtener una categoría por su ID

// Rutas para crear, actualizar y eliminar categorías
router.post('/categorias', crearCategoria);
router.put('/categorias/:id', actualizarCategoria);
router.delete('/categorias/:id', eliminarCategoria);

export default router;
