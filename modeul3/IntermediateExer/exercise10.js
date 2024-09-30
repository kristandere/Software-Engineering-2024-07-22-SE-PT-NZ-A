const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

const secondsPassed = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

function calculateAge(birthDate) {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffTime = Math.abs(date2 - date1);
    return Math.floor(diffTime / oneDay); 
}