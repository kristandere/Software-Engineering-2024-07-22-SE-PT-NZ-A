function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


Person.prototype.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};


const person1 = new Person('James Brown', 73, 'male');
const person2 = new Person('Alice Smith', 30, 'female');

console.log('person1: ' + person1);
console.log('person2: ' + person2); 

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender); 
    this.cohort = cohort;
}


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.toString = function() {
    return `${Person.prototype.toString.call(this)}, Cohort: ${this.cohort}`;
};


const student1 = new Student('John Doe', 20, 'male', 'Cohort A');
const student2 = new Student('Jane Roe', 22, 'female', 'Cohort B');

console.log('student1: ' + student1); 
console.log('student2: ' + student2);