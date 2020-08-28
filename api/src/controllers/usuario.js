import express from 'express';
import { helpers } from '../helpers';
import { model } from '../esquemas/esquemas';
const router = express.Router();

/* Obtiene todos los model.usuarios invocando al metodo del helpers */
router.get('/', async function (req, res) {
    const result = await helpers.getCollection(model.modelUser);
    res.json(result);
});
/* Obtiene el model.usuario con el id enviado por GET */
router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const result = await helpers.getCollectionId(model.modelUser, id);
    res.json(result);
});


/* Inserta un model.usuario a la base de datos */
router.post('/', async function (req, res) {
    const resultInsert = await helpers.postCollection(model.modelUser, req.body);
    res.json(resultInsert);
});

/* Actualiza un model.usuario con id enviado por GET con los datos a actualizar enviados por POST */
router.put('/:id', async function (req, res) {
    const resultUpdate = await helpers.putCollection(req.params.id, req.body, model.modelUser);
    res.json(resultUpdate);
});
export default router;