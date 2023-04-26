const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRouter')
const addRouter = require('./routes/upload.route')
const dotenv = require('dotenv')
const cors = require("cors")
const path = require("path")


dotenv.config()

const PORT = 5000
const app = express()

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "images")))
app.use(cors())
app.use('/auth', authRouter)
app.use('/add', addRouter)
app.use(require("./routes/authRouter"))
app.use(require('./routes/personalData.js'))
app.use(require('./routes/addRouter'))
const start = async () => {

    try {
        await mongoose.connect(process.env.mongo_server)
        console.log('ggg')
        app.listen(PORT, () => console.log(`server has been started on ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()