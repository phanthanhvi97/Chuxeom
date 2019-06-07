var TaiKhoan = require('./model/taikhoan')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chuxeom')
var tk=[
    new TaiKhoan({
        sdt: '0983345305',
        password: '123'
    }),
    new TaiKhoan({
        sdt: '0983345345',
        password: '123'
    })
]
var done = 0;
for(var i =0 ;i<tk.length;i++){
    tk[i].save(function(err,result){
        done ++;
        if(done === tk.length){
            mongoose.disconnect();
        }
});
}