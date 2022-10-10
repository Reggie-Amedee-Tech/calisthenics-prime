const jwt = require('jsonwebtoken')

module.exports = async (request,response,next) => {
    try {
        const token = await request.headers.Authorization.split(" ")[1]
        console.log(token)
        const decodedtoken = await jwt.verify(token, "RANDOM_TOKEN")
        const user = await decodedtoken
        request.user = user
        next()
    } catch (error) {
        response.status(401).json({error: new Error("Invalid Request")})
    }
}

