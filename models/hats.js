const { Double } = require("mongodb")
const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
style: {
    type:String,
    require:true,
    maxlength:25
},
color: {
    type:String,
    require:true,
    maxlength:25
},
price:{type:Number,
    min:5,
    max:1000
},
})
module.exports = mongoose.model("hats",hatsSchema)



    