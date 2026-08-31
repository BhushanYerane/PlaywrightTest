// Operators in JavaScript
// Arithmetic operators
let a = 10;
let b = 5;
let c = 7;

console.log.apply(console, ["Addition:", a + b]); // Addition: 15
console.log.apply(console, ["Subtraction:", a - b]); // Subtraction: 5

console.log("Multiplication: ", b * c);
console.log("Division: ", a / b);
console.log("Modulus: ", a % c);
let d = b++;
let e = c--;
console.log("Increment:", d, "Decrement:", e); // Increment: 5, Decrement: 7

let f = ++c;
let g = --b;
console.log("Pre-Increment:", f, "Pre-Decrement:", g); // Pre-Increment: 7, Pre-Decrement: 4

let h = a ** 2; // Exponentiation
console.log("Exponentiation:", h); // Exponentiation: 100

let i = 10, j = 5, k = 5;
console.log("i<j:", i < j); // false
console.log("i>j:", i > j); // true
console.log("j<=k:", j <= k); // true
console.log("i>=j:", i >= j); // true
console.log("i==j:", i == j); // false
console.log("k==j:", k == j); // 
console.log("i!=j:", i != j); // true
console.log("k===j:", k === j); // true
console.log("i!==j:", i !== j); // true

// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// strictly not equal to operator
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);

// logical operators
let x = 3, y = 5;

// logical AND
console.log((x < 5) && (x > 0));
console.log((x < 5) && (x > y));

// logical OR
console.log((x > 2) || (x > y));
console.log((x > 3) || (x < y));

// logical NOT
console.log(!(x == 3));  // false
console.log(!(x < 2));  // true

// operator to concatenate (join) two strings
let str1 = "Hel", str2 = "lo";
console.log(str1 + str2);

/**
 * // Single line comment
 * the multiline comment
 */
// JavaScript Type Conversion
// Implicit Conversion - Automatic type conversion.


// java Script if...else

let score = 45;
if (score >= 50) {
    console.log("You passed the examination.");
} else {
    console.log("You failed the examination.");
}

//
const prompt = require('prompt-sync')();
const number1 = Number(prompt("Enter Number: "));
//console.log("You entered:", number1);
if (number1 > 0) {
    console.log("Positive Number")
}
console.log(number1);

// if..else
let age = 17;
if (age > 18) {
    console.log("You are and Adult");
} else {
    console.log("You are and minor");
}

// if..else if..else
let rating = 4;
if (rating <= 2) {
    console.log("Bad rating");
} else if (rating >= 4) {
    console.log("Good rating!");
} else {
    console.log("Average rating");
}

// nested if else
let mark = 60;
if (mark >= 40) {
    if (mark >= 80) {
        console.log("Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}

// ternary if simple
let grade = 40;
let result = (grade >= 50) ? 'pass' : 'fail';
console.log(result)

// switch statement
let grade1 = "B";
switch (grade1) {
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
        console.log("Bad!");
    default:
        console.log("Failed!");
}

//
let age1 = 35;
let salary = 6000;

// combine two conditions // using the "and" operator &&
if (age1 >= 30 && salary >= 5000) {
    console.log("Eligible for premium membership.");
}
else {
    console.log("Not eligible for premium membership.");
}

// Loops -- For loop
console.log("For Loop")
for(let i=0;i<5;i++)
{
    console.log(i)
}

let sum=0, avg=0;
const num=100;
for(let i=1;i<=num;i++)
{
    sum += i;
}
console.log("Sum is: ",sum)
avg = sum/num;
console.log("Average is: ",avg)

let fruits = ["Apply","Banana","Grapes","Kiwi"];
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

// while & do..while Loops
let num1 = 2;
while(num1<5) {
    console.log(num1);
    num1++;
}
let count = 5;
while(count >= 1) {
    console.log(count);
    count--;
}

let num2 = 2;
while(num2<=10)
{
     console.log(num2);
     num2 = num2+2;
}

//const prompt = require('prompt-sync')();
let num3 = 0;
let sum1 = 0;
while (num3 >= 0) {
    num3 = Number(prompt("Enter Number: "));
    if (num3 >= 0) {
        sum1 += num3;
    }
}
console.log(`The sum is ${sum1}`);

// do... while
let num4=2;
do{
    console.log(num4);
    num4++;
} while(num4<5);

let dieRoll;
do {
    dieRoll = Math.floor(Math.random()*6)+1;
    console.log(`You rolled a: ${dieRoll}`);
}while(dieRoll!== 6);
console.log("Success! You rolled a 6.");

let totalSum =0;
var currentSum = 1;
do{
    totalSum = totalSum + currentSum;
    currentSum++;
}while(currentSum >= 10);
console.log("Total Sum:",totalSum);

let items = ["apple", "banana", "orange", "stop", "grape"];
let index =0;
do {
    if(items[index]==="stop")
    {
        break;
    }
    console.log("Fruit Items",items[index]);
    index++;
}while(index<items.length);

while(true) {
var num5 = Number(prompt("Enter Number: "));
    if(num5==0)
    { break; }
    console.log("Enter Number is",num5);
}

let sum2=0;
while(true) {
    var num6 = Number(prompt("Enter Number: "));
    if(num6<=0)
    { break;
    } else {
        sum2 = sum2+num6;
    }
}
    console.log("",sum2)
for(var i=1;i<7;i++)
{
    if(i%2===0)
        continue;
    console.log(i)
}
var num = 1;
while (num <= 10) {
    if (num % 2 === 0) {
        ++num;
        continue;
    }
    console.log(num);
    ++num;
}