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

//cac loai tai khoan
var tkk = require('./model/tkkhach')
var tktx = require('./model/tktaixe')
var tkam = require('./model/tkadmin')
var cd= require('./model/chuyendi')

mongoose.connect(url, {useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var io = require('socket.io')(server)


app.post('/xacthuckhach',async(req, res)=>{
    
    var {sdt, password} = req.body
    await tkk.findOne({sdt:sdt,password:password},(err,data)=>{
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

app.post('/xacthuctaixe',async(req, res)=>{
    
    var {sdt, password} = req.body
    await tktx.findOne({sdt:sdt,password:password},(err,data)=>{
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

app.post('/xacthucadmin',async(req, res)=>{
    
    var {username, password} = req.body
    await tkam.findOne({username:username,password:password},(err,data)=>{
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
var arr_pos=[]
io.on('connection',(socket)=>{
    io.sockets.emit('server_send_pos', arr_pos)
    console.log('da co client ket noi: '+ socket.id)
    socket.on('client_send_pos',(data)=>{
        arr_pos.push(data);
        console.log(arr_pos)
        io.sockets.emit('server_send_pos', arr_pos)
    })
} )