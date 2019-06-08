var mongoose = require('mongoose')
var Schema = mongoose.Schema
var tkkhach = new Schema({
    sdt: String,
    password: String,
    hoten: String,
    status: String,
})
module.exports=mongoose.model('tkk',tkkhach)