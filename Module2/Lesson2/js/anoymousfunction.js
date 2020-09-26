/*
*create a normal function that are use to 

change it anonyomous function
*/

/*
function to add 1 + 2
*/

function addNumber(){
    sum();
}

/*anymomous function*/

var sum = function(){
    alert(1+2);
}

//anoymous function
//nested functions is allowed
var number1 = function() {
    return 1;
}

var number2 = function() {
    return 2;
}
//passing the arguments as functions themselves
function addTwoNumber() {
    alert(number1()+number2());
}