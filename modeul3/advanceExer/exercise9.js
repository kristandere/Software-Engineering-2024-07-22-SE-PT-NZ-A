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