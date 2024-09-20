// console.log("hello from script.js")

// let firstName = "ashur"
// const lastName = 'warda'

// let myNumber = 7
// const PI = 3.14

// let isOld = false
// let isYoung = true

// const myArray = ["ashur", 7, true]

// const myObject = {name: "ashur", number: 5.4, isTrue: true }

// let sum = 5 + 3

// let age = 17;
// let hasLicense = true;

// // Jämförelse och logisk Och (&&)
// let isAdult = age >= 18;
// let hasValidLicense = hasLicense;

// // Logisk Och (&&) på variabler
// let isAdultWithLicense = isAdult && hasValidLicense;

// console.log("Personen är myndig:", isAdult);
// console.log("Personen har körkort:", hasValidLicense);
// console.log("Personen är myndig och har körkort:", isAdultWithLicense);


// let variable;
// console.log(variable); 

// let nullObject = null;
// console.log(nullObject);

// let age = 10;

// if (age >= 18) {
//     console.log("Personen är myndig.");
// }

// let time = 14;

// if (time < 12) {
//     console.log("God morgon!");
// } else if (time < 18) {
//     console.log("God eftermiddag!");
// } else {
//     console.log("God kväll!");
// }

// let isRaining = false;

// if (isRaining) {
//     console.log("Det regnar, ta med ett paraply!");
// } else {
//     console.log("Det är inte regnigt, njut av dagen!");
// }


// let temperature = 25;
// let isSunny = true;

// if (temperature > 30) {
//     if (isSunny) {
//         console.log("Det är väldigt varmt och soligt!");
//     } else {
//         console.log("Det är väldigt varmt, men det är inte soligt.");
//     }
// } else if (temperature > 20) {
//     console.log("Det är varmt idag.");
// } else {
//     console.log("Det är svalt idag.");
// }

// const costPerCup = 12
// const amountBeforeDiscount = 1000
// const numberOfCups = 84
// // let hasDiscount = false

// const amountSpent = numberOfCups * costPerCup

// const hasDiscount = amountSpent >= amountBeforeDiscount

// if (hasDiscount) {
//     console.log(`You are eligable for a discount because you have bought ${numberOfCups} cup (spent ${amountSpent} kr)`)
// } else {
//     const cupsUntilDiscount = (amountBeforeDiscount - amountSpent) / costPerCup
//     console.log(`You need to buy ${cupsUntilDiscount} cups until you are eligable for discount`)
// }


// const day = "Sunday"
// const startTime = 8.5
// const endTime = 17
// const hourlySalary = 100

// const maximumHours = 12
// const extraHoursCountsFrom = 8

// const totalHours = endTime - startTime

// let extraHours = 0
// let isWeekend = false

// if(totalHours > extraHoursCountsFrom) {
//     extraHours = totalHours - extraHoursCountsFrom
// }

// if(day === "Saturday" || day === "Sunday") {
//     isWeekend = true
// }

// if(totalHours < maximumHours) {
//     let normalSalary
//     let extraSalary
//     let weekendSalary
//     if(isWeekend) {
//         normalSalary = totalHours * hourlySalary
//         extraSalary = 0
//         weekendSalary = normalSalary
//     } else {
//         normalSalary = totalHours * hourlySalary
//         extraSalary = extraHours * (hourlySalary * 0.5)
//         weekendSalary = 0
//     }

//     const totalSalary = normalSalary + extraSalary + weekendSalary
//     console.log(`Your total salary is: ${totalSalary}`)
//     console.log(`Normal Salary: ${normalSalary}`)
//     console.log(`Extra hours Salary: ${extraSalary}`)
//     console.log(`Weekend Salary: ${weekendSalary}`)
// } else {
//     console.log(`Please contant your Union. You should not work more than ${maximumHours} hours`)
// }


// function greet(name) {
//     console.log("Hej, " + name + "!");
// }

// greet("Alice"); // Resultat: Hej, Alice!
// greet("Bob");   // Resultat: Hej, Bob!

// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 5);
// console.log(result); // Resultat: 8


// let multiply = function(x, y) {
//     return x * y;
// };

// console.log(multiply(4, 10)); // Resultat: 24

// let square = (num) => {
//     return num * num;
// };

// console.log(square(9)); // Resultat: 81

// function sayHello() {
//     let greeting = "Hej!";
//     console.log(greeting);
//     return greeting
// }

// const greeting = sayHello(); // Resultat: Hej!
// console.log(greeting); // Detta skulle ge ett fel eftersom 'greeting' är inte definierad här.


// function greeting(lastName, name="Unknown", age=23 ) {
//     // return "Hello, " + name
// 	return `Hello, ${name} ${lastName} ${age}`
// }

// console.log(greeting("Ashur"))
// // Writes: "Hello, Ashur"

// console.log(greeting("warda", "Ashur", 33))
// console.log(greeting())
// // Writes: "Hello, Unknown"


// const favoriteDrink = "Coffee"
// const message1 = `Your favorite drink is ${favoriteDrink}`
// const message2 = "Your favorite drink is" + favoriteDrink

// console.log(message1)
// console.log(message2)








