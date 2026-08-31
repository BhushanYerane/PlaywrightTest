// 1. TypeScript Boolean With Comparison Operators
let age:number = 19;

let isAdult: boolean = age >18;
console.log(isAdult);
console.log("#---------------")

//let age1: number = 18;
let hasConsent: boolean = true;

let carDrive = age > 17 && hasConsent;
console.log(carDrive);

carDrive = age >= 17 || hasConsent;
console.log(carDrive);
console.log("#---------------")

let hasPermission: boolean = true;
if(hasPermission){
    console.log("Access granted");
} else {
    console.log("Access denied");
}
console.log("#---------------")

// Typescript Strings <let variableName: string;>
let language:string = "English/Hindi";
let country:string = 'India';
let userName:string = `Bhushan lala JEE`;
console.log(language," ",country," ",`${userName}`);

let firstChar = userName[0];
let lastChar = userName.slice(-1);
let lastchar = userName[userName.length-1];
var lastChar1: string = userName.charAt(userName.length - 3);
var strlength:number = userName.length;
console.log(firstChar," ",lastChar);
console.log(lastchar);
console.log(lastChar1," ",strlength);

var results:string[] = userName.split(" ");
console.log(results);

var text: string = "apple,banana;orange|grape";
let result: string[] = text.split(/[,;|]/);

var messyText: string = "hello,  world;  this is:a    test";
let words: string[] = messyText.split(/[\s,;:]+/);

let formula: string = "item1 AND item2 OR item3";
let components: string[] = formula.split(/(?: AND | OR )/);

let equation: string = "10+5-2";
let tokens: string[] = equation.split(/([+-])/);

console.log(result,'\n',words,'\n',components,'\n',tokens); // for next line '\n' 

// Typescript array // let arrayName: elementType[] = [element1, element2, element3];
let age1: number[] = [10, 12, 3, 40, 5];
console.log(age1);
console.log(age1[3]);

let studentName:string[] =["qaz","wsx","edc","pli","okm"];
studentName.push("qoueca");     // adding elemnt at last
console.log(studentName);

studentName.unshift("dpqdgj"); // adding element at first position
console.log(studentName);

studentName[5] = "Mangoz";      // change element in array
console.log(studentName);

studentName.pop();              // remove element
console.log(studentName);

studentName.push("okm");
studentName.push("oueca");
studentName.unshift("Lala JEE");

// remove element from any index
let filteredName = studentName.filter(item=>item !=="Mangoz");
console.log(filteredName);
console.log(studentName);

var indexNM = studentName.indexOf("Lala JEE");
if(indexNM>-1){
    studentName.splice(indexNM,1);
}
console.log(studentName);

studentName.sort();
console.log(studentName);

let emptyArray: number[] = new Array();
let arrayWithSize: number[] = new Array(5);  

// TypeScript Union and Intersection Type
let value: number|string;           // value can be number or string
value = "Bhushan";
value = 1987;
console.log(value);                 // print only it replace previously assigned 

function printId(id: number | string) {
  console.log("ID:", id);
}
printId(101);       
printId("101A");

let values: (number | string)[] = [];
values.push("Bhushan");
values.push(1987);
console.log(values);

// TypeScript Intersection Type         --> type resultingType = typeA & typeB
type Name = {name:string};
type Age = {age:number};

type Person = Name & Age;               // person hold the data type string and number
let person:Person = {
    name:"Lala JEE",
    age:1987
};
console.log(person);

// Typescript Aliases
type Mobile = number;
type Department = string;

let employeeDetails: {
    mobile: Mobile;
    department: Department;
} = {
    mobile: 9877890012,
    department: "QA Automation"
};
console.log(employeeDetails);

type Mobile1 = number;
type Department1 = string;
let employeeDetails1 = {
    mobile: 9877890011 as Mobile1,
    department: "QA Manual" as Department1
};
console.log(employeeDetails);

// Alias for Function Types    -- type Adder = (num1: number, num2: number) => number;
type Multiply = (num1:number,num2:number,num3:number) => number;
let multi:Multiply = (a,b,c) => a*b*c;

let product = multi(3,6,9);
console.log(product);
