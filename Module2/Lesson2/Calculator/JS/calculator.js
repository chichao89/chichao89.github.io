/*
* Describe the behavior of the calculator app
* It can do different operations
* Add, Subtract, Divide, Multiplication,Clear, Calulate Output
*/
// class Operation{
//     constructor(input,output,operand)
//     {
//         this.input = input;
//         this.output = output;
//         this.operand = operand;
//     }
// }

//global variable
let finalDisplay = 0;
let currentDisplay = 0;
let initialValue = parseInt(document.getElementById("item2").textContent);
let counter = 0;
let fut = "";
let addCounter = 0;
let minusCounter =0;
let divideCounter =0;
let mulCounter = 0;
let curr =0;
let prev =0;
let firstValue = function(clicked_id){ 
    if((initialValue == 0) && (counter == 0))
    {   
        let value1 = parseInt(document.getElementById(clicked_id).textContent);
        if(isNaN(currentDisplay)){
            currentDisplay = currentDisplay + value1;
        }
        else{
            currentDisplay = value1 + initialValue;
        }
        
        counter++;   
    }
    return document.getElementById("item2").innerHTML = currentDisplay;  
}

let display1 = function display(clicked_id){
    firstValue(clicked_id);  
    if(counter == 1){
        counter++;
    }
    else if((counter>1 && counter < 17)){
        let value2 = document.getElementById(clicked_id).textContent;
        currentDisplay = currentDisplay + value2;
        counter++;
    }
    else{
        alert('More than 16 digits');
    } 
    return document.getElementById("item2").innerHTML = currentDisplay;
    
}
function add(clicked_id){
    fut  = (document.getElementById(clicked_id).textContent);
    if(fut === '+'){ 
        curr = parseInt(currentDisplay);
        currentDisplay = curr + fut;
    }
    // else{
    //     total1();
    // }
    //addCounter++;
    finalDisplay = document.getElementById("item19").innerHTML= currentDisplay;
    return document.getElementById("item2").innerHTML = currentDisplay;
}

function subtract(clicked_id){
    fut = (document.getElementById(clicked_id).textContent);
    if(fut === '-')
    {
    curr = parseInt(currentDisplay);
    currentDisplay = curr + fut;
    }
    // else{
    //     total1();
    // }
    //minusCounter++;
    return document.getElementById("item2").innerHTML = currentDisplay;
}

function mul(clicked_id){
    fut = (document.getElementById(clicked_id).textContent);
    if(fut === '*')
    {
    curr = parseInt(currentDisplay);
    currentDisplay = curr + fut;
    }
    // else{
    //     total1();
    // }
    // mulCounter == 0;
    return document.getElementById("item2").innerHTML = currentDisplay;
}

function divide(clicked_id){
    fut = (document.getElementById(clicked_id).textContent);
    if(fut === '/')
    {
    curr = parseInt(currentDisplay);
    currentDisplay = curr + fut;
    }
    // else {
    //     total1();
    // }
    // divideCounter++;
    return document.getElementById("item2").innerHTML = currentDisplay;
}

function total1(){
        let int1 = currentDisplay.split(fut);
        let value1 = parseInt(int1[0]);
        let value2 = parseInt(int1[1]);
        switch(fut){
            case "+":{
                currentDisplay = value1 + value2;
                break;
            }
            case "-":{
                currentDisplay = value1 - value2;
                break;
            }
            case "*":{
                currentDisplay = value1 * value2;
                break;
            }
            case "/":{
                currentDisplay = value1 / value2;
                break;
            }
            default: {
                currentDisplay = 0;
            }
        }
    counter = 0;
    return document.getElementById("item2").innerHTML = currentDisplay;
}

function reset(){
    counter = 0;
    currentDisplay = 0;
    return document.getElementById("item2").innerHTML = currentDisplay;
}




