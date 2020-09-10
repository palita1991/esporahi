import express from 'express';
import { helpers } from '../helpers';
import { modelCategory } from '../esquemas/schemaCategory';
const router = express.Router();

/* Obtiene todos los modelCategory invocando al metodo del helpers */
router.get('/', async function (req, res) {
    const result = await helpers.getCollection(modelCategory);
    res.json(result);
});

/* Obtiene la modelCategory con el id enviado por GET */
router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const result = await helpers.getCollectionId(modelCategory, id);
    res.json(result);
});


/* Inserta una modelCategory a la base de datos */
router.post('/', async function (req, res) {

    const resultInsert = await helpers.postCollection(modelCategory, req.body);
    res.json(resultInsert);
});

/* Actualiza una modelCategory con id enviado por GET con los datos a actualizar enviados por POST */
router.put('/:id', async function (req, res) {
    const resultUpdate = await helpers.putCollection(req.params.id, req.body, modelCategory);
    res.json(resultUpdate);
});



export default router;
