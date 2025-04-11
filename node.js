//CREATING SERVER USING NODE
/*
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello!");
});
server.listen(3000, ()=>{console.log("server running in http://localhost:3000")});
// */





//CREATING SERVER USING EXPRESS
/*
const express=require('express');
const app=express();

app.get('/', (req,res)=>{
    res.send("Hello!");
})
app.listen(3030, ()=>{console.log("http://localhost:3030");});
*/





//MODULE
/*
const math=require('./math');
console.log("diff: ", math.sub(5,3))
console.log("sum: ", math.add(3,5));
*/





//CRUD OPERATIONS
/*
const express=require('express');
const app=express();    
app.use(express.json());

const users=[{ "id": 1, "name":"shevaani"},
             { "id": 2, "name":"ramya"}
];
app.get('/', (req,res)=>{res.send("hi");});
app.get('/users', (req,res)=>{res.send(res.json(users));});
app.post('/users', (req,res)=>{
    const newUser={"id": users.length+1, "name":req.body.name};
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(3030, ()=>{console.log("http://localhost:3030");});
*/





//CRUD OPEARIONS
/*
const express = require('express');
const app = express();
app.use(express.json());


app.get('/:id', (req, res) => {
  res.send(`hello ${req.params.id}`);
});

app.listen(3030, () => {
  console.log("http://localhost:3030");
});
*/





//RUNNING HTML FILE AT A DESIRED PORT
/*
const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculator.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
*/





//EVENT AND EVENT LISTENERS
/*
const EventEmitter=require("events");
const eventEmitter=new EventEmitter();
eventEmitter.on("greet", (name)=>{console.log(`Hello, ${name}`);});
*/






//SET_TIMEOUT()
/*
console.log("start");
setTimeout(()=>{console.log("Message after 5s")}, 5000);
console.log("end");
*/



//SET_INTERVAL()
/*
let count=0;
const interval=setInterval(()=>{console.log(`count: ${count}`);
                                count++;
                                if(count==5)
                                  clearInterval(interval);
                                count},500);
*/





//FILE HANDING: WRITE
/*
const fs=require("fs");
fs.writeFile("a.txt","Hello!", (err) => {if (err) throw err;  console.log("File written successfully!");})
*/



//FILE HANDING: READ
/*
const fs=require("fs");
fs.readFile("a.txt", "utf8", (err,data)=>{ if (err) throw err; console.log(`File content: ${data}`);
})
*/



//FILE HANDING: APPEND
/*
const fs=require("fs");
fs.appendFile('a.txt', "I love to code.", (err)=>{ if (err) throw err; console.log("Appended successfully!");})
*/





//Synchronous (blocking)
/*
const fs=require("fs");
const data=fs.readFileSync('a.txt', "utf8");
console.log(data);
console.log("this msg waits for file reading");
*/




//Asynchronous(non-blocking)
/*
const fs=require("fs");
fs.readFile('a.txt', "utf8", (err, data)=>{ if (err) throw err; console.log(data)});
console.log("this msg appears befor file reading");
*/