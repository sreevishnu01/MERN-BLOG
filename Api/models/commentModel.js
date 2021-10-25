const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        require: true
    }

}, {
    timestamps: true
});

let Comments = mongoose.model('Comment', commentSchema);
module.exports = Comments;