import express from 'express';
import { helpers } from '../helpers';
import { model } from '../esquemas/esquemas';
const cloudinary = require('cloudinary');
const router = express.Router();
cloudinary.config({
  cloud_name: 'mvillalba',
  api_key: '136337424659192',
  api_secret: 'T7AkrlPPU1N3w-PFROdGlJ-Ub9g',
});
/* Obtiene todos los model.modelMeme invocando al metodo del helpers */
router.get('/', async function (req, res) {
  const result = await helpers.getCollection(model.modelMeme);
  res.json(result);
});

/* Obtiene el meme con el id enviado por GET */
router.get('/:id', async function (req, res) {
  const id = req.params.id;
  const result = await helpers.getCollectionId(model.modelMeme, id);
  res.json(result);
});

/* Inserta un meme a la base de datos */
router.post('/', async function (req, res) {
  const result = await cloudinary.v2.uploader.upload(req.file.path);

  console.log(result);
  req.body.foto = result.url;
  const resultInsert = await helpers.postCollection(model.modelMeme, req.body);
  res.json(resultInsert);
});

/* Actualiza un meme con id enviado por GET con los datos a actualizar enviados por POST */
router.put('/:id', async function (req, res) {
  const resultUpdate = await helpers.putCollection(
    req.params.id,
    req.body,
    model.modelMeme
  );
  res.json(resultUpdate);
});

router.get('/category/:name', async function (req, res) {
  const name = req.params.name;
  const result = await helpers.getCollectionByName(model.modelMeme, name);
  res.json(result);
});

export default router;
