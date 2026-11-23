
const prompt = require('prompt-sync')();

let numberOne = Number(prompt("Enter first number: "));
let numberTwo = Number(prompt("Enter second number: "));
let numberThree = Number(prompt("Enter third number: "));
let numberFour = Number(prompt("Enter fourth number: "));
let numberFive = Number(prompt("Enter fifth number: "));

//Largest Integer

let largestInteger = numberFive;
//int secondlargest = numberFour;

	if (numberFour > largestInteger) {
	largestInteger = numberFour;
	}
	if (numberThree > largestInteger){
	largestInteger = numberThree;
	}
	if (numberTwo > largestInteger){
    largestInteger = numberTwo;
    }
	if (numberOne > largestInteger){
    largestInteger = numberOne;
    }


//Smallest Integer

	let smallestInteger = numberOne;

        if (numberTwo < smallestInteger) {
        smallestInteger = numberTwo;
        }
        if (numberThree < smallestInteger){
        smallestInteger = numberThree;
        }
        if (numberFour < smallestInteger){
        smallestInteger = numberFour;
        }
        if (numberFive < smallestInteger){
        smallestInteger = numberFive;
        }

console.log("The largest integer amongst the group of number: ", largestInteger);
console.log("The smallest integer amongst the group of number: ", smallestInteger);
