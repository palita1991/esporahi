import { Schema, model } from 'mongoose';


const schemaCategory = new Schema({
    name: String,
});

export const modelCategory = model('category', schemaCategory, 'category');

