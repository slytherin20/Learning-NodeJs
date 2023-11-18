const http = require('http');
const server = http.createServer((req,res)=>{

    if(req.url=="/"){
        res.write("Homepage")
        res.end()
    }
    else if(req.url=="/contact"){
        res.write("This is a contacts page");
        res.end();
    }
})

server.listen(5000);
console.log("Listening on port 5000")