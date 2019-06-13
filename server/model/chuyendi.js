var mongoose = require('mongoose')
var Schema = mongoose.Schema
var chuyendi = new Schema({

    idkhach: String,
    idtaixe: String,
    quangduong: String,
    // status: String,
    sokm: Number,
    sotien: Number,
    // report: String,
    status: String,
    xdi:String,
    ydi:String,
    xden:String,
    yden: String

})
module.exports=mongoose.model('cd',chuyendi)