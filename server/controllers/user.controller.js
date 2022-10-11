const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.register = (request, response) => {
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
                    response.status(201).send({ message: "User successfully registered", result, token })
                })
        })
        .catch((e) => {
            response.status(500).send({ message: "Password was not successfully hashed", e })
        })

}

// module.exports.login = (request, response) => {
//     User.findOne({email: request.body.email})
//         .then((user) => {
//             bcrypt.compare(request.body.password, user.password)
//             .then((passwordCheck) => {
//                 if (!passwordCheck) {
//                     response.status(400).send({message: "Password does not match!", error})
//                 } else {
//                     response.cookie("RANDOM_TOKEN", jwt.sign({userId: user._id, userEmail: user.email}, process.env.JWT_SECRET), {
//                         httpOnly: false,
//                         sameSite: 'none',
//                         expires: new Date(Date.now() = 90000)
//                     }).json({message: "Login Successful", email: user.email, id: user._id, token})
//                 }
//                 // const token = jwt.sign({
//                 //     userId: user._id,
//                 //     userEmail: user.email
//                 // }, process.env.JWT_SECRET, {expiresIn: "6h"})



//             })
//             .catch((e) => {
//                 response.status(500).send({message: "Password does not match!"})
//             })
//         })
//         .catch((e) => {
//             response.status(500).send({message: "Email is invalid", e})
//         })
//     }

module.exports.login = (request, response) => {
    User.findOne({ email: request.body.email })
        .then(user => {
            if (user === null) {
                response.status(400).json({ message: "Invalid Email Address" })
            } else {
                bcrypt.compare(request.body.password, user.password)
                    .then(passwordIsValid => {
                        if (passwordIsValid) {
                            const token = jwt.sign({
                                userId: user._id,
                                userEmail: user.email
                            }, process.env.JWT_SECRET)

                            response.cookie("RANDOM_TOKEN", token, process.env.JWT_SECRET,
                                {
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 90000)
                                })
                                .json({ message: "Login Successful", email: user.email, id: user._id, token })
                        }
                    })
            }
        })
}

module.exports.logout = (request, response) => {
    response.clearCookie('RANDOM_TOKEN');
    response.json({ message: 'You are logged out!' })
}
