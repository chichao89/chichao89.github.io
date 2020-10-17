var book = {
    "maintitle": "JavaScript", 
    "subtitle": "The Definitive Guide",
    "for": "all audiences",   
    author: {  
    firstname: "David",  
    surname: "Flanagan"   
    }    
};
console.log(book.author.firstname);
console.log(book.maintitle);
//properties names
//false

const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

array = [...array2, ...array1]
//a) [1, 2, 3]

//b) [1, 2, 3, 4, 5, 6] 

//c) [4, 5, 6, 1, 2, 3] correct

//d) None
//4,5,6,1,2,3
console.log(array);

// const speed = 'quick'
// `The ${speed} brown fox jumps over the lazy dog.`
//syntaxerror
// 'The quick brown fox jumps over the lazy dog.'




class Animal {
constructor(sound) {
this.sound = sound
}
speak() {
console.log(this.sound)
}

}
class Dog extends Animal {
constructor(breed) {
super('bark!')
this.breed = breed
    }
}

const mydog = new Dog('pug')




 