// Task 1: Creating and logging an object
/*
Create an object named `person` with properties: `name` set to "Alex" and `age` set to 30.
Log this object to the console.
*/

// Write your object here
class Person {
    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
    }

    greet() {
        return `Hello, My name is ${this.firstName}`;
    }
}

const person1 = new Person("Alex", 30);
  console.log(person1);


// Task 2: Accessing Object Properties
/*
Access and log the `name` and `age` from the `person` object.
*/

// Write your code here
console.log(person1.firstName, person1.age)

// Task 3: Modifying Object Properties
/*
Update the `person` object: set the `age` to 31. Then, add a new property `country` set to "Canada".
Log the updated object.
*/

// Write your code here
person1.age = 31;
person1.country = "Kanada";
console.log(person1);

// Task 4: Nested Objects
/*
Create an object `student` with properties: `name` as "Emily" and `details` as an object with properties `age` set to 22, and `course` set to "JavaScript".
Log the `course` of the `student`.
Expected outcome: "Course: JavaScript"
*/

// Write your object and code here

class Details{
    constructor(age, course){
        this.age = age;
        this.course = course;
    }
}

class Student {
    constructor(name, details){
        this.name = name;
        this.details = details;
    }
}

const student1Details = new Details(22, "JavaScript");
const student1 = new Student("Emily", student1Details);

console.log(student1);

// Task 5: Deleting Properties
/*
From the `person` object, delete the `age` property. Log the resulting object.
Expected outcome: { name: "Alex", country: "Canada" }
*/

// Write your code here

delete person1.age;
console.log(person1.age);

// Task 6: Object Keys and Values
/*
Log all property names (keys) of the `person` object, then log all property values.
Expected outcomes:
Keys: name, country
Values: Alex, Canada
*/

// Write your code here
console.log("Keys: " + Object.keys(person1));
console.log("Values: " + Object.values(person1));


// Task 7: Using Object Methods
/*
Define a method inside the `person` object named `greet` that returns "Hello, my name is Alex".
Invoke this method and log the outcome.
Expected outcome: "Hello, my name is Alex"
*/

// Modify your person object and write your method invocation here
console.log(person1.greet());