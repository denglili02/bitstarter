var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var infile = "index.html";

var temp = fs.readFileSync(infile);
var buffer = new Buffer(temp);

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
