const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    categoria: String,
    titulo: String,
    foto: String,
    usuario: String,
    array_comentarios: [
        {
            comentario: {
                descripcion: String,
                cant_mg: Number,
                cant_n_mg: Number,
                id_usuario: Number,
            },
        },
    ],
    nt_mg: Number,
    cant_n_mg: Number,
});

const schemaUser = new mongoose.Schema({
    email: String,
    password: String,
    nombre: String,
    apellido: String,
    dni: Number,
    fecha_nacimiento: String,
});

const schemaCategory = new mongoose.Schema({
    nombre: String,

});

const modelUser = mongoose.model('usuario', schemaUser, 'usuario');
const modelMeme = mongoose.model('meme', schema, 'memes');
const modelCategory = mongoose.model('category', schemaCategory, 'category');

export let model = {
    modelMeme,
    modelUser,
    modelCategory,
};