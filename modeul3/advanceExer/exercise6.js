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