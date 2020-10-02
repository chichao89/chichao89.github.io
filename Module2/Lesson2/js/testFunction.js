/**to create a full name of a person from first name and last name */


function createFullname(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    alert(firstName + ' ' + lastName);
}

/**anyomous function - not to be used by anyone/anywhere */
var myFullName = function(firstName, lastName){
    return firstName + "" + lastName;
}