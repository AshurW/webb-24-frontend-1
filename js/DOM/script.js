
// const myText = document.getElementById("my-text")

// const myTextId = myText.getAttribute('id')

// console.log(myText)
// console.log(myTextId)

// const myTags = document.getElementById("a")
// const ahref = myTags.getAttribute('href')

// console.log(myTags)
// console.log(ahref)

// const myClass = document.getElementsByClassName("my-class")

// console.log(myClass)

// const myTags = document.getElementsByTagName("p")

// console.log(myTags)

// const myQuery = document.querySelector("#my-text")

// console.log(myQuery)

// const myQuerys = document.querySelectorAll('.my-class')

// console.log(myQuerys)


// const allATags = document.querySelectorAll('a')
// console.log(allATags)

// allATags.forEach((element) => {
//     const attribute = element.getAttribute('href')
//     console.log(attribute)
// })

const newDiv = document.createElement('div')

newDiv.className = "my-new-div"
newDiv.id = "my-single-div"
newDiv.textContent = "my div content"

const newP = document.createElement('p')
newP.textContent = "my inner ptag"

newDiv.appendChild(newP)

document.body.appendChild(newDiv)


// newP.addEventListener('mouseover', (event) => {
//     console.log("mouseover me")
//   });

// newP.addEventListener('mouseout', (event) => {
//     console.log("mouseout")
//   });


const specialButton = document.getElementById('special-button')
const myText = document.getElementById("my-text")

let counter = 0

specialButton.addEventListener('click', (e) => {
    // counter = counter + 1
    counter += 1
    myText.textContent = counter
    myText.classList.toggle('red')
})