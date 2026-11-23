//Understand patterns to how shapes can being drawn. 
//Displays a box, an oval, an arrow and a diamond using asterisks

 //Square Shape
let column = 9;
for (let number = 1; number <= column; number++){

	for (let row = 1; row <= number; row++){

		if (row === number || number === 9){
			console.log ("*********");
			break;
		    } else {
            console.log ("*       *");
            break;
        }
	}

}

//Oval Shape
let column2 = 9;
for (let number = 1; number <= column2; number++){

	for (let row = 1; row <= number; row++){

		if (row === number || number === 9){
			console.log ("   ***   ");
			break;
		    } else {
            console.log ("*       *");
            break;
        }
	}

}

//Arrow
let column3 = 9;
for (let number = 1; number <= column3; number++){

	for (let row = number; row === number; row++){

        switch (row) {        
            case 1: console.log ("  *  ");
            break;
            
            case 2: console.log (" *** ");
            break;
            
            case 3: console.log ("*****");
            break;

           default: console.log ("  *  ");
            }
        }
	}


//Diamond 
let column4 = 9;
for (let number = 1; number <= column4; number++){

	for (let row = number; row === number; row++){

        switch (row) {        
            case 1: console.log ("    *    ");
            break;                          
                                        
            case 2: console.log ("   * *  ");
            break;                                         
                                                      
            case 3: console.log ("  *   *  ");
            break;                               
                                                                        
            case 4: console.log (" *     * ");
            break;                              
                                                              
            case 5: console.log ("*       *");
            break;                                      
                                                
            case 6: console.log (" *     * ");
            break;                                      
                                                
            case 7: console.log ("  *   *  ");
            break;                              
                                                
            case 8: console.log ("   * *   ");
            break;                              
                                                
            case 9: console.log ("    *    ");
            break;
            
            }        
        }
	}


