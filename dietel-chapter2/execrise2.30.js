const prompt = require('prompt-sync')();
let number = Number(prompt("Enter any five digits integer i.e (12345): "));

if (number < 10000 || number > 99999 ) {
    console.log("Invalid  integer requirement! It must be a five digits integer value. TRY AGAIN!!")
    }
else {

    let divisor = 10000;
    let count = 0;
    let digitOne = 0;
    let digitTwo = 0;
    let digitThree = 0;
    let digitFour = 0;
    let digitFive = 0;

	while (number > 0) {

		let div = Math.floor(number / divisor);
		let reminder = number % divisor;
        count += 1;

        switch (count) {
            case 1: digitOne += div;
            break;
            case 2: digitTwo += div;
            break;
            case 3: digitThree += div;
            break;
            case 4: digitFour += div;
            break;
            case 5: digitFive += div;
            break;
        }
        number = reminder;
        divisor = divisor / 10;
	}

console.log(`${digitOne}   `, `${digitTwo}   `, `${digitThree}   `, `${digitFour}   `, `${digitFive}   `);

}
