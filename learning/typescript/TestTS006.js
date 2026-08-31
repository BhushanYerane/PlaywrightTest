"use strict";
let person = {
    name: "lala jee",
    mobile: 12345,
    email: "lalaJEE12@qatest.com"
};
console.log(person);
let empDetails = {
    id: "FS1011",
    empPhNum: 98120,
    emailid: "qasw@qatest.com"
};
console.log(empDetails);
let employee = {
    name: "Bhushan",
    age: 35,
    mobile: 9876543210,
    email: "bhushan@test.com"
};
console.log(employee);
let myCar = { brand: "Toyota", model: "Corolla", type: "SUV" };
let anotherCar = { brand: "Honda", model: "Civic", color: "Red" };
let car = { brand: "Nissan ", model: "PathFinder" };
console.log(myCar);
console.log(anotherCar);
console.log(car);
const greet = (name) => {
    return `Hello ${name}`;
};
console.log(greet("Bhushan"));
let add = (x, y) => {
    return x + y;
};
console.log(add(10, 20));
const login = (user, pass) => {
    return user === "admin" && pass === "admin123";
};
console.log(login("admin", "admin123"));
// with and without interface function
function add1(a, b) {
    return a + b;
}
let addFun = (a, b) => a + b;
console.log(addFun(10, 10));
console.log(add1(10, 15));
let show = (name) => `Hello ${name}! "GoodBye"`;
console.log(show("Lala JEE"));
class Dog {
    name;
    sound;
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says: ${this.sound}`);
    }
}
class Cat {
    name;
    sound;
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says: ${this.sound}`);
    }
}
let dog = new Dog("Buddy", "woof");
dog.makeSound();
let cat = new Cat("Mini", "Meow");
cat.makeSound();
class TestPayment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    processPayment() {
        return `Payment of $${this.amount} processed in test mode.`;
    }
}
const testPayment = new TestPayment(100);
console.log(testPayment.processPayment());
