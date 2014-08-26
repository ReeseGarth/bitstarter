#!/usr/bin/env node
var express = require('express');
var morgan = require('morgan')

var app = express()
app.use(morgan('combined'))

app.get('/', function(request, response) {
    response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
