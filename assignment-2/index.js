var http=require('http')
var fs=require('fs')

var server=http.createServer(function(req,res) {
    if(req.url=="/"){

        let dt = fs.readFileSync('indexh.html')

        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(dt)
        res.end()

    }
})

server.listen(5000)
console.log("Connection Success")