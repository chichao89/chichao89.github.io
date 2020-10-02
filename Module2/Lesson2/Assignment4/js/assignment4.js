/**
* Car - Super Class
*
* SUV - Type of car
* MPV
* Hatchback
*
* SUV
* Merc GLA (Object of a type)
* BMW X3
*
* 1. Define the properties and behviors of each of these classes
* 2. Create the classes
* 2. Create the inheritance relationship between the classes
* 4. Create objects of the different types of cars
*/
//super class
function Car(carStyle,carColor,carNumberofDoors){
    this.carStyle = carStyle;
    this.carColor = carColor;
    this.carNumberofDoors = carNumberofDoors;
}

//method
Car.prototype.hornSound =  function(){
    return "Honk";
};

//sub class
function SUV (carStyle,carColor,carNumberofDoors,make) {
    Car.call(this,carStyle,carColor,carNumberofDoors);
    this.make = make;
}

function MPV (carStyle,carColor,carNumberofDoors,make,isElectric) {
    Car.call(this,carStyle,carColor,carNumberofDoors);
    this.make = make;
    this.isElectric = isElectric;
}


function Hatchback(carStyle,carColor,carNumberofDoors,make){
    Car.call(this,carStyle,carColor,carNumberofDoors);
    this.make = make;
}

//creating an inheritance relation of the child to parent

SUV.prototype = new Car();
SUV.prototype.constructor = new SUV;

MPV.prototype = new Car();
MPV.prototype.constructor = new MPV();

Hatchback.prototype = new Car();
Hatchback.prototype.constructor = new Hatchback;


//creating an object of suv class
var suv1 = new SUV('SUV','Black',4,'BMW X6');
var mpv1 = new MPV('MPV', 'Yellow', 4, 'Toyota Previa', true);
var hatchback1 = new Hatchback('Hatchback','Red', 4 , 'Volkswagen Golf');


function pressSUV(){
    document.getElementById("carStyle").innerHTML =
    " This is a " + suv1.carStyle + ".";
    document.getElementById("color").innerHTML=
    " It is " + suv1.carColor + " color. ";
    document.getElementById("noOfDoors").innerHTML=
    " It has " + suv1.carNumberofDoors + " doors.";
    document.getElementById("make").innerHTML=
    " The brand is " + suv1.make + " and the sound horn is " +  suv1.hornSound();       
    }

    function pressMPV(){
        document.getElementById("carStyle1").innerHTML =
        " This is a " + mpv1.carStyle + ".";
        document.getElementById("color1").innerHTML=
        " It is " + mpv1.carColor + " color. ";
        document.getElementById("noOfDoors1").innerHTML=
        " It has " + mpv1.carNumberofDoors + " doors.";
        document.getElementById("make1").innerHTML=
        " The brand is " + mpv1.make + " and the sound horn is " +  mpv1.hornSound();       
        document.getElementById("isElectric").innerHTML=
        " Is it electric? " + mpv1.isElectric;          
    }

    function pressHatchBack(){
        document.getElementById("carStyle2").innerHTML =
        " This is a " + hatchback1.carStyle + ".";
        document.getElementById("color2").innerHTML=
        " It is " + hatchback1.carColor + " color. ";
        document.getElementById("noOfDoors2").innerHTML=
        " It has " + hatchback1.carNumberofDoors + " doors.";
        document.getElementById("make2").innerHTML=
        " The brand is " + hatchback1.make + " and the sound horn is " +  hatchback1.hornSound();             
    }
    
    

  

