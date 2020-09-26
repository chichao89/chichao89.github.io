/** 
 * Types of control strcutures
 * 1. If
 *    The argument passed to the function is a number; check it it greater than 5
 * 2. if... else...
 * 3. if ... else if
 * 4. Switch
 */

 /**
  * if condition is true then execute a statement
  */
 function controlStructure(inputNumber) {
     console.log('inside function');
    switch(inputNumber) {
        case 1: {
            console.log('inside switch case 1')
            alert("Hi!");
            break;
        }
        case 2: {
            console.log('inside switch case 2')
            alert("bye!");
            break;
        }
        case 3: {
            console.log('inside switch case 3')
            alert("hola!");
            break;
        }
        default: {
            console.log('inside switch case default');
            break;
        }
    }
 }