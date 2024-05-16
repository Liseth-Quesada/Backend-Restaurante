import express from "express";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsPath = path.join(__dirname, '../uploads');

import empleados from './routes/empleados.routes.js';
import categorias from './routes/categorias.routes.js';
import clientes from './routes/clientes.js'; // Importa las rutas para categorías

import productos from './routes/productos.js'
import pedidos from './routes/pedidos.js'
import detalles_pedido from './routes/detalles_pedido.js'
import img from "./routes/img.routes.js";

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(empleados);
app.use(categorias); 
app.use(clientes);// Usa las rutas para categorías

app.use(productos);
app.use(pedidos);
app.use(detalles_pedido);
app.use(img);

app.get('/uploads/:fileId', (req, res) => {
      const fileId = req.params.fileId;
      const filePath = path.join(uploadsPath, fileId);
    
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          return res.status(404).send('File not found');
        }
    
        res.sendFile(filePath);
      });
  });

export default app;
