// entry points for all routes
const app = module.exports = require('express')();

// default call for the server...
app.get('/', (req, res) => {
  res.send({msg: 'Dev The Gathering is up and burning...'});
});

//authentication end point....
app.use(require('./authentication'));

// Handle every other request that is not listed and send back a 404
app.all('*', (req, res) => {
    res.status(404).send({msg: `No endpoint defined for ${req.url}`});
});