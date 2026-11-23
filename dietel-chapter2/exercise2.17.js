//Get three integers differently
//Displays the sum, average, product, smallest and largest of the number integers collected


const prompt = require('prompt-sync')();

let number1 = Number(prompt("Enter any number: "));
let number2 = Number(prompt("Enter second number: "));
let number3 = Number(prompt("Enter third number: "));

let sumNumber = number1 + number2 + number3;
let average = sumNumber / 3;
let product = number1 * number2 * number3;

//Largest Number
let largestNumber = number3;

	if (number2 > largestNumber) {
		largestNumber = number2;
	}
	if (number1 > largestNumber) {
		largestNumber = number1;
	}

//Smallest Number
let smallestNumber = number1;

	if (number2 < smallestNumber) {
		smallestNumber = number2;
	}
	if (number3 < smallestNumber) {
		smallestNumber = number3;
	}

console.log(`The sum of the numbers: ${sumNumber}`);
console.log(`The average of the number: ${average}`);
console.log(`The product of the number: ${product}`);
console.log(`The largest of the Numbers: ${largestNumber}`);
console.log(`The smallest of the Numbers: ${smallestNumber}`);
