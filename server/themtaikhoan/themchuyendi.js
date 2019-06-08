var chuyendi = require('../model/chuyendi')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chuxeom')
var cd = [
    new chuyendi({
        sdtkhach: '123',
        sdttaixe: '456',
        diachidi: 'a',
        diachiden: 'b',
        status: 'da xong',
        sokm: 2,
        sotien: 12000,
        report: 'tot'
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