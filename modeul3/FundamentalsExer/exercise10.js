function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }
    
    const person1 = new Person('Kraz',69)
    const person2 = new Person('Kriz',96)
    
    console.log(person1);
    console.log(person2);
    
    class PersonClass {
      constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
      }
    
      canDrive() {
        return this.age >= 18;
      }
    }
      const person3 = new PersonClass('Kris', 10);
    
      console.log(person3)
      console.log(`Can Kris drive? ${person3.canDrive()}`);