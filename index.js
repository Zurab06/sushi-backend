const express = require('express')
const mongoose = require('mongoose')
const PORT = 5000
const app = express()
app.use(express.json())

const start = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://gaunt0066:Panzerkampf06@cluster0.6m4r7dq.mongodb.net/?retryWrites=true&w=majority')
        console.log('ggg')
        app.listen(PORT,()=>console.log(`server has been started on ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()