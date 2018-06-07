const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const { PORT } = require('./src/config');
const setHeaders = require('./src/middlewares/setHeaders');

app.use(setHeaders);

app.set('port', PORT);

app.listen(app.get('port') || 5000, () => {
    console.log('listening on ', PORT);
});

app.get('/', (req, res) => {
    res.send('hello how are you');
});

io.on('connection', socket => {
    socket.emit('news', {
        greeting: 'Saludos amigos'
    });
    
    socket.on('received-post', data => {
        console.log('The data from received-post is ', data);
    });

    socket.on('disconnect', () => {
        io.emit('User disconnected');
    })
});