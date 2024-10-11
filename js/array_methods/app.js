// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled)
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((num, index, array) => {
//     console.log(index)
//     console.log(array)
//     return num % 2 === 0
// });
// console.log(evenNumbers)

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum)

// const numbers = [1, 2, 3];
// const doubled = []
// numbers.forEach(num => {
//     const product = num * 2
//     doubled.push(product)
// });
// console.log(doubled)

// const numbers = [1, 2, 3, 4];
// const firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven)

// const numbers = [1, 2, 3, 4];
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven)

// const numbers = [2, 4, 6];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven)

// const numbers = [4, 2, 5, 1, 3];
// console.log(numbers)
// numbers.sort((a, b) => {
//     console.log(a, b, a-b)
//     return a - b
// });
// console.log(numbers)

const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.filter((num) => num % 2 === 0);
// const newArray2 = newArray.map((num) => num * 2);
// const newArray3 = newArray2.reduce((total, num) => total + num);
const newArray = numbers.filter((num) => num % 2 === 0).map((num) => num * 2).reduce((total, num) => total + num);
console.log(newArray);
