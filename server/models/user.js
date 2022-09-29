const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    }
}, {timestamps: true})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
