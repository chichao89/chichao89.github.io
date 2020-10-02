// function animal(name){
//     this.name = name;
// }

// function barks(){
//     alert("dogs bark");
// }

// function neys(){
//     alert("horse neys");
// }

// function meow(){
//     alert("meows");
// }

/**
 *  a dog barks -> create a dog class
 * 1. What is my entity/class
 * 2. What is the property of my entity
 * 3. What is the behavior 
 * 4. What is my class or entity type of - Dog is it of type animal
 * 5. Can i use common attributes from the type of the entity
 * 6. Dog are all animals
 * 7. Animal
 * 8. property
 * 9. Behavior
 */

//prototype add a property/behavior
//all behaviors are functions
//class / constructor for that class
//Class denote with captital


//constructor creates the instance of objects / instance of the class
function Animal(sound){
    this.sound = sound;
}

function Dog(isDogAPet){
    //property
    this.isDogAPet = isDogAPet;
}
//Dog is an animal
//prototype is always object, not a function
//inheritance
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

//function
//Dog.prototype.function = barks();

//an object of class Dog
var dog1 = new Dog(true);
