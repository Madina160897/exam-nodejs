const { Schema } = require("mongoose");

const EmailSchema = new Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    age: Number,
});

const PostSchema = new Schema({
    owner: EmailSchema,
    post: String,
    img: Number,
    ownersHistory: [EmailSchema],
});

module.exports = {
    PostSchema,
    EmailSchema,
};