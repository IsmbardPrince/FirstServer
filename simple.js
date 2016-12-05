var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleReq1(request, response) {
	response.end("Your hair is perfect!");
}

function handleReq2(request, response) {
	response.end("You outfit looks like you chose it in the dark!");
}

var server1 = http.createServer(handleReq1);

var server2 = http.createServer(handleReq2);

server1.listen(PORT1, function() {
	console.log("Now listening on port: " + PORT1);
});


server2.listen(PORT2, function() {
	console.log("Now listening on port: " + PORT2);
});