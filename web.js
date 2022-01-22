var express = require('express');
var packageInfo = require('./package.json');

var app = express();

app.get('/', function (req, res) {
    res.json({ version: packageInfo.version });
  });

var server = app.listen(process.env.port || 5000, async ()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log('Web server started at http://%s:%s', host, port);
});