// Create a new Node.js application
var express = require('express');
var app = express();

// Configure the server to listen on port 3000
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});

// Example Node.js script for serving static files and handling HTTP requests
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
