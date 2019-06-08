var mongoose = require('mongoose')
var Schema = mongoose.Schema
var tkadmin = new Schema({
    sdt: String,
    password: String,
    hoten: String,
})
module.exports=mongoose.model('tkam',tkadmin)