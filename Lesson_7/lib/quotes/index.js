/* 
Title: Quotes Library  
Description: Quotes library is a simple library that provides random quote from my given file by using node.
Author: Siam Al Rafi

*/

// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes() {
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
};

// Export the library
module.exports = quotes;






