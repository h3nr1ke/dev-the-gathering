/**
 * Main file to start the application
 * @author Henrique Deodato <devthegathering@apps.etc.br>
 */

const http = require('http');
const express = require('express');
const app = express();
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// load the data from env vars
require('dotenv-safe').load();

// ENDPOINTS
app.get('/login', (req, res, next) => {
    console.log("/login");
    res.status(200).send('/test');
});

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create the server and start listening
var server = http.createServer(app);

// connects do the database and create a global var to share the connection
MongoClient.connect( process.env.MONGO_CONNECTION, (err, database) => {
    if (err) return console.log(err)
    global.db = database.db( process.env.MONGO_DB ) // database name
    
    // since we have a database connection, start the server...
    server.listen(3000);
});