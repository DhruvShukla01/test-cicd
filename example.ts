// example.ts

// A simple function without an explicit return type.
function sayHello(name: string) {
  console.log("Hello, " + name) // Missing semicolon (if your linting rule enforces them)
}

const unused_var = 42; // Variable name is not in camelCase and is unused.

class Person {
  // Property name intentionally not camelCased to check naming rules.
  first_name: string;

  constructor(first_name: string) {
    this.first_name = first_name
  }

  sayHello() {
    console.log("Hi, my name is " + this.first_name)
  }
}

const person = new Person("Alice")
person.sayHello()
