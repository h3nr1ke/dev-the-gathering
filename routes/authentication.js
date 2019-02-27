const app = module.exports = require('express')();

app.get('/authentication', (req, res) => {
  res.status(200).send({msg: "authentication endpoint is working"});
});