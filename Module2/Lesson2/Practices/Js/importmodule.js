/**
 * 1. Create a js file to create a module
 * 2. create another js file to use it
 * 
 * 3. Create a module 
 * 4. Export the module so i can use it
 * 5. Import the module in the second js file
 * 6. use the module
 */

import{add,minus,mul,div} from "./modules.js"
console.log(`${"Addition"}`,add(1,2));
console.log(`${"Substract"}`,minus(10,5));
console.log(`${"Multiplication"}`,mul(10,5));
console.log(`${"Division"}`,div(20,5));


