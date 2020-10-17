//modules are basic behaviors exposed as functions
//step3
function sum(input1, input2){
    return input1 + input2;
}

function subtract(input1, input2){
    return input1 - input2;
}

function multiply(input1, input2){
    return input1 * input2;
}

function divide(input1,input2){
    return input1/input2;
}
//step4// they have become modules
//1 module only
//export default add
export {
            //alias
    sum as add,
    subtract as minus,
    multiply as mul,
    divide as div
} 