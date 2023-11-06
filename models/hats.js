const { Double } = require("mongodb")
const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
costume_type: String,
size: String,
color: String,
price:Number,
})
module.exports = mongoose.model("hats",hatsSchema)



    