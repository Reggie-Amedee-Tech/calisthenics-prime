const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// module.exports = {
//     register: (request,response) => {
//         const user = new User(request.body)
//         user
//         .save()
//         .then(() => {
//             const token = jwt.sign({
//                 id: user._id
//             }, process.env.JWT_SECRET)
//             response.cookie('token',token, {
//                 httpOnly: true
//             }).json({message: 'Successfully Registered', user: user})
//         })
//         .catch((err) => {
//             response.status(400).json(err)
//         })
//     },

//     login: (request,response) => {
//         User.findOne({email: request.body.email})
//         .populate()
//         // .then(user => {
//         //     if (user === null) {
//         //         response.status(400).json({message: "Invalid Email"})
//         //     } else {
//         //         bcrypt.compare(request.body.password, user.password)
//         //         .then(passwordIsValid => {
//         //             if(passwordIsValid) {
//         //                 response.cookie('token', jwt.sign({
//         //                     email: user.email, name: user.userName
//         //                 }, process.env.JWT_SECRET, {
//         //                     httpOnly: true,
//         //                     expires: new Date(Date.now() + 900000)
//         //                 })).json({
//         //                     message: 'Successfully Logged In',
//         //                     userLogged: {
//         //                         email: user.email
//         //                     }
//         //                 })
//         //             } else {
//         //                 response.status(400).json({message: "Invalid Login Attempt"})
//         //             }
//         //         })
//         //     }
//         // })
//         // .catch(err => {
//         //     response.status(400).json({message: err.message})
//         // })

        
//     }
// }

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
                }, "RANDOM_TOKEN", {expiresIn: "24h"})
                response.status(200).send({message: "Login Successful", email: user.email, token})
                
            })
            .catch((e) => {
                response.status(500).send({message: "Password does not match!"})
            })
        })
        .catch((e) => {
            response.status(500).send({message: "Email is invalid", e})
        })
    }
