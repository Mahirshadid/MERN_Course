var http = require('http')

var server = http.createServer(function (req, res) {
    
    if(req.url=="/")
    {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h2>Home Page</h2>")
        res.end
    }else if(req.url=="/about"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h2>About Page</h2>")
        res.end
    }

})

server.listen(5050)
console.log("Server connected")