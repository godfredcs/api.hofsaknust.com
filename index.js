require('dotenv-safe').config();
const express = require('express');
const app = express();

app.set('port', process.env.PORT);

app.get('/', (req, res) => {
    res.send('hello how are you');
});

app.listen(app.get('port') || 3000);