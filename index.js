/**
 * Main file to start the application
 * @author Henrique Deodato <devthegathering@apps.etc.br>
 */

var http = require('http');
const express = require('express');
const app = express();
var logger = require('morgan');
const helmet = require('helmet');

// ENDPOINTS
app.get('/test', (req, res, next) => {
    console.log("/test");
    res.status(200).send('/test');
});

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create the server and start listening
var server = http.createServer(app);
server.listen(3000);