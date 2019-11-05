/* eslint-disable no-console */
/* eslint-disable func-names */
const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/json', (req, res) => {
    res.json({hello: 'world'});
});

app.listen(config.port, function (){
    console.log(`Listening http://localhost:${config.port}`);
});