//this is going to create a server
const express = require('express')
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'))

//the request and the response. request always goes first
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
})

//running this on a local port

http.listen(3000, function(){
	//we leave a message inside of the function to know that we are on the server
	console.log("You are listening on port 3000!")
})