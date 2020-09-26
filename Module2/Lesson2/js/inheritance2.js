/*Create a person class with common attribute (firstname,lastname)*/
//prototype inherited from instances

//step1
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//step2
function Teacher(firstName,lastName,institudeName, teacherId){
        //step 5 calls the constructor of the class
        Person.call(this,firstName,lastName);
        this.institudeName = institudeName;
        this.teacherId = teacherId;
}

//step3 //inheritance
Teacher.prototype = new Person();
Teacher.prototype.constructor = new Teacher;

//step4 create object of new teacher class;

var teacher = new Teacher('hello','see','mages',30);
