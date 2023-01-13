const { Schema } = require("mongoose");

const UserSchema = new Schema({
    fullName: String,
    login: String,
    password: String,
})


module.exports = {
    UserSchema,
}
