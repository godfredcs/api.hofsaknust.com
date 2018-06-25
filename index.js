"use strict";
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const { PORT } = require('./src/config');
const setHeaders = require('./src/middlewares/setHeaders');

const socket = require('./src/sockets');

app.use(setHeaders);

app.set('port', PORT);

app.get('/', (req, res) => {
    res.send('hello how are you');
});

socket(io);

http.listen(app.get('port'), () => console.log('live'));
