module.exports = io => {
    io.on('connection', socket => {
        socket.emit('news', {
            greeting: 'Saludos amigos'
        });

        socket.on('received-post', data => {
            console.log('The data from received-post is ', data);
        });

        socket.on('ping server', data => {
            io.emit('ping server', data);
        })

        socket.on('disconnect', () => {
            io.emit('User disconnected');
        });
    });
};