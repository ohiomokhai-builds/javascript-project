
const prompt = require('prompt-sync')();

let number = Number(prompt("Enter any number: "));

        if (number % 3 === 0) {
		console.log(number, "is divisible by 3!");
	}
	else {
		console.log(number, "is not divisible by 3!");
	}

