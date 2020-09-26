//Global scope variable
// var name = 'Vaibhav';

// var fullName = (function() {
//     var name = 'Vai';
//     return function() {
//         name = name + ' ' + 'Vashishtha'; 
//         console.log(name);
//     };
// })();

// alert(fullName());

/**
 * To create a process to update a counter
 */
//var counter = 0;

/**
 * Based on the option increment / decrement a counter
 * @param {*} option 
 */
// function updateCounter(option) { //step1
//     var counter = 0;//local scope //step2
//     if (option == 'increment') {
//         counter++;
//     } else if (option == 'decrement') {
//         counter--;
//     }
// }
// var randomCounter = function(){
//     counter = 100;
// }

// randomCounter();

//create a variable as an anyomous function
var updateCounter = (function(){
    var counter = 0;
    return function(){
        counter++;
        return counter;
    };
})();

var count = updateCounter();
alert (count);

// function getCounterValue() {
//     return counter; //global counter;
//     return updateCounter.getCounterValue.counter;
// }