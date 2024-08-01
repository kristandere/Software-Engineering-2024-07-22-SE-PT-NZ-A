let a = 5;
let b = 6;

function sum(a, b){
    console.log(a - b)
    console.log(a + b)
    console.log(a / b)
    console.log(a * b)
}
sum(a, b)

function sayHello(){
    console.log("hello"+"kris")
}

sayHello()

function outer() {
    const name = "Kris";
  
    function inner() {
      console.log(`Hello, ${name}!`);
    }
  
    return inner;
  }
  
  const greeting = outer();
  greeting();