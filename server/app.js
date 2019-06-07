var express = require('express')
var app = express()
var server = require('http').Server(app)
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var url = 'mongodb://localhost/chuxeom'
var tk = require('./model/taikhoan')
mongoose.connect(url, {useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var io = require('socket.io')(server)
app.post('/xacthuc',async(req, res)=>{
    
    var {sdt, password} = req.body
    await tk.findOne({sdt:sdt,password:password},(err,data)=>{
        if(err){
            return handleError(err)
        }
        if(data ===null)
            return res.json({status: false})
        else {
            return res.json({status: true, kq: data})
        }
    })  
})

app.post('/dangky',async(req, res)=>{
    
    var {sdt, password} = req.body
    if(await tk.findOne({sdt:sdt})!==null){
        return res.json(false)
    }
    else{
        tk.create({
            sdt: sdt,
            password:password
        })
        return res.json(true)
    }
    
})
server.listen(8080, console.log('Da khoi tao server 8080'))
