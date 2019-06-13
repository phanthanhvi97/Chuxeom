var chuyendi = require('../model/chuyendi')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chuxeom')
var cd = [
    new chuyendi({
        idkhach: '123',
        idtaixe: '456',
        quangduong: 'nha-truong',
        // status: String,
        sokm: 2,
        sotien: 4000,
        // report: String,

        status:'waiting',
        xdi:'10.34534',
        ydi:'106.354353',
        xden:'10.1232',
        yden:'106.9376'

    })
]
var done = 0;
for (var i = 0; i < cd.length; i++) {
    cd[i].save(function (err, result) {
        done++;
        if (done === cd.length) {
            mongoose.disconnect();
        }
    });
}