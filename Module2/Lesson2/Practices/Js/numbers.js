/*
** Create a function to find all numbers in a array containing variables of multiple types
*  Behavior: create a array
*  this array can have multiple input types
*  Output : all numbers to be found
*  Problem statement
*  Function - find all numbers
*  Logic - 
*  Cases - an array -> [1,false.'cc',2,3]
*  Array - an array that contains values of multiple types
*  output-> (1,2,3)
//Create a function to find all numbers in a array containing variables of multiple types

/**
 * Problem statement - Create a function to find all numbers in a array containing variables of multiple types
 * Function - find all numbers
 * Logic - all numbers from all the values present in the array
 * Cases
 * 1. If you encounter a number then store it
 * 2. FOr everything else do not bother
 * 
 * Input - an array -> [1,false, 'vaibhav', 2, 3, true, 'vashishtha']
 *  variables (values)
 *  of multiple types (string, boolean, numnber)
 * Output -> [1, 2, 3]
 */

 /**
  * Step 1 - write basic js code
  * Step 2 - use array functions 
  * Step 3 - reduce the amount of code 
  */

//var myArray = [1,"hello",true,3];

// function mType(myArray){
//     var output= [];
//     var outputCounter = 0;
//     for(counter=0; counter <= myArray.length ;counter++)
//     {
//         if(typeof myArray[counter] ==='number')
//         {
//             output[outputCounter] = myArray[counter];
//             outputCounter++;
//         }
              
//     //to return at the end of the for loop
//     }
//     return output;
// }

    // var result = myArray.filter(function(value)
    // {
    //     return typeof value === 'number';
    // });


// let sum = (a , b) => a + b;

// var oldName = function (firstName, lastName) {
//     return 'my Name is ' + firstName + lastName;
// }

// const fullName = (firstName, lastName) => {
//     return `myName is ${1>2} ${lastName}`;
// }

// console.log(oldName('Chi Chao','See'));
// console.log(fullName('Chi Chao','See'));

// let x = 0;
// console.log(Boolean(x));

// let make = true;
// let makec = false;
// let makes = false;
// let makef = make + makec;
// let makei = makec + makes;
// console.log(make);
// console.log(makec);
// console.log(makef);
// console.log(makei);

// let a = "ABC";
// let g = "A";
// console.log(g.codePointAt(0));
// console.log(a.codePointAt(0));
//ascill character
//object destruction
// const user = {id: 12,
//               name:'Chi Chao' };
// const {id, name} = user;//dun have to write this code
// //can auto assign by EMCA6
// let id = user.id;
// let name = user.name;

// console.log(id);
// console.log(name);


// const array1 = [1,2,3];
// const [arrayX, arrayY] = array1;
// console.log(arrayX);
// console.log(arrayY);
 
//rest will show the rest of the arguments
//const numbers = [8,11,21,31,5,13,15];
//Const [abc,xyz, …rest] = numbers;
//It will show the numbers from the 3rd element onwards all the way.. rest does not know where the end is 
//so cannot find second last, last variable
//console.log(rest)

const person =
{
  age: 31,
  displayName : 'Javier',
  fullName :{
    firstName:"chichao",
    lastName :"see"
  },
  school: ['ASchool','BSchool']
};

const{age,displayName,fullName,school} = person;
console.log(age);
console.log(displayName);
console.log(fullName.firstName);
console.log(fullName.lastName);

let sum = (number1, number2) => {
      return number1 + number2;
}

//...args ...(spread operators)
let sum = (...args) => {
    return args.reduce((start,value) => 
    {
      return start+value;
    },0);
};
//slice/splice
//


