
let number = Number( prompt ("Enter any Number: "));

	for (let column = 1; column <= number; column++){
	    //if (column <= number) {
	    
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
        //} else {
        //break;
        //}
}
