const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 5003

const connectDB = require('./config/mongoose.config')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./routes/exercise.routes')(app)
require('./routes/exerciseQueue.routes')(app)
app.listen(PORT, () => console.log('Database successfully connected!'))