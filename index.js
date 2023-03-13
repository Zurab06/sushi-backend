const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRouter')
const dotenv = require('dotenv')

dotenv.config()

const PORT = 5000
const app = express()
app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {

    try {
        await mongoose.connect(process.env.mongo_server)
        console.log('Mongo connect')
        app.listen(PORT, () => console.log(`server has been started on ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()