const {Schema} = require('mongoose')
const mongoose = require('mongoose');


const postSchema = new Schema({
    title: String,
    author: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema, 'posts');

exports.Post = Post;
