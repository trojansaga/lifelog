var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World! from haproxy amazing!!!');
});

app.get('/test', function (req, res) {
    res.send('this is test');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000s!');
    console.log('this is first step');
    console.log('this is from haproxy');
});
