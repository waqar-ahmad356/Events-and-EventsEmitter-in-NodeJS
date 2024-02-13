const express=require('express');
const EventEmitter=require('events');
const event=new EventEmitter();
let count=0;

event.on('api called',()=>{
    count++;
    console.log('Event Called',count);
})

const app=express();

app.get('/apisend',(req,res)=>{
    res.send('api send');
    event.emit('api called')
})

app.get('/search',(req,res)=>{
    res.send('api seacrh');
    event.emit('api called')
})

app.get('/read',(req,res)=>{
    res.send('api read');
    event.emit('api called')
})
app.listen(4500);