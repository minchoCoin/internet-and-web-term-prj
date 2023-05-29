//server(node.js) code
//execute as 'node server.js'

function reservationInfo(date,time,name,phoneNumber,howMany){
    this.id=0;
    this.date=date;
    this.time=time;
    this.name=name;
    this.phoneNumber = phoneNumber;
    this.howMany=howMany;
}

function contactInfo(name,phoneNumber,comment){
    this.id=0;
    this.name=name;
    this.phoneNumber = phoneNumber;
    this.comment=comment;
}

function DummyDB(){
    var storage = [];
    var cnt = 0;

    this.insert = function(data){
        data.id=cnt++;
        storage.push(data);
        return data;
    };
}

let reservationDB = new DummyDB();
let contactDB = new DummyDB();

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/fa', express.static(__dirname + '/node_modules/font-awesome/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome/fonts'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
app.listen('3000',()=>{
    console.log('listen on 3000');
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/main.html');
})

app.get('/beverage',(req,res)=>{
    res.sendFile(__dirname + '/beverage.html');
})

app.get('/chef',(req,res)=>{
    res.sendFile(__dirname + '/chef.html');
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/contact.html');
})

app.get('/direction',(req,res)=>{
    res.sendFile(__dirname + '/direction.html');
})

app.get('/dish',(req,res)=>{
    res.sendFile(__dirname + '/dish.html');
})

app.get('/greeting',(req,res)=>{
    res.sendFile(__dirname + '/greeting.html');
})

app.get('/reservation',(req,res)=>{
    res.sendFile(__dirname + '/reservation.html');
})
app.post('/reservation/new',(req,res)=>{
    console.log("new reservation!");
    console.log(req.body);
    let data = req.body;
    let info = new reservationInfo(data.date,data.time,data.name,data.phoneNumber,data.howMany);
    reservationDB.insert(info);
    res.send(req.body);
})

app.post('/contact/new',(req,res)=>{
    console.log("new contact!");
    console.log(req.body);
    let data = req.body;
    let info = new contactInfo(data.name,data.phoneNumber,data.comment);
    contactDB.insert(info);
    res.send(req.body);
})