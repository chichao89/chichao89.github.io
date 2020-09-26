/*
Loops
1. For Loop
assignment/expression to assign an initial value
match a condtion, if the condition is true, keep executing a statement
*/

function loopControl(inputNumber){
    for(inputNumber;inputNumber<=10;inputNumber++)
        {
            console.log(inputNumber);
        }
}

/*
while a condition is true, keep executing
increment inside the scope of the while loop
*/

function testWhileLoop(){
    var counter=0;
    while (counter <=10){
        console.log(counter);
        counter++;
    }
   
}