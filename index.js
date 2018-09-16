/* 
 * Primary file for the API
 * This is a bare-bones API that returns a quote by Walt Disney when called.
*/


// Dependencies
var http = require('http');
var quotesLib = require('./lib/quotes');

// Instantiate the HTTP server
var httpServer = http.createServer(function(req,res) {
	var allQuotes = quotesLib.allQuotes();
	
	// Conert the payload to a string
	var payload = allQuotes;
	var payloadString = JSON.stringify(payload);
	
	// Return the response
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200);
	res.end(payloadString);
	
});

// Start the HTTP server
httpServer.listen(3000, function() {
	console.log("The server is listening on port 3000");
});
