//Get two unique integers from user
//Square both the integers, and display it
//Sum the squared and display
//Difference amongst the squared and display it

const prompt = require('prompt-sync')();

let number1 = (prompt("Enter first integer: "));
let number2 = (prompt("Enter second intger: "));

let numberOneSquare = number1 * number1;
let numberTwoSquare = number2 * number2;

let sumOfSquare = numberOneSquare + numberTwoSquare;
let differenceOfSquare = numberOneSquare - numberTwoSquare;

console.log(numberOneSquare);
console.log(numberTwoSquare);
console.log(sumOfSquare);
console.log(differenceOfSquare);


