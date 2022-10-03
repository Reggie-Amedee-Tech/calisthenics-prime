const UserController = require('../controllers/user.controller')



module.exports = function(app) {
    app.post("/register", UserController.register)
    app.post('/login', UserController.login)
    app.post('/logout', UserController.logout)
    
}

// module.exports = function(app) {
//     app.post('/register', (request,response) => {
//         bcrypt.hash(request.body.password, 10)
//         .then((hashedPassword) => {
//             const user = User({
//                 userName: request.body.userName,
//                 email: request.body.email,
//                 password: hashedPassword
//             })
//             const token = jwt.sign({
//                 userName: user.userName,
//             }, process.env.JWT_SECRET)

//             return response.cookie('token', token, {
//                 httpOnly: true
//             }).status(200).json('Logged in successfully')
//             // user.save()
//             // .then(result => {
//             //     response.status(201).send({message: "User successfully registered", result, token})
//             // })
//         })
//         .catch((e) => {
//             response.status(500).send({message: "Password was not successfully hashed", e})
//         })
//     })

//     app.post('/login', (request,response) => {
//         User.findOne({email: request.body.email})
//         .then((user) => {
//             bcrypt.compare(request.body.password, user.password)
//             .then((passwordCheck) => {
//                 if (!passwordCheck) {
//                     return response.status(400).send({message: "Password does not match!", error})
//                 }

//                 const token = jwt.sign({
//                     userId: user._id,
//                     userEmail: user.email
//                 }, "RANDOM_TOKEN", {expiresIn: "24h"})
//                 response.status(200).send({message: "Login Successful", email: user.email, token})
                
//             })
//             .catch((e) => {
//                 response.status(500).send({message: "Password does not match!"})
//             })
//         })
//         .catch((e) => {
//             response.status(500).send({message: "Email is invalid", e})
//         })
//     })
// }

// app.post("/logout", (request, response) => {
//             response.clearCookie('tmtoken');
//             response.json({ message: 'You are logged out!' })
//     })

