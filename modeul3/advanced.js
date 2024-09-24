//1
function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = 0;
    return function() {
    currentCount += incrementBy;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    counter1(); // 1
    counter1(); // 2

    let counter2 = makeCounter(5);
    counter2(); 
    counter2(); 

//2 #4 t0 #1 function is called directly then following the delayMsg
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

const timeoutId = setTimeout(delayMsg, 11000, '#5: Delayed by 11000ms');
clearTimeout(timeoutId);

//3

//4

//5
 let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

setTimeout(() => car.description(), 200);


let clonedCar = { ...car, year: 2020 };


clonedCar.description(); 


setTimeout(car.description.bind(car), 200);

setTimeout(car.description.bind(car), 200); 

let updatedCar = { ...car, make: "Ferrari" };
setTimeout(car.description.bind(updatedCar), 200);

//6

//7

//8

//9

//10