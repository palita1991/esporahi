const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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

const schemaUser = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  lastname: String,
  dob: String,
});

const schemaCategory = new mongoose.Schema({
  name: String,
});

const modelUser = mongoose.model('usuario', schemaUser, 'usuario');
const modelMeme = mongoose.model('meme', schema, 'memes');
const modelCategory = mongoose.model('category', schemaCategory, 'category');

export let model = {
  modelMeme,
  modelUser,
  modelCategory,
};
