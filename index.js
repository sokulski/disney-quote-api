/* 
 * Primary file for the API
 * This is a bare-bones API that returns a quote by Walt Disney when called.
*/


// Dependencies
var http = require('http');
var quotesLib = require('./lib/quotes');

// App object
var app = {};

// Instantiate the HTTP server
var httpServer = http.createServer(function(req,res) {
	var allQuotes = quotesLib.allQuotes();
	
	var numberOfJokes = allQuotes.length;
	var randomNumber = app.getRandomNumber(1,numberOfJokes);
	var selectedQuote = allQuotes[randomNumber - 1];
	
	// Conert the payload to a string
	var payload = { 'quote' : selectedQuote, 'attributedTo' : 'Walt Disney' };
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

// Get a random number
app.getRandomNumber = function(min,max){
    min = typeof(min) == 'number' && min % 1 === 0 ? min : 0;
    max = typeof(max) == 'number' && max % 1 === 0 ? max : 0;
    return Math.floor(Math.random()*(max-min+1)+min);
};
