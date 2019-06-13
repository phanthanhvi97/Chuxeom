var tktaixe= require('../model/tktaixe')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chuxeom')
var tktx=[
    new tktaixe({
        sdt: '4567',
        password: '4567',
        hoten: 'Phan Thanh Vi',
        bienso:'61U2',
        status: true,
        vitien: 200000,
        vitri: [10.740340,106.682611],
        sao:[5,5,1,4],
        avatar: 'https://www.wwf.org.uk/sites/default/files/styles/content_slide_image/public/2016-10/Original_WW22776.jpg?h=66ac411f&itok=2Fh0YA7h',
        del: false
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