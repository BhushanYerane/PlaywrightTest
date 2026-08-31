"use strict";
// TypeScript First Start.
console.log("Hello, TypeScript!");
// Variables in TypeScript
// let variableName: dataType;
let age;
let personName;
age = 35;
personName = "Bhushan";
console.log(`Age - ${age}, Name - ${personName}`);
let johnAge = 20;
let johnName = "John";
console.log(`Age - ${johnAge}, Name - ${johnName}`);
let userAge = 22;
let userName = "Lala Jee";
console.log(`Age - ${userAge}, Name - ${userName}`);
// Change variable age
let age1 = 20;
console.log(age1);
age1 = 33;
console.log(age1);
// Data Type
let integerNumber = -3;
console.log(integerNumber);
let floatNumber = 3.15;
console.log(floatNumber);
// Division by zero results in Infinity
let number1 = 3 / 0;
console.log(number1);
// Negative division by zero results in -Infinity
let number2 = -3 / 0;
console.log(number2);
// Non-numeric operations result in NaN
let number3 = Number("abc") / 3;
console.log(number3);
// Strings
// String enclosed within single quotes
let language = 'English';
console.log(language);
// String enclosed within double quotes
let country = "USA";
console.log(country);
// String enclosed within backticks
let result = `fail`;
console.log(result);
// Boolean
let dataChecked = true;
console.log(dataChecked); // true
let valueCounted = false;
console.log(valueCounted); // false
//TypeScript undefined
let item;
console.log(item);
// The user variable is explicitly set to null
let user;
user = null;
console.log(user);
// Arrays
let quantities = [1, 4, 9, 16, 25, 36];
let colors = ["red", "blue", "green", "yellow", "orange", "pink"];
console.log(quantities);
console.log(colors);
// object
let person = {
    name1: "Kakaki",
    age2: 33,
    hobbies: ["reading", "cycling"]
};
console.log(person);
// Tupple
let user1 = ["John", 30];
console.log(user1);
let validUser = ["lalajee@yahoo.com", "lalaji123"];
let inValidNum = [1234, 9876];
console.log(validUser);
console.log(inValidNum);
//any
// Initially, TypeScript interprets the anything variable as a string
let anything = "I can be anything!";
console.log(anything);
// Now it's a number
anything = 42;
console.log(anything);
// Now it's a boolean
anything = false;
console.log(anything);
// unknown
let value = "Hello, TypeScript";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// void
function logMessage() {
    console.log("This function returns nothing.");
}
logMessage();
// TypeScript never
// This function never returns
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Something went wrong!");
}
catch (error) {
    console.log(error.message);
}
