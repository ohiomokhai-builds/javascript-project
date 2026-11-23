//let number = 4;

const prompt = require('prompt-sync')();
let number = Number(prompt("Enter any Number: "));

	for (let column = 1; column <= number; column++){
	    
		    for (let rowOne = column; ; rowOne++) {
                    if (rowOne === column) {
                    console.log(" #", " #", " #", " #");
                    } else {
                    break;
                    }
		    }
		    for (let rowTwo = column; ; rowTwo++) { 
			        if (rowTwo === column ) { 
                    console.log("# ", "# ", "# ", "# ");
                    } else {
                    break;
                    }
	           }           
}
