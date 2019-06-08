var mongoose = require('mongoose')
var Schema = mongoose.Schema
var chuyendi = new Schema({
    sdtkhach: String,
    sdttaixe: String,
    diachidi: String,
    diachiden: String,
    status: String,
    sokm: Number,
    sotien: Number,
    report: String
})
module.exports=mongoose.model('cd',chuyendi)