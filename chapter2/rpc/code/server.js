const net = require('net');

const server = net.createServer((scoket)=>{
    scoket.on('data',function(buffer){
        console.log(buffer.toString())
    })
})
server.listen(4000)