var tkkhach = require('../model/tkkhach')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chuxeom')
var tkk=[
    new tkkhach({
        sdt: '123',
        password: '123',
        hoten:'vivuive'
    }),
    new tkkhach({
        sdt: '1234',
        password: '1234',
        hoten:'vicute'
    })
]
var done = 0;
for(var i =0 ;i<tkk.length;i++){
    tkk[i].save(function(err,result){
        done ++;
        if(done === tkk.length){
            mongoose.disconnect();
        }
});
}