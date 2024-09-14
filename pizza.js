
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function startPreparingPizza() {
    await delay(1000);
    console.log('Started preparing pizza ...');
}

async function madeBase() {
    await delay(2000);
    console.log('Made the base');
}

async function addedSauceAndCheese() {
    await delay(3000);
    console.log('Added the sauce and cheese');
}

async function addedToppings() {
    await delay(4000);
    console.log('Added the pizza toppings');
}

async function cookedPizza() {
    await delay(5000);
    console.log('Cooked the pizza');
}

async function pizzaReady() {
    await delay(6000);
    console.log('Pizza is ready');
}


async function makePizza() {
    await startPreparingPizza();
    await madeBase();
    await addedSauceAndCheese();
    await addedToppings();
    await cookedPizza();
    await pizzaReady();
}

makePizza();