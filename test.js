let http = require("http");

http.createServer(function(req, res){
    Response.writeHead(200, {"content-type": "text/plain"});
    Response.write("welcome to page");
    Response.end();
}).listen(5500);


let http = require("http"); 

let  server = http.createServer(); 
server.listen(8000);