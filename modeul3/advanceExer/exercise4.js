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