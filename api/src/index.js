require('dotenv').config();
import { app } from './app';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const port = 8080;

mongoose
  .connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
  )
  .then(() => {
    console.log('conectado a la bd');
    app.listen(port, () => {
      console.log('conectado al puerto 8080');
    });
  })
  .catch((err) => console.log(err));
