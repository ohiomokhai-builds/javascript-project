
const prompt = require('prompt-sync')();

let numberOne = Number(prompt("Enter first number: "));
let numberTwo = Number(prompt("Enter first number: "));

let numberOneTrippled = numberOne + numberOne + numberOne;
let numberTwoDoubled = numberTwo + numberTwo;

	if (numberOneTrippled % numberTwoDoubled == 0) {
		console.log(numberOne, "trippled", numberOneTrippled, " is a multiple is of", numberTwo, "double", numberTwoDoubled);
	} else {
		 console.log(numberOne, "trippled", numberOneTrippled, " is not a multiple is of ", numberTwo, "double", numberTwoDoubled);
		}
