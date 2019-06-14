var express = require('express')
var app = express()
var server = require('http').Server(app)
app.use(function (req, res, next) {
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
var cd = require('./model/chuyendi')

mongoose.connect(url, { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var io = require('socket.io')(server)


const radius = 6378.16
function torad(d) {
    return d * Math.PI / 180.0
}
function tinhkc(lat1, lon1, lat2, lon2) {
    dlat = torad(lat2 - lat1)
    dlon = torad(lon2 - lon1)
    a = (Math.sin(dlat / 2) * Math.sin(dlat / 2)) + Math.cos(torad(lat1)) * Math.cos(torad(lat2)) * (Math.sin(dlon / 2) * Math.sin(dlon / 2))
    angle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return angle * radius
}


app.post('/xacthuckhach', async (req, res) => {

    var { sdt, password } = req.body
    await tkk.findOne({ sdt: sdt, password: password }, (err, data) => {
        if (err) {
            return handleError(err)
        }
        if (data === null)
            return res.json({ status: false })
        else {
            return res.json({ status: true, kq: data })
        }
    })
})

app.post('/xacthuctaixe', async (req, res) => {

    var { sdt, password } = req.body
    await tktx.findOne({ sdt: sdt, password: password }, (err, data) => {
        if (err) {
            return handleError(err)
        }
        if (data === null)
            return res.json({ status: false })
        else {
            return res.json({ status: true, kq: data })
        }
    })
})

app.post('/xacthucadmin', async (req, res) => {

    var { username, password } = req.body
    await tkam.findOne({ username: username, password: password }, (err, data) => {
        if (err) {
            return handleError(err)
        }
        if (data === null)
            return res.json({ status: false })
        else {
            return res.json({ status: true, kq: data })
        }
    })
})

app.post('/dangky', async (req, res) => {

    var { sdt, password } = req.body
    if (await tkk.findOne({ sdt: sdt }) !== null) {
        return res.json(false)
    }
    else {
        tk.create({
            sdt: sdt,
            password: password
        })
        return res.json(true)
    }

})

app.post('/khachdoipass', async (req, res) => {
    var { oldpass, newpass, _id } = req.body
    tkk.findOneAndUpdate({ _id: _id, password: oldpass }, { $set: { password: newpass } }, { new: true }, (err, data) => {
        if (err) {
            return handleError(err)
        }
        if (data === null)
            return res.json({ status: false })
        else {
            return res.json({ status: true })
        }
    })
})
app.post('/taixedoipass', async (req, res) => {
    var { oldpass, newpass, _id } = req.body
    tktx.findOneAndUpdate({ _id: _id, password: oldpass }, { $set: { password: newpass } }, { new: true }, (err, data) => {
        if (err) {
            return handleError(err)
        }
        if (data === null)
            return res.json({ status: false })
        else {
            return res.json({ status: true })
        }
    })
})



app.post('/loadthongtintaixe', async (req, res) => {
    var {_id } = req.body
    tktx.findOne({ _id: _id}, (err, data) => {
        if (err) {
            return handleError(err)
        }
        if (data === null)
            return res.json({ status: false })
        else {
            return res.json({ status: true, kq:data })
        }
    })
})







app.post('/datxe', async (req, res) => {

    var { xbd, ybd, xkt, ykt, id, km, sotien, quangduong } = req.body
    var start = []
    start.push(xbd, ybd)

    tktx.find({ status: true }, (err, data) => {
        var min = 5.0000001
        var _id = ''

        for (var i = 0; i < data.length; i++) {
            var a = tinhkc(parseFloat(start[0]), parseFloat(start[1]), data[i].vitri[0], data[i].vitri[1])

            if (a < min) {
                min = a
                _id = data[i]._id
            }
        }
        // console.log(min)
        if (min === 5.0000001) {
            res.json(false)
            console.log('haha')
        }
        else {
            // console.log(_id)
            cd.create({
                idkhach: id,
                idtaixe: _id,
                quangduong: quangduong,
                sokm: km,
                sotien: sotien,
                status: 'waiting',
                xdi:xbd,
                ydi:ybd,
                xden:xkt,
                yden: ykt
            })
            res.json(true)

        }
    })

})

app.post('/taixeguitoado',(req, res)=>{
    var {x, y, status, id}= req.body
    var vitri=[]
    vitri.push(x)
    vitri.push(y)
    tktx.findOneAndUpdate({_id:id},{$set:{ vitri:vitri, status:status}},{new:true},(err, data)=>{
        if(err){
            return handleError(err)
        }
    })

})

app.post('/taixedangxuat',(req, res)=>{
    var {status, id}= req.body
    tktx.findOneAndUpdate({_id:id},{$set:{status:status}},{new:true},(err, data)=>{
        if(err){
            return handleError(err)
        }
    })

})


app.post('/chuyendimoi',(req, res)=>{
    var x
    cd.findOne({idtaixe:x, status:'waiting'},(err,data)=>{
        if(err){
            return handleError(err)
        }
        if(data===null){
            return res.json({chuyendi:false})
        }
        else{
            return res.json({chuyendi: true, kq: data})
        }
    })
})
server.listen(8080, console.log('Da khoi tao server 8080'))
// var arr_pos=[]
// io.on('connection',(socket)=>{
//     io.sockets.emit('server_send_pos', arr_pos)
//     console.log('da co client ket noi: '+ socket.id)
//     socket.on('client_send_pos',(data)=>{
//         arr_pos.push(data);
//         console.log(arr_pos)
//         io.sockets.emit('server_send_pos', arr_pos)
//     })
// } )