var express = require('express');
var app = express();
fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.delete('/', function (req, res) {
 fs.unlink('helloworld.txt', function(err) {
        if(err){ response=err;}
        else{
            response="delete successfull";
        }
        res.send(response);
    });
})

app.listen(3000, function() {
	console.log('hey!! server has started at port 3000')
})
exports.app=app;