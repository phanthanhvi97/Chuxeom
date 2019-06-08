var mongoose = require('mongoose')
var Schema = mongoose.Schema
var tkadmin = new Schema({
    username: String,
    password: String,
    hoten: String,
})
module.exports=mongoose.model('tkam',tkadmin)