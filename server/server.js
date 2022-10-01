const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

require('dotenv').config()
const PORT = process.env.PORT || 5003

const connectDB = require('./config/mongoose.config')
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


require('./routes/exerciseQueue.routes')(app)
require('./routes/user.routes')(app)


app.use(express.static(path.resolve(__dirname, "../client/build")))
app.get("*", function(request, response) {
    response.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
})

app.listen(PORT, () => console.log('Database successfully connected!'))



