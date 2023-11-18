const path = require("path")
const os = require('os')
const fs = require("fs");
const EventEmitter = require('events');
const Logger = require("./logger.js");
const http = require('http');

const emitter = new EventEmitter();
const logger = new Logger();
const server = http.createServer();


var pathObj = path.parse(__filename);
console.log(pathObj)

const dirObj = path.parse(__dirname);
console.log(dirObj)

console.log(os.totalmem())
console.log(os.freemem())
fs.readdir("./",(err,res)=>{
    if(err) console.log(err)
    else console.log(res)
})

emitter.on("messageLogged",(msg)=>{
console.log("Listened to event:",msg)
})

emitter.emit("messageLogged","This is a message logged");
logger.on("logging",(msg)=> console.log("logging",msg));

logger.log("Hello world");

server.on('connection',(socket)=>{
    console.log("New connection!");

});

server.listen(3000); //Starts a server listening on port 3000
console.log("Server listening on port 3000")