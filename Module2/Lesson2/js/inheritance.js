/*
Prototypal Inheritance
Example of creating inheritance (workaround)
1. create a class person
2. create a class student
3. make sure create a parent child relationship
*/

//1
function Person(firstName, lastName) {
    this.FirstName = firstName;
    this.LastName = lastName;
}

Person.prototype.getFullName = function() {
    return this.FirstName + "" + this.lastName;
}

//2
function Student(firstName,LastName, instituteName, score){
    //Person.call(this,firstname,lastName);
    this.instituteName = instituteName;
    this.score = score;
}
//3
Student.prototype = new parent();
Student.prototype.constructor = Student;

var student = ("See","Chi Chao","Mages", 30);