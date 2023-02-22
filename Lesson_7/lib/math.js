/* 
Title: Math Library.
Description: Math Library is a simple library that provides random a number from between two numbers.
Author: Siam Al Rafi
*/


const math = {};


function randomIntFromInterval(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + min);
}







