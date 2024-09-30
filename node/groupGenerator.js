const people = [
    "Douglas",
    "Yolanda",
    "Asia",
    "Erik",
    "Sandra",
    "Wilhelm",
    "Angie",
    "Ruqia",
    "Hassanein",
    "Aisha",
    "Ellen",
    "Johan",
    "David",
    "Mattias",
    "Adel",
    "Philip",
    "Max",
    "Ibrahim",
    "Melissa",
    "William",
    "Marlo",
    "John",
    "Gabriel",
    "Adrian",
    "Leo",
    "Filip",
    "David",
    "Johan",
    "Kalle",
    "Felix",
    "Mark",
    "Björn",
    "linda",
]


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function divideArray(array, numGroups) {
    const shuffledArray = shuffleArray(array);
    const result = [];
    const groupSize = Math.floor(array.length / numGroups);
    let remainder = array.length % numGroups;

    let index = 0;
    for (let i = 0; i < numGroups; i++) {
        let size = groupSize + (remainder > 0 ? 1 : 0);
        remainder--;
        result.push(shuffledArray.slice(index, index + size));
        index += size;
    }

    return result;
}

const numGroups = 7;
const dividedArrays = divideArray(people, numGroups);
// console.log(dividedArrays);

const assignment = {
    1: dividedArrays[0],
    2: dividedArrays[1],
    3: dividedArrays[2],
    4: dividedArrays[3],
    5: dividedArrays[4],
    6: dividedArrays[5],
    7: dividedArrays[6],
}

console.log(assignment)
