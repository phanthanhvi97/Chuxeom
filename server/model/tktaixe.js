var mongoose = require('mongoose')
var Schema = mongoose.Schema
var tktaixe = new Schema({
    sdt: String,
    password: String,
    hoten: String,
    bienso:String,
    vitien: Number,
    status: Boolean,
    vitri: [],
    sao:[],
    avatar: String,
    del: Boolean

})
module.exports=mongoose.model('tktx',tktaixe)