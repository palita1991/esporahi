import { Schema, model } from 'mongoose';

const schemaUser = new Schema({
    email: String,
    password: String,
    name: String,
    lastname: String,
    dob: String,
});

export const modelUser = model('usuarios', schemaUser, 'usuarios');