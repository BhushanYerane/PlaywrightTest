"use strict";
//TypeScript Operators
let value1 = 10;
let value2 = 20;
let addition = value1 + value2;
let subtraction = value2 - value1;
let division = value2 / value1;
let modulus = value1 % value2;
let multiplication = value2 * value1;
console.log(`Addition: ${addition}\n` +
    `Subtraction: ${subtraction}\n` +
    `Multiplication: ${multiplication}\n` +
    `Division: ${division}\n` +
    `Modulus: ${modulus}`);
console.log(value1++);
console.log(value2--);
let exponentiationResult = value1 ** 2;
console.log(exponentiationResult);
// Using Assignment
let num = 7;
num += 5;
const addResult = num;
num -= 2;
const subResult = num;
num *= 3;
const mulResult = num;
num /= 2;
const divResult = num;
num %= 4;
const modResult = num;
num **= 2;
const expResult = num;
console.log(`After += 5: ${addResult}
After -= 2: ${subResult}
After *= 3: ${mulResult}
After /= 2: ${divResult}
After %= 4: ${modResult}
After **= 2: ${expResult}`);
let a = 5;
let b = 10;
// Equal to
console.log(a == 5);
console.log(a == b);
// Strictly equal to
console.log(a === 5);
// Not equal to
console.log(a != b);
// Strictly not equal to
console.log(a !== 10);
// Greater than
console.log(b > a);
// Less than
console.log(b < a);
// Greater than or equal to
console.log(a >= 5);
// Less than or equal to
console.log(b <= 10);
// if..else
let quantity = -35;
if (quantity > 0) {
    console.log("Positive number");
}
else if (quantity < 0) {
    console.log("Negative number");
}
else {
    console.log("zero");
}
let num2 = 12;
if (num2 > 0) {
    console.log("Positive Number");
    if (num2 % 2 === 0) {
        console.log("Even Number");
    }
    else {
        console.log("Odd Number");
    }
}
else {
    console.log("Not a Positive Number");
}
// Switch
let score = "C";
switch (score) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good!");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Bad");
        break;
    default:
        console.log("Fail");
}
let age = 35;
let salary = 6000;
if (age >= 30 && salary >= 5000) {
    console.log("Eligible for premium membership.");
}
else {
    console.log("Not eligible for premium membership.");
}
// loops
for (let i = 1; i <= 10; i++) {
    console.log(i, " ");
}
let sum = 0;
let n = 100;
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
}
console.log(`Sum is ${sum}`);
// Iterate Through an Array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
let fact = 1;
for (let i = 1; i <= 7; i++) {
    fact = fact * i;
}
console.log(fact);
let i = 1;
while (i < 5) {
    console.log(i);
    i++;
}
let j = 3;
do {
    console.log(i);
    j--;
} while (j <= 0);
// do..while and if..else
let num3 = 100;
do {
    if (num3 % 5 == 0) {
        continue;
    }
    else if (num3 % 2 == 0) {
        console.log("Number is even", num3);
        break;
    }
    else {
        console.log("Number is odd", num3);
        continue;
    }
    num3--;
} while (num3 < 0);
console.log("End");
//user Inputs
/*
let num1: number = Number(prompt("Enter a number:"));
if(num1%2==0)
{
    console.log("Number Even");
  } else {
      console.log("Number Odd");
  }
  console.log("End");
*/ 
