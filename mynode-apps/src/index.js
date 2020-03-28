//live chat application using socket.io

const app = require('express')();
const http = require('http').createServer(app);
//http is application transport for websocket
const io = require('socket.io')(http);

//connect with socket
io.on('connection', function (socket) {
    console.log('a user connected');
    //send data over socket
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

});


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});
