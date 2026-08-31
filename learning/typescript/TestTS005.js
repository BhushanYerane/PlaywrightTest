"use strict";
// 1. TypeScript Boolean With Comparison Operators
let age = 19;
let isAdult = age > 18;
console.log(isAdult);
console.log("#---------------");
//let age1: number = 18;
let hasConsent = true;
let carDrive = age > 17 && hasConsent;
console.log(carDrive);
carDrive = age >= 17 || hasConsent;
console.log(carDrive);
console.log("#---------------");
let hasPermission = true;
if (hasPermission) {
    console.log("Access granted");
}
else {
    console.log("Access denied");
}
console.log("#---------------");
// Typescript Strings <let variableName: string;>
let language = "English/Hindi";
let country = 'India';
let userName = `Bhushan lala JEE`;
console.log(language, " ", country, " ", `${userName}`);
let firstChar = userName[0];
let lastChar = userName.slice(-1);
let lastchar = userName[userName.length - 1];
var lastChar1 = userName.charAt(userName.length - 3);
var strlength = userName.length;
console.log(firstChar, " ", lastChar);
console.log(lastchar);
console.log(lastChar1, " ", strlength);
var results = userName.split(" ");
console.log(results);
var text = "apple,banana;orange|grape";
let result = text.split(/[,;|]/);
var messyText = "hello,  world;  this is:a    test";
let words = messyText.split(/[\s,;:]+/);
let formula = "item1 AND item2 OR item3";
let components = formula.split(/(?: AND | OR )/);
let equation = "10+5-2";
let tokens = equation.split(/([+-])/);
console.log(result, '\n', words, '\n', components, '\n', tokens); // for next line '\n' 
// Typescript array // let arrayName: elementType[] = [element1, element2, element3];
let age1 = [10, 12, 3, 40, 5];
console.log(age1);
console.log(age1[3]);
let studentName = ["qaz", "wsx", "edc", "pli", "okm"];
studentName.push("qoueca"); // adding elemnt at last
console.log(studentName);
studentName.unshift("dpqdgj"); // adding element at first position
console.log(studentName);
studentName[5] = "Mangoz"; // change element in array
console.log(studentName);
studentName.pop(); // remove element
console.log(studentName);
studentName.push("okm");
studentName.push("oueca");
studentName.unshift("Lala JEE");
// remove element from any index
let filteredName = studentName.filter(item => item !== "Mangoz");
console.log(filteredName);
console.log(studentName);
var indexNM = studentName.indexOf("Lala JEE");
if (indexNM > -1) {
    studentName.splice(indexNM, 1);
}
console.log(studentName);
studentName.sort();
console.log(studentName);
let emptyArray = new Array();
let arrayWithSize = new Array(5);
// TypeScript Union and Intersection Type
let value;
value = "Bhushan";
value = 1987;
console.log(value); // print only it replace previously assigned 
function printId(id) {
    console.log("ID:", id);
}
printId(101);
printId("101A");
let values = [];
values.push("Bhushan");
values.push(1987);
console.log(values);
let person = {
    name: "Lala JEE",
    age: 1987
};
console.log(person);
let employeeDetails = {
    mobile: 9877890012,
    department: "QA Automation"
};
console.log(employeeDetails);
let employeeDetails1 = {
    mobile: 9877890011,
    department: "QA Manual"
};
console.log(employeeDetails);
let multi = (a, b, c) => a * b * c;
let product = multi(3, 6, 9);
console.log(product);
