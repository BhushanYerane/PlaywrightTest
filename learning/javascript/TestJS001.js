console.log("Hello Bhushan! Welcome to the world of JavaScript automation testing.");

const name = 'Playwright';
console.log("Name of the framework is :", name);

// JavaScript variables
let number;
number = 11;

let firstname = "John";      // String
let age = 25;               // Number
let isActive = true;        // Boolean
let data = null;
let user;

var browser = 'chrome';
let isHeadless = true;

// declare variables num1, num2, and num3
let num1 = 5, num2 = 6, num3 = 7;

console.log("Number is :", number);
console.log("Browser is :", browser);
console.log("Numbers are :", num1, num2, num3);

let result = true;
console.log("Result is :", result);

result = false;
console.log("Result is :", result);

// variable name starts with a letter, underscore, or dollar sign
var _name = 'Bhushan';
var $name = 'Bhushan';
var name1 = 'Bhushan';

// variable name cannot start with a number
// var 1name = 'Bhushan'; // This will throw an error

// variable name cannot contain spaces
// var my name = 'Bhushan'; // This will throw an error

// variable name cannot contain special characters except for underscore and dollar sign
// var my@name = 'Bhushan'; // This will throw an error

// variable name are case sensitive
var myName = 'Bhushan';
var MyName = 'Bhushan';
console.log("myName is :", myName);
console.log("MyName is :", MyName);

// constant variables
const pi = 3.14;
console.log("Value of pi is :", pi);

const userName = 'adminz';
console.log("User name is :", userName);

//userName = 'admin'; // This will throw an error because userName is a constant variable 

//const userPassword;
//userPassword = 'admin123'; // This will throw an error because constant variables must be initialized at the time of declaration

// Console.log
console.log("Hello Bhusnan!");
console.log(11.11);

var string = "Hello Bhushan!";
var company;
company = "Playwright"; 
console.log("Company name is :", company, "and string is :", string);

// 1. Using Substitution Strings
let count = 5;
console.log("There are %d items in your basket.", count);

// Using Template Literals
let itemCount = 10;
let message = `There are ${itemCount} items in your basket.`;
console.log(message);

// 3. Using String Interpolation
var firstName = "John";
var lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log("Full name is :", fullName);

// 2. Using String Concatenation
let firstName1 = "Bhushan";
let lastName1 = "DLlaoe";
let fullName1 = firstName1 + " " + lastName1;
console.log("Full name is :", fullName1);

// JavaScript Data Types
// altogether 8 basic data types in JavaScript.
// 1. Number
let num = 42;
console.log("Number is :", num);

// 2. String
let str = "Hello, Dude!";
console.log("String is :", str);

// 3. Boolean
let isTrue = true;
console.log("Boolean is :", isTrue);

let dataChecked = true;
console.log(dataChecked);  // true
let valueCounted = false;
console.log(valueCounted);  // false

// 4. Null
let nullVal = null;
console.log("Null Value is:", nullVal);

// 5. Undefined value
let number2;
console.log("Undefined Value is:", number2);

let name2 = undefined;
console.log(name2);       // undefined

// 6. Object // non -primitive data type, can store multiple values in a single variable
let person = {
  name: "John",
  age: 30,
  isStudent: true
};
console.log("Object is :", person);

// 7. Symbol
let sym = Symbol("unique");
console.log("Symbol is :", sym);

// 8. BigInt
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log("BigInt is :", bigIntNum);
let bigNumber = "71,74,81,12,50,000";
console.log("Big Number is :", bigNumber);

// String Methods
let fruit = "Banana";
let fruit1 = `DragonFruit`;
let fruit2 = 'Mango';
console.log(fruit, fruit1, fruit2);

// two symbols with the same description
let value1 = Symbol("programiz");
let value2 = Symbol("programiz");
console.log(value1 === value2);   // false

let value3 = Symbol.for("programiz");
let value4 = Symbol.for("programiz");
console.log(value3 === value4); // true

console.log("--------------------");
// How can you check the data type of a variable?
let name3 = "ram";
console.log(typeof(name3));  // string

let number1 = 4;
console.log(typeof(number1));  // number

let valueChecked = true;
console.log(typeof(valueChecked));  // boolean

let a = null;
console.log(typeof(a));  // object

console.log("--------------------");
let data1;
console.log(typeof(data1));  // undefined

data1 = 11;
console.log(typeof(data1));  // number

data1 = "Hello";
console.log(typeof(data1));  // string

let userData = {
    name: "Bhushan",
    age: 38,
    empID: 102956,
    emailID:"nealKaff@yahoo.com",
    company:"accenture",
    location:"Pune"
}
console.log("User data is :", userData);
console.log("User name is :", userData.name); // Accessing object property using dot notation
console.log("User age is :", userData["age"]); // Accessing object property using bracket notation

for (let key in userData) {
    console.log(key + " : " + userData[key]);
}

console.log("--------------------");

Object.entries(userData).forEach(([key, value]) => {
    console.log(key + " : " + value);
});