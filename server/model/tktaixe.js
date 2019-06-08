var mongoose = require('mongoose')
var Schema = mongoose.Schema
var tktaixe = new Schema({
    sdt: String,
    password: String,
    hoten: String,
    bienso:String,
    status: String,
    vitien: Number,
    status: String,
    vitri: String
})
module.exports=mongoose.model('tktx',tktaixe)