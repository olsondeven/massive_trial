var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('./config');
// var con = massive.connectSync({
//   connectionString : "postgres://massive:@localhost/your-database-name"
// });

var app = express();
app.use(bodyParser.json());

app.get('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(config.port, function() {
  console.log("Listening to port: ", config.port);
});
