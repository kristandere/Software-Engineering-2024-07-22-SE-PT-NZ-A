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