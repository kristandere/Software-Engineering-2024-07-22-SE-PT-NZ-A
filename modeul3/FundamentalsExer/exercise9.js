let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports]; 

moreSports.push('Billiards'); 
moreSports.unshift('Rugby'); 

let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Dingo';

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = { ...cat1 };
cat2.name = 'Tuffy';

console.log(dog1);
console.log(dog2);
console.log(cat1);
console.log(cat2);
console.log(teamSports); 
console.log(moreSports); 