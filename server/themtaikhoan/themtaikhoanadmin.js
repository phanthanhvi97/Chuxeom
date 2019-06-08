var tkadmin= require('../model/tkadmin')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chuxeom')
var tkam=[
    new tkadmin({
        username: '789',
        password: '789'
    })
]
var done = 0;
for(var i =0 ;i<tkam.length;i++){
    tkam[i].save(function(err,result){
        done ++;
        if(done === tkam.length){
            mongoose.disconnect();
        }
});
}