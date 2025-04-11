/*
const express = require('express');
const app = express();
const PORT=5050;
app.use(express.json());


app.get('/greet', (req, res) => {
    let name=req.query.name || "guest"
    res.send(`hello ${name}`);
});

app.listen(5050, () => {
  console.log(`http://localhost:${PORT}`);
});

*/














const express=require('express');
const app=express();    
app.use(express.json());

const users=[{"name":"shevaani", "age":19},{"name":"ramya", "age":20}];
//const userss={ 1:{"name":"shevaani","age": 19}, 2:{"name":"ramya", "age":20}};
app.get('/', (req,res)=>{res.send("hi");});
// app.get('/users', (req,res)=>{res.send(res.json(users));});


app.get('/user/:id', (req,res)=>{
    let num=req.params.id;
    if(num<=users.length && num>0)
        res.json(users[num-1]);
    else
        res.send("Invalid")
});


app.listen(3070, ()=>{console.log("http://localhost:3070");});



















/*let str1="heart beat detected";
count=0;
const interval=setInterval(()=>{
        console.log(str1);
        count++;
        if (count==5)
            clearInterval(interval)
    },2000);

*/







/*const EventEmitter=require("events");
const eventEmitter=new EventEmitter();
eventEmitter.on("download", (ffile)=>{console.log(`Download complete: ${ffile}`);});

setTimeout(() => {
    eventEmitter.emit('download',"file.txt")
}, 4000);*/
















