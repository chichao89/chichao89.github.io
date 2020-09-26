/**
 * Loops 
 * 1. for loop
 *    assignment / expression to assign an initial value
 *    match a condition, if the condition is true, keep executing a statement
 *    change the value from initial to a new one
 */

/**
 * Print numbers from 1 to 10 on console
 */
function testForLoop() {
    for (counter = 1; counter <= 10; counter++) {
        console.log(counter);
    }
}

/**
 * While a condition is true, keep executing 
 * Increment inside the scope of while loop
 */
function testWhileLoop() {
    var counter = 0;
    while (counter <= 10) {
        console.log(counter);
        counter++;
    }
}