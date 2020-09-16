import express from 'express';
import { helpers } from '../helpers';
import { modelMeme } from '../esquemas/schemaMeme';
const cloudinary = require('cloudinary');
const router = express.Router();
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_USER,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
/* Obtiene todos los modelMeme invocando al metodo del helpers */
router.get('/', async function (req, res) {
  const result = await helpers.getCollection(modelMeme);
  res.json(result.reverse());
});

/* Obtiene el meme con el id enviado por GET */
router.get('/:id', async function (req, res) {
  const id = req.params.id;
  const result = await helpers.getCollectionId(modelMeme, id);
  res.json(result);
});

/* Inserta un meme a la base de datos */
router.post('/', async function (req, res) {
  const result = await cloudinary.v2.uploader.upload(req.file.path);
  req.body.foto = result.url;
  const resultInsert = await helpers.postCollection(modelMeme, req.body);
  res.json(resultInsert);
});

/* Actualiza un meme con id enviado por GET con los datos a actualizar enviados por POST */
router.put('/:id', async function (req, res) {
  const resultUpdate = await helpers.putCollection(
    req.params.id,
    req.body,
    modelMeme
  );
  res.json(resultUpdate);
});

router.get('/category/:name', async function (req, res) {
  const name = req.params.name;
  const result = await helpers.getCollectionByName(modelMeme, name);
  res.json(result);
});

export default router;
