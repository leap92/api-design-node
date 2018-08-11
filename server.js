// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const fs = require('fs');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    })
});

var jsonData = {count: 12, message: 'hey'};
app.get('/data', function (req, res) {
    res.json(jsonData);
})

app.listen('3000', console.log('Listening on port 3000'));
