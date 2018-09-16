/*
 * Title: Quotes Library
 * Description: Utility library for getting a list of Disney quotes
 *
 */
 
 
// Dependencies
var fs = require('fs');

// App object
var quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function() {
 
	// read the text file containing the jokes
	var fileContents = fs.readFileSync(__dirname+'/quotes.txt', 'utf8');
	
	// Turn the string into an array on newline
	var arrayOfQuotes = fileContents.split(/\r?\n/);
	
	// Return the array
	return arrayOfQuotes;
	
 };
 
 // Export the library
 module.exports = quotes;