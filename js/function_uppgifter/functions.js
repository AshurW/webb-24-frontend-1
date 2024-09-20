// function sayHi (name, greeting="goodbye") {
//     console.log(`${greeting} ${name}`)
// }

// sayHi("Jonas", "Hello")
// sayHi("Jonas")

// function multiply (x, y) {
//     return x * y
// }

// const result = multiply(10, 7)
// console.log(result)

// function even(number) {
//     console.log(number % 2)
//     return number % 2 === 0
// }

// console.log(even(10))

// “Du får rösta”, annars skall den returnera “Du får inte rösta ännu”. Använd två olika returns.

function voteRight(age) {
    let text;
    if (age >= 18) {
        text = "Du får rösta"
    } else {
        text = "Du får inte rösta ännu"
    }
    return text
}

console.log(voteRight(13))