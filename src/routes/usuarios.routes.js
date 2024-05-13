import express from 'express';
import { getUsuarios} from '../controllers/usuarios.js';

const router = express.Router();

router.get('/usuarios', getUsuarios);


export default router;
