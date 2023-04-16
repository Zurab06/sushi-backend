const {Schema,model} = require('mongoose')

const Adding = new Schema({
    id:{type:Number,unique:true, required: true},
    name:{type:String,required: true},
    weight:{type: Number,required: true},
    image:{type:String,},
    pieces:{type:Number,required:true},
    price:{type: Number,required:true},


})



module.exports = model('Adding',Adding)