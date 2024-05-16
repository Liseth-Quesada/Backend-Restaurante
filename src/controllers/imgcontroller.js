import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Middleware para subir un solo archivo
export const uploadMiddleware = upload.single('myFile');

// Función para manejar la subida de archivos
export const uploadFile = (req, res) => {
    res.send({ data: 'Archivo guardado exitosamente' });
};


export const getImages = (req, res) => {
    const directory = 'uploads';

    // Leer el contenido del directorio 'uploads'
    fs.readdir(directory, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer el directorio de imágenes' });
        }

        // Filtrar solo los archivos con extensiones de imagen comunes
        const images = files.filter(file => {
            const extension = file.split('.').pop().toLowerCase();
            return ['jpg', 'jpeg', 'png'].includes(extension);
        });

        // Enviar la lista de imágenes como respuesta JSON
        res.json({ images });
    });
};
