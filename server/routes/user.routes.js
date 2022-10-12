const UserController = require('../controllers/user.controller')

module.exports = function(app) {
    app.post("/register", UserController.register)
    app.post('/login', UserController.login)
    app.post('/logout', UserController.logout)
}

