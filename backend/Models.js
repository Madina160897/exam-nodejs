const mongoose = require("mongoose");
const { PostSchema, EmailSchema } = require("./Schemas");

const EmailModel = mongoose.model("Email", EmailSchema);
const PostModel = mongoose.model("Post", PostSchema);

module.exports = {
    EmailModel,
    PostModel,
};