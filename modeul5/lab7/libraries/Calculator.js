const Logger = require('./Logger'); 

class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 10000);
    }

    add(num1, num2) {
        const value = num1 + num2;
        Logger.log('Addition performed', this.id, value);
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2;
        Logger.log('Subtraction performed', this.id, value);
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2;
        Logger.log('Multiplication performed', this.id, value); 
        return value;
    }

    divide(num1, num2) {
        const value = num1 / num2;
        Logger.log('Division performed', this.id, value); 
        return value;
    }
}

module.exports = Calculator;