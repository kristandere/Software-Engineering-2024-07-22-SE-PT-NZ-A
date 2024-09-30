
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