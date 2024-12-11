

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));


let users = {};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    users[socket.id] = 'Anonymous';

    socket.broadcast.emit('user connected', users[socket.id]);

    io.emit('update user list', Object.values(users));

    socket.on('set nickname', (nickname) => {
        const oldName = users[socket.id];
        users[socket.id] = nickname;
        io.emit('nickname changed', { oldName, newName: nickname });
        io.emit('update user list', Object.values(users));
    });

    socket.on('chat message', (msg) => {
        const nickname = users[socket.id];
        socket.broadcast.emit('chat message', { nickname, msg });
        socket.emit('your message', { msg });
    });

    socket.on('typing', () => {
        const nickname = users[socket.id];
        socket.broadcast.emit('typing', nickname);
    });

    socket.on('stop typing', () => {
        const nickname = users[socket.id];
        socket.broadcast.emit('stop typing', nickname);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        const nickname = users[socket.id];
        delete users[socket.id];
        socket.broadcast.emit('user disconnected', nickname);
        io.emit('update user list', Object.values(users));
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
