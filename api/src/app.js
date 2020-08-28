import express from 'express';
import bodyParser from 'body-parser';
import memeRoutes from './controllers/meme';
import usuarioRoutes from './controllers/usuario';
import categoriaRoutes from './controllers/categoria';

export const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/memes', memeRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/categoria', categoriaRoutes);