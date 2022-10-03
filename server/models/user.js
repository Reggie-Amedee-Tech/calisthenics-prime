const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: mongoose.Types.ObjectId
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    }
}, {timestamps: true})

UserSchema.plugin(uniqueValidator)
const User = module.exports = mongoose.model.Users || mongoose.model("User", UserSchema);
module.exports = User;
