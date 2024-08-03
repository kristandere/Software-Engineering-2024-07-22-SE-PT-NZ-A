let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Omg Sea'];
seas.unshift('Adriatic Sea');

seas[0] = 'why sea';
seas[3] = 'no sea';
let lastSeas = seas.pop();
console.log(lastSeas);
console.log(seas);