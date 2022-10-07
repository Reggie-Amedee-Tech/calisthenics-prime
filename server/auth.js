const jwt = require('jsonwebtoken')

module.exports = async (request,response,next) => {
    try {
        const token = await request.headers.authorization.split(" ")[1]
        const decodedtoken = await jwt.verify(token, "RANDOM_TOKEN")
        const user = await decodedtoken
        request.user = user
        next()
    } catch (error) {
        response.status(401).json({error: new Error("Invalid Request")})
    }
}

