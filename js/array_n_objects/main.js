

// console.log(myVariable)
const myVariable = 4

const myArray = [1, "ashur", true, {}, myVariable]
const anotherArray = [2, 3, myArray]

// console.log(myArray)
// console.log("my index 2", myArray[2])

// myArray.forEach((item, index) => {
//     console.log(index, item)
// })

// console.log(myArray)
// myArray.push("123hello")
// console.log(myArray)
// myArray.pop()
// console.log(myArray)
// const newArray = myArray.splice(1, 3)
// console.log(newArray)

// const myArray = [1, "ashur", true, {}, myVariable]

// const myObject = {
//     0: 1,
//     1: "ashur",
//     2: true,
//     3: {},
//     4: myVariable
// }
// console.log(myObject[1])

// const anotherObject = {
//     name: "ashur",
//     myAge: 33,
// }

// console.log(anotherObject.name)

// const elem = document.createElement("p")

const document2 = {
    createElement: (tag) => {
        console.log('tag', tag)
        return "tag created " + tag
    },
    className: "",
    style: {
        backgroundColor: ""
    },
    specialVariable: myVariable,
    myArray: myArray
}

// const myelement = document2.createElement('p')

// console.log(myelement)
// document2.className = "my-class"
// document2.style.backgroundColor = "red"
// console.log("classname", document2.className)

console.log(document2.myArray)