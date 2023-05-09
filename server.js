//server(node.js) code
//execute as 'node server.js'
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;

    if(pathname='/'){
        fs.readFile('main.html',function(error,data){
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.end(data);
        });
    }
}).listen(3000,function(){
    console.log('Server Running at http://127.0.0.1:3000');
});