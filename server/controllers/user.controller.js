const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.register = (request,response) => {
                bcrypt.hash(request.body.password, 10)
                .then((hashedPassword) => {
                    const user = User({
                        userName: request.body.userName,
                        email: request.body.email,
                        password: hashedPassword
                    })
                    
                    const token = jwt.sign({
                        userName: user.userName,
                    }, process.env.JWT_SECRET)
                    user.save()
                    .then(result => {
                        response.status(201).send({message: "User successfully registered", result, token})
                    })
                })
                .catch((e) => {
                    response.status(500).send({message: "Password was not successfully hashed", e})
                })
            
}

module.exports.login = (request, response) => {
    User.findOne({email: request.body.email})
        .then((user) => {
            bcrypt.compare(request.body.password, user.password)
            .then((passwordCheck) => {
                if (!passwordCheck) {
                    return response.status(400).send({message: "Password does not match!", error})
                }
                const token = jwt.sign({
                    userId: user._id,
                    userEmail: user.email
                }, "RANDOM_TOKEN", {expiresIn: "2m"})
                return response.cookie("RANDOM_TOKEN", token, {
                    httpOnly: true
                }).status(200).send({message: "Login Successful", email: user.email, id: user._id, token})
                
            })
            .catch((e) => {
                response.status(500).send({message: "Password does not match!"})
            })
        })
        .catch((e) => {
            response.status(500).send({message: "Email is invalid", e})
        })
    }

    module.exports.logout = (request,response) => {
        response.clearCookie('RANDOM_TOKEN');
        response.json({ message: 'You are logged out!' })     
    }
