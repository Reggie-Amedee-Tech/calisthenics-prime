const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports.createUser = async (request,response) => {
    // const user = request.body;
    // const takenUserName = await User.findOne({userName: user.userName})
    // const takenEmail = await User.findOne({email: user.email})

    // if (takenUserName || takenEmail) {
    //     response.json('User name or Email has already been taken!')
    // } else {
    //     user.password = await User.bcrypt.hash(request.body.password, 10)

    //     const dbUser = new User({
    //         userName: user.userName.toLowercase(),
    //         email: user.email.toLowercase(),
    //         password: user.password
    //     })
    //     dbUser.save()
    //     response.json({message: "Success"})
    // }

    
    
}