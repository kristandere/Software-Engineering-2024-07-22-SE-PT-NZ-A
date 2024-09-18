//1

function ucFirstLetters(str) {
    return str
        .split(' ') 
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
        )
        .join(' '); 
}
console.log(ucFirstLetters("los angeles"))

//2

function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max - 3) + '...'; 
    } else {
        return str; 
    }
}

console.log(truncate('This text will be truncated if it is too long', 25));

//3

const animals = ['Tiger', 'Giraffe'];
animals.push('Ant', 'Bison');
animals.unshift('Cat', 'Deer');
animals.sort();
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Dog');
console.log(animals);
function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}
const matchingAnimals = findMatchingAnimals('t');
console.log(matchingAnimals);

//4 
function camelCaseForEach(cssProp) {
    const words = cssProp.split('-');
    let result = words[0];

    words.slice(1).forEach(word => {
        result += word.charAt(0).toUpperCase() + word.slice(1);
    });

    return result;
}

console.log(camelCaseForEach('margin-left')); // marginLeft
console.log(camelCaseForEach('background-image')); // backgroundImage
console.log(camelCaseForEach('display')); // display

//5

//6

function unique(duplicatesArray) {
    return Array.from(new Set(duplicatesArray));
}
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

//7

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

//8

//9

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

function sumSalaries(salaries) {
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}

function topEarner(salaries) {
    let maxSalary = 0;
    let topEarnerName = '';

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topEarnerName = name;
        }
    }

    return topEarnerName;
}
console.log(salaries)
console.log(sumSalaries(salaries));
console.log(topEarner(salaries));
//10