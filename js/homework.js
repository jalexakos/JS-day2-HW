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

// --------------------- ANSWER FROM JOSH ---------------------------- //

function mainFoodGroups(obj) {
    for(let i = 0; i < Object.keys(obj).length; i++){
        console.log(Object.values(obj)[i])
    };
}

mainFoodGroups(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// --------------------- ANSWER FROM JOSH ---------------------------- //

// Create our Person Prototype

function Person(name,age){
    this.name = name;
    this.age = age;
    
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `This is ${this.name}, and they are ${this.age} years old.`
    }

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = () => {
        this.age++
        return 'Another year goes by...'
    }
}

let tommy = new Person('Tom Brady', 42);
let cameron = new Person('Cam Newton', 31);

console.log(tommy.printInfo());
console.log(cameron.printInfo());

// Adding to the age 
console.log(tommy.addAge());
console.log(tommy.addAge());
console.log(tommy.addAge());
console.log(tommy.printInfo());

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// --------------------- ANSWER FROM JOSH ---------------------------- //

let wordLengthCounter = (str) => {
    return new Promise((resolve,reject) => {
        if(str.length > 10){
            resolve('Big word');
        }else{
            reject('Small Number');
        }
    })
}

wordLengthCounter("Indubitably").then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
});

wordLengthCounter("tiny").then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
});