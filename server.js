//server(node.js) code
//execute as 'node server.js'
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

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