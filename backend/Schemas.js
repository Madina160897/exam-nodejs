const { Schema } = require("mongoose");

const EmailSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: String,
    surname: String,
    age: Number,
    frends: [],
});

const PostSchema = new Schema({
    owner: EmailSchema,
    post: String,
    img: String,
    ownersHistory: [EmailSchema],
});


module.exports = {
    PostSchema,
    EmailSchema,
};