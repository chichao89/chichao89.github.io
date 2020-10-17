class Person {
    constructor(name) {
        this.name = name;
    }
}


class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    printName() {
        console.log(this.name, this.age);
    }
}

var student = new Student('Vaibhav', 35);

/**
 * Car
 * 
 * SUV is a type of car
 * MPV
 * Hatchback
 * 
 * SUV -> GLA is an object of SUV, HUMMER
 */

 //Old format
 function Car(brand) {
    this.brand = brand;
 }

 function SUV(brand, isAllTerrain) {
    this.brand = brand; // update this to older way of using Car constructor
    this.isAllTerrain = isAllTerrain;
 }

 SUV.prototype = new Car();
 SUV.prototype.constructor = Car;
 var GLA = new SUV('Mercedes', true);

//New format
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

class SUV extends Car {
    constructor(brand, isAllTerrain) {
        super(brand);
        this.isAllTerrain = isAllTerrain;
    }
    isThisAnAllTerrainVehicle() {
        return this.isAllTerrain;
    }
}

let GLA = new SUV('Mercedes', true);
console.log(GLA.isThisAnAllTerrainVehicle());
