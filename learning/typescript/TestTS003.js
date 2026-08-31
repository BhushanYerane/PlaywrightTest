"use strict";
// forEach loop
let nums1 = [1, 4, 9, 16, 25, 36];
function printNumber(arg) {
    console.log(arg);
}
nums1.forEach(printNumber);
console.log("------------------------");
//nums1.forEach(num => console.log(num));
let students1 = ["Red", "Yellow", "Orange", "Pink", "Green"];
function addText(item, index, arr) {
    arr[index] = "Lala Hai " + item;
}
students1.forEach(addText);
console.log(students1);
let students2 = ["John", "Sara", "Jack"];
students2.forEach(element => {
    console.log("Hey ", element);
});
let nums2 = [2, 4, 6, 8, 10, 12, 14];
nums2.forEach((value) => {
    if (value % 2 == 0) {
        return;
    }
    console.log(value);
});
let numbersSet = new Set([1, 2, 3, 4, 5]);
function printItems(item) {
    console.log(item);
}
numbersSet.forEach(printItems);
let employeeInfo = new Map();
employeeInfo.set("name", "Jack");
employeeInfo.set("age", 27);
employeeInfo.set("status", "active");
function printInfo(value, key) {
    console.log(`${key} : ${value}`);
}
employeeInfo.forEach(printInfo);
console.log("-------------------------");
let fruits = ["apple", "banana", "cherry"];
console.log("Using forEach():");
fruits.forEach(function (fruit) {
    console.log(fruit);
});
console.log("\nUsing a for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("-------------------------");
let rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
rainbow.forEach(element => {
    console.log(element);
});
console.log("-------------------------");
function printColour(colour) {
    console.log(colour);
}
rainbow.forEach(printColour);
// break
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        // break;
        continue;
    }
    console.log(i);
}
// switch
let fruit = "Apple";
switch (fruit) {
    case "Banana":
        console.log("Banana is Good!");
        break;
    case "Apple":
        console.log("Apple is Tasty!");
        break;
    default:
        console.log("Unknown Fruit");
}
console.log("switch ended");
//
for (let i = 0; i <= 8; i++) {
    //console.log("In Continue");
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
// while loop
let num1 = 1;
while (num1 <= 10) {
    if (num1 % 3 == 0) {
        num1++;
        continue;
    }
    console.log(num1);
    num1++;
}
//
let trafficLight = "Green";
let message = "";
switch (trafficLight) {
    case "Green":
        message = "Proceed or continue driving.";
        break;
    case "Yellow":
        message = "prepar to Stop it.";
        break;
    case "Red":
        message = "Stop immediately.";
        break;
    default:
        message = "Invalid traffic light color.";
}
console.log(message);
//
// Program to categorize age
let age = 19;
switch (age) {
    case 13:
    case 14:
    case 15:
        console.log("Early Teen");
        break;
    case 16:
    case 17:
        console.log("Mid Teen");
        break;
    case 18:
    case 19:
        console.log("Late Teen");
        break;
    default:
        console.log("Other Age Group");
}
