/**
 * Problem Statement
 * 1. Function with two arguments
 *    - arguments should be arrays of numbers
 * 2. Return one output 
 *    - output is an array of numbers
 *    - sum of the numbers provided in the input arrays
 * 
 * Input 
 * - argument 1 - array of numbers, example [1,2]
 * - argument 2 - array of numbers, [2,3]
 */

/**
 * array1 is not equal in length with array2 
 * array1 is equal in length with array2
 */


//  var array1 = [8,9]; / single dimensional arrays 
//  var array2 = [10,11];

/**
 * Map  executes a function (that you write), on every element of an array
 * 
 * I need to add every element of array 1 with every element of array 2 on the same corresponding index
 */

function sumOfArray(array1, array2) {
    var array3 = array1.map(function(value, index){
        return array2[index]; + value;;
    })
}

/**
 * More functions that an array supports
 * 
 * reverse, join, slice 
 */
var array = [1,2,3,4,5,6];

/**
 * Map function for array
 * 
 * Function that you can execute on all elements of an array individually
 * 
 * Problem Statement
 * Add 1 to every number in the array
 * 
 * Map function has three arguments
 * 1. Value of each element - mandatory (compulsary)
 * 2. Index of the element 
 */
 var mappedvalues = array.map(function(value){
    return value+=1;
 }) 
 console.log(mappedvalues);

