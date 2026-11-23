
let number = 1;

	for (number = 1; number <=100; number++) {

		if (number % 3 == 0) {
			console.log("Fizz");
		}
		else if (number % 5 == 0){
			console.log("Buzz");
		}
	    
	    if (number % 3 == 0 && number % 5 == 0){
	        console.log("FizzBuzz");
	    }
}
