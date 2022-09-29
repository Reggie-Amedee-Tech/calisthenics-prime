const UserController = require('../controllers/user.controller')
const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = function(app) {
    app.post('/register', (request,response) => {
        bcrypt.hash(request.body.password, 10)
        .then((hashedPassword) => {
            const user = User({
                userName: request.body.userName,
                email: request.body.email,
                password: hashedPassword
            })
            user.save()
            .then(result => {
                response.status(201).send({message: "User successfully registered", result})
            })
        })
        .catch((e) => {
            response.status(500).send({message: "password was not successfully hashed", e})
        })
    })
}