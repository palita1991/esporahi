import { Schema, model } from 'mongoose';

const schemaMeme = new Schema({
    category: String,
    title: String,
    image: String,
    user_id: String,
    comments: [
        {
            comment: {
                description: String,
                user_id: Number,
            },
        },
    ],
    upvotes: {
        amount: Number,
        user_id: [],
    },
    downvotes: {
        amount: Number,
        user_id: [],
    },
});

export const modelMeme = model('meme', schemaMeme, 'memes');