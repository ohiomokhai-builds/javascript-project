
//Get number from user integer
//Displays its square  greater than, equal to, not equal to, or less than the number 100

const prompt = require('prompt-sync')();

let number = prompt("Enter any number: ");

let numberSquare = number * number;

//console.log(` ${number} and its square ${numberSquare} > ` + 100);

console.log(`Number Comparison to: ${number}`);
console.log(number > 100 ? true : false);
console.log(number == 100 ? true : false);
console.log(number != 100 ? true : false);
console.log(number < 100 ? true : false);

console.log(`Square of Number Comparison to: ${number}`);
console.log(numberSquare > 100 ? true : false);
console.log(numberSquare == 100 ? true : false);
console.log(numberSquare != 100 ? true : false);
console.log(numberSquare < 100 ? true : false);

