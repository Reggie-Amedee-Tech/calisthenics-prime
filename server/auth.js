const jwt = require('jsonwebtoken')

module.exports = {
    authenticate(request,response,next) {
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

