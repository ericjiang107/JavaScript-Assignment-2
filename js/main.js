// Homework Assignment 2

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(`I'm hungry. I want ${person3.tacos}. Maybe some, ${person3.pizza[1]} pizza with a side of ${person3.shakes[0].oberwise} cookies.`)
// We can just do a console.log for each of these and print out whats inside



//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class

class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    // Use an arrow to create the printInfo method
    printInfo = () => {
        console.log(`This person is named: ${this.name} and is ${this.age} years old.`)
    }
    addAge = () => {
        return this.age += 3
    }
};
let Person1 = new Person('Andrew', 21);
console.log(Person1.printInfo())
// console.log(Person1.addAge())
let Person2 = new Person('Eric', 17);
console.log(Person2.printInfo())
console.log(Person2.addAge())




// Create another arrow function for the addAge method that takes a single parameter

// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

*/

let string = 'kamehamehas'
let count = string.length
const lengthString = (string) => {
    return new Promise( (resolve, reject) => {
        if(count > 10) {
            resolve(true)
        }else{
            reject(false)
        }
    })
}

lengthString(count)
.then( (result) => {
    console.log('Big word')
})
.catch((error) => {
    console.log("Small number")
})


// Codewars
// Number 1: https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
// Code: 
function unusualFive() {
    string = 'hello'
    return string.length
}

// Java only problem:
// Number 2: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// Code: 
function removeChar(str){
    str = str.substring(1, str.length-1);
    return str
  };
  
  
  
  