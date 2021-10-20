const mongoose = require('mongoose');
const commentSchema = require('./commentModel');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    featured: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

let Posts = mongoose.model('Post', postSchema);

module.exports = Posts;