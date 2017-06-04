var http = require('http');
var porta = 8000;
var ip = "localhost";

var server = http.createServer(function(req, res) {
    if( req.url == "/produtos" ){
        res.end('<html><body>Listando produtos!</body></html>');
        console.log("Recebendo request");
        res.writeHead(    200, {'Content-Type': 'text/html'});
    } else {
        res.end('<html><body>Listando home!</body></html>');
    }
});

server.listen(porta, ip);

console.log("Servidor executando em http://" + ip + ":" + porta + "/");