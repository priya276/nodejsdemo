var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello dreamz');
});

console.log('Visit http://localhost:3000/')
console.log('Press Ctrl+C to shut down...')

app.listen(process.env.PORT || 3000);

module.exports = app;


