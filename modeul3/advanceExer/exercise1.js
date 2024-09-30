
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
