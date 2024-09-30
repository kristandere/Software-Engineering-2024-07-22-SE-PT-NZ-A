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
function debounce(func, ms = 1000) {
    let timeoutId;

    return function(...args) {
        
        clearTimeout(timeoutId);

       
        timeoutId = setTimeout(() => {
            func.apply(this, args); 
        }, ms);
    };
}


function printMe(msg) {
    console.log(msg);
}


printMe = debounce(printMe); 

setTimeout(() => printMe('First call'), 100);
setTimeout(() => printMe('Second call'), 200);
setTimeout(() => printMe('Third call'), 300);

//4

function printFibonacci(limit) {
    let count = 0;
    let [a, b] = [1, 1];

    const intervalId = setInterval(() => {
        if (count < limit) {
            console.log(a);
            [a, b] = [b, a + b]; 
            count++;
        } else {
            clearInterval(intervalId); 
        }
    }, 1000);
}


printFibonacci(10);

function printFibonacciTimeouts(limit) {
    let count = 0;
    let [a, b] = [1, 1];

    function printNext() {
        if (count < limit) {
            console.log(a);
            [a, b] = [b, a + b]; 
            count++;
            setTimeout(printNext, 1000); 
        }
    }

    printNext();
}

printFibonacciTimeouts(10);

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

Function.prototype.delay = function(ms) {
    const originalFunction = this; 
    return function(...args) {
        setTimeout(() => {
            originalFunction.apply(this, args); 
        }, ms);
    };
};

function multiply(a, b, c = 1, d = 1) {
    console.log(a * b * c * d);
}

const delayedMultiply = multiply.delay(500); 
delayedMultiply(5, 5); 

const delayedMultiplyFour = multiply.delay(1000); 
delayedMultiplyFour(2, 3, 4, 5);

//7

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


Person.prototype.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};


const person1 = new Person('James Brown', 73, 'male');
const person2 = new Person('Alice Smith', 30, 'female');

console.log('person1: ' + person1);
console.log('person2: ' + person2); 

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender); 
    this.cohort = cohort;
}


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.toString = function() {
    return `${Person.prototype.toString.call(this)}, Cohort: ${this.cohort}`;
};


const student1 = new Student('John Doe', 20, 'male', 'Cohort A');
const student2 = new Student('Jane Roe', 22, 'female', 'Cohort B');

console.log('student1: ' + student1); 
console.log('student2: ' + student2);
//8

class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }

    display() {
        let date = new Date();

        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

const myPrecisionClock = new PrecisionClock('Precision clock:', 500); // Ticks every 500 ms
myPrecisionClock.start();

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }

    display() {
        super.display();
        const currentTime = new Date();
        const formattedTime = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;

        if (formattedTime === this.wakeupTime) {
            console.log('Wake Up!');
            this.stop(); 
        }
    }
}

const myAlarmClock = new AlarmClock('Alarm clock:', '00:05');
myAlarmClock.start();

//9
function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20000) + 1000; 
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay); 
            } else {
                reject(delay); 
            }
        }, delay);
    });
}

randomDelay()
    .then(delay => console.log(`There appears to have been a delay of ${delay} ms.`))
    .catch(delay => console.error(`Delay of ${delay} ms was odd; promise rejected.`));

//10