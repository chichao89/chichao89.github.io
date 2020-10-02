/**
 * create a normal function that we are used to
 * 
 * change it anonymous function
 */

/**
 * A function to add 1 & 2
 */
/*
function addNumbers() {
    sum();
}*/

/**
 * Anonymous function
 */
/*
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
}*/





/*map function has 3 arguments)
/*value of each element - compulsory - store the value of the element
* index of the element
* reference
*/
var array = [1, 2, 3, 4, 5];
var arra2 = [2, 3, 4, 5, 6];
var s = array.map(x => x + 1);
console.log(s);
var mappedvalues = array.map(function(value){
    return value+=1;
})
console.log(mappedvalues);

function sumOfArray(array1,array2){
    var array3 = array1.map(x,index => x + array2[index]);
}
/*
const array1 = [1, 4, 9, 16];
const array2 = [2, 3, 4, 17];
// pass a function to map
const map1 = array1.map((x, index) => x + array2[index]);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
*/