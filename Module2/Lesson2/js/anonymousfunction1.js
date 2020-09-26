/**
 * create a normal function that we are used to
 * 
 * change it anonymous function
 */

/**
 * A function to add 1 & 2
 */
function addNumbers() {
    sum();
}

/**
 * Anonymous function
 */
var sum = function() {
    alert(1+2);
}

var number1 = function() {
    return 1;
}
var number2 = function() {
    return 2;
}

function addTwoNumber() {
    alert(number1()+number2());
}