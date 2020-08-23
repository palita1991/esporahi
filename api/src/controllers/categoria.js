import express from 'express';
import { helpers } from '../helpers';
import { model } from '../esquemas/esquemas';
const router = express.Router();

/* Obtiene todos los model.modelCategory invocando al metodo del helpers */
router.get('/', async function (req, res) {
    const result = await helpers.getCollection(model.modelCategory);
    res.json(result);
});

/* Obtiene la model.modelCategory con el id enviado por GET */
router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const result = await helpers.getCollectionId(model.modelCategory, id);
    res.json(result);
});


/* Inserta una model.modelCategory a la base de datos */
router.post('/', async function (req, res) {

    const resultInsert = await helpers.postCollection(model.modelCategory, req.body);
    res.json(resultInsert);
});

/* Actualiza una model.modelCategory con id enviado por GET con los datos a actualizar enviados por POST */
router.put('/:id', async function (req, res) {
    const resultUpdate = await helpers.putCollection(req.params.id, req.body, model.modelCategory);
    res.json(resultUpdate);
});



export default router;
