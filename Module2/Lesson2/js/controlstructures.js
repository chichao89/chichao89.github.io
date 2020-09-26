/**
 * Types of control structures
 * 1.if
 *  The argument passed to the function is a number; check 
 * 2.if.. else...
 * 3.if.. else if
 * 4.switch
 */

 function ifControl(inputNumber)
 {
    if (arguments.length>0 && inputNumber > 10){
        alert("yes the number is greater than 10!");
    }else if (inputNumber > 5){
        alert("no the number is greater than 5");
    }
 }

function switchControl(inputNumber)
{
 switch(inputNumber) {
    case 1:
      // code block
      alert("1");
      break;
    case 2:
      // code block
      alert("2");
      break;
    case 3:
        alert("3");
        break;
    default:
        alert("4");
      // code block
    }
}
