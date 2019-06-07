var mongoose = require('mongoose')
var Schema = mongoose.Schema
var TaiKhoan = new Schema({
    sdt: String,
    password: String
})
module.exports=mongoose.model('tk',TaiKhoan)