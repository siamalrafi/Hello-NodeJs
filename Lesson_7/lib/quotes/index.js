/* 
Title: Quotes Library  
Description: Quotes library is a simple library that provides random quote from my given file by using node.
Author: Siam Al Rafi

*/

const quotes = {};

function allQuotes() {
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    return arrayOfQuotes;
}





module.export = quotes;

