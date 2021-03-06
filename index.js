var express = require('express');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var buff = new Buffer(32);
buff = fs.readFileSync("index.html");
var message = buff.toString('utf-8');

app.get('/', function(request, response) {
  response.send(message);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
