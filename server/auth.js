const jwt = require('jsonwebtoken')

// module.exports = async (request,response,next) => {
//     try {
//         const token = await request.headers.authorization.split(" ")[1]
//         console.log(token)
//         const decodedtoken = await jwt.verify(token, "RANDOM_TOKEN")
//         const user = await decodedtoken
//         request.user = user
//         next()
//     } catch (error) {
//         response.status(401).json({error: new Error("Invalid Request")})
//     }
// }

module.exports = {
    authenticate(request,response,next) {
        console.log(request.cookies.RANDOM_TOKEN, "This is the token!")
        jwt.verify(request.cookies.RANDOM_TOKEN, process.env.JWT_SECRET, (err,payload) => {
            if (err) {
                console.log(err)
                response.status(401).json({verified: false})
            } else {
                next()
            }
        })
    }
}

