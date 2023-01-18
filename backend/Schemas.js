const { Schema } = require("mongoose");

const EmailSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: String,
    surname: String,
    age: Number,
});

const PostSchema = new Schema({
    user: EmailSchema,
    title: String,
    post: String,
    img: String,
});


module.exports = {
    PostSchema,
    EmailSchema,
};