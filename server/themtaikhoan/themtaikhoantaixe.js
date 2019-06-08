var tktaixe= require('../model/tktaixe')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chuxeom')
var tktx=[
    new tktaixe({
        sdt: '456',
        password: '456'
    })
]
var done = 0;
for(var i =0 ;i<tktx.length;i++){
    tktx[i].save(function(err,result){
        done ++;
        if(done === tktx.length){
            mongoose.disconnect();
        }
});
}