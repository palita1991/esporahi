import express from 'express';
import bodyParser from 'body-parser';
import memeRoutes from './controllers/meme';
import usuarioRoutes from './controllers/usuario';
import categoriaRoutes from './controllers/categoria';
import path from 'path';
import multer from 'multer';

export const app = express();

app.use(bodyParser.json());
// esto hay que revisarlo .
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
// app.use(multer({
//     dest: path.join(__dirname, 'public/uploads'),

// }).single('foto'));

// middleware , esto ejecuta antes para dejar la ruta lista para guardar las fotos
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: (req, file, cb, filename) => {
    console.log('linea 30');
    cb(null, path.extname(file.originalname));
  },
});
//recordar que el id del frontend para cargar el archivo tiene que tener el mismo nombre en este caso foto
app.use(multer({ storage }).single('foto'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/memes', memeRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/categoria', categoriaRoutes);
