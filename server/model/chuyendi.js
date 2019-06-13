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

    bihuy: Boolean,
    daxong: Boolean,
    dangdi: Boolean
})
module.exports=mongoose.model('cd',chuyendi)