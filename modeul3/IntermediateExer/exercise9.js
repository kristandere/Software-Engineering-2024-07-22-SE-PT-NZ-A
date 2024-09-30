let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

function sumSalaries(salaries) {
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}

function topEarner(salaries) {
    let maxSalary = 0;
    let topEarnerName = '';

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topEarnerName = name;
        }
    }

    return topEarnerName;
}
console.log(salaries)
console.log(sumSalaries(salaries));
console.log(topEarner(salaries));