const {Socket} = require('net');
const socket = new Socket({});
socket.connect({
    host:'127.0.0.1',
    port:4000
})

socket.write('hello world'); //  向server发送信息 

// socket.on('data',())