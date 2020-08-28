import { app } from './app';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const port = 8080;

mongoose.connect('mongodb://localhost:27017/meme')
    .then(() => {
        console.log("conectado a la bd");
        app.listen(port, () => { console.log("conectado al puerto 8080") });

    }).catch(err => console.log(err));



