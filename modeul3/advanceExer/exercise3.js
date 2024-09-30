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