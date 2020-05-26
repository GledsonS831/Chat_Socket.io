const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./router');

const server = http.createServer(app);

const io = socketIo(server);

io.on('connection', (socket) =>{
    console.log('Connection')

    socket.on('join', ({name, room}, callback)=>{
        console.log(name, room)
    });

    socket.on('disconnect', () =>{
        console.log("fffffffffffffff")
    })
})

app.use(router);

server.listen(port, () =>{
    console.log(`port: ${port}`)
})