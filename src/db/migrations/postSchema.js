const { Schema } = require('mongoose');

const PostSchema = new Schema({
    title: String,
    description: String,
    image: String,
    body: String,
    published: Boolean,
}, { timestamps: true });


module.exports = PostSchema;
