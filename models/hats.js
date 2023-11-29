const { Double } = require("mongodb")
const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
style:String,
color:String,
price:{
    type:Number,
    min: [5, "Price must be greater than or equal to 5"],
    max: [1000, "Price must be less than or equal to 1000"],
},
})
module.exports = mongoose.model("hats",hatsSchema)



    