"use strict";
function greet() {
    console.log("Hello");
}
let displayPI = function () {
    console.log("PI=3.14");
};
greet();
displayPI();
console.log("-----------#");
function getMessage() {
    return "Hello String";
}
function getNumber() {
    let num1 = [1, 2, 3, 4, 5];
    return num1;
}
console.log(getNumber());
console.log(getMessage());
console.log("-----------#");
// Using arrow Function
let getName = () => {
    return "Bhushan";
};
let getMarks = () => {
    return [85, 90, 95];
};
console.log(getName());
console.log(getMarks());
console.log("-----------#");
function greet1(name) {
    console.log(`Hello ${name}`);
}
greet1("Lala JEE");
console.log("-----------#");
function addNumbers(num2, num3) {
    let sum = num2 + num3;
    return sum;
}
let total = addNumbers(10, 20);
console.log(`Addition: ${total}`);
function findSquare(num) {
    return num * num;
}
let square = findSquare(5);
console.log(`Square: ${square}`);
console.log("-----------#");
//The return Statement Terminates the Function
function display() {
    console.log("This will be executed.");
    return "Returning from function.";
    console.log("This will not be executed.");
}
let message = display();
console.log(message);
console.log("-----------#");
let squareRoot = Math.sqrt(100);
console.log(`The Square Root is ${squareRoot}`);
let power = Math.pow(7, 3);
let band = "qazxcswe";
let upper = band.toUpperCase();
console.log(upper);
console.log("-----------#");
// TypeScript Arrow Function [let myFunction = (arg1: Type1): ReturnType => expression;]
console.log("#-----------#");
let addition = (a, b) => a + b;
let result = addition(9, 8);
console.log(result);
let join = (str1, str2) => str1 + " " + str2;
let joinResult = join("Bhushan", "Jai HO");
console.log(joinResult);
console.log("#-----------#");
let multiply3 = (a, b) => {
    let multi = a * b;
    return multi;
};
let divide1 = (a, b) => {
    a / b; // undefined out put
};
console.log(multiply3(2, 9));
console.log(divide1(9, 2));
console.log("#-----------#");
// Arrow Function With No Argument
let sayHello = () => "Hello Typescript";
console.log(sayHello);
// Arrow Function With One Argument
let calSquare = (x) => x * x;
console.log(calSquare(5));
console.log("#-----------#");
function Person() {
    this.name = "Bhushan";
    this.age = 35;
    this.sayName = function () {
        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
            console.log(this.name);
        };
        innerFunc();
    };
}
let y = new Person();
y.sayName();
console.log("#-----------#");
let age = 10;
let human = (age < 18) ?
    () => console.log("Child") :
    () => console.log("Adult");
function sum(num1, num2, num3) {
    if (typeof num3 === "undefined") {
        return num1 + num2;
    }
    return num1 + num2 + num3;
}
let result1 = sum(5, 10);
console.log(result1);
console.log("#-----------#");
// Don't pass optional argument
let result2 = sum(5, 10);
console.log(`Sum without optional argument: ${result2}`);
// Pass optional argument
result2 = sum(5, 10, 15);
console.log(`Sum with optional argument: ${result2}`);
console.log("#-----------#");
// Default parameter
function greet2(name = "Guest") {
    console.log(`Hello, ${name}`);
}
greet2();
console.log("#-----------#");
function add(x = 3, y = 5) {
    return x + y;
}
let result3 = add(9, 1);
console.log(`Sum of 9 and 1: ${result3}`);
result3 = add(8);
console.log(result3);
result3 = add();
console.log(result3);
console.log("#-----------#");
// Default Parameters Should Come After Required Parameters
function sum1(x, y, z = 10) {
    return x + y + z;
}
let result4 = sum(5, 15);
console.log(`5 + 15 + 10 = ${result4}`);
// Pass argument to z
result4 = sum(5, 15, 13);
console.log(`5 + 15 + 13 = ${result4}`);
function sum2(x = 1, y = x + 1, z = x + y) {
    console.log(x + y + z);
}
sum2();
console.log("#-----------#");
function add1(val1, val2) {
    if (typeof val1 === "number" && typeof val2 === "number") {
        return val1 + val2;
    }
    else if (typeof val1 === "string" && typeof val2 === "string") {
        return val1 + val2;
    }
    throw new Error("Invalid arguments");
}
let sum3 = add1(5, 9);
console.log(sum3);
let concatenate = add1("Winter", " is coming!");
console.log(concatenate);
console.log("#-----------#");
function greet3(name, age) {
    if (name !== undefined && age !== undefined) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    else if (name !== undefined) {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello!";
    }
}
let message1 = greet3();
console.log(message1);
message1 = greet3("Bhushan");
console.log(message1);
message1 = greet3("Mayur", 35);
console.log(message1);
