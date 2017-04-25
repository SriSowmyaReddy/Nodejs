var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('hey! you made a get api call');
	});
	
app.post('/', function (req, res) {
	res.send('hey! you made a post api call');
	});
	
app.put('/', function (req, res) {
	res.send('hey! you made a put api call');
	});
	
app.delete('/', function (req, res) {
	res.send('hey! you made a delete api call');
	});
	
app.listen(3000,function(){
	console.log('hey!! server started at port 3000!')
	});