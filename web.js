var express = require('express');
var packageInfo = require('./package.json');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

var server = app.listen(process.env.port || 5000, async ()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log('Web server started at http://%s:%s', host, port);
});

app.post('/webhook/' + process.env.TOKEN, function (req, res) {
    console.log(req.body);

    
    res.sendStatus(200);
});