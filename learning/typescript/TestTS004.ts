function greet(): void {
    console.log("Hello");
}
let displayPI = function():void {
    console.log("PI=3.14");
}
greet();
displayPI();
console.log("-----------#")

function getMessage(): string{
    return "Hello String"
}
function getNumber(): number[] {
    let num1:number[] = [1,2,3,4,5];
    return num1;
}
console.log(getNumber());
console.log(getMessage());
console.log("-----------#")

// Using arrow Function
let getName = (): string => {
    return "Bhushan";
};

let getMarks = (): number[] => {
    return [85, 90, 95];
};

console.log(getName());
console.log(getMarks());
console.log("-----------#")

function greet1(name:string):void{
    console.log(`Hello ${name}`);
}
greet1("Lala JEE");
console.log("-----------#")

function addNumbers(num2:number,num3:number):number {
  let sum = num2 + num3;
  return sum;
}
let total:number = addNumbers(10,20);
console.log(`Addition: ${total}`);

function findSquare(num: number) : number {
    return num * num; 
}
let square = findSquare(5);
console.log(`Square: ${square}`);

console.log("-----------#")
//The return Statement Terminates the Function
function display(): string {
    console.log("This will be executed.");
    return "Returning from function.";
    console.log("This will not be executed.");
}
let message: string = display();
console.log(message);
console.log("-----------#")

let squareRoot:number = Math.sqrt(100);
console.log(`The Square Root is ${squareRoot}`);

let power:number = Math.pow(7,3);

let band:string = "qazxcswe";
let upper:string = band.toUpperCase();
console.log(upper);
console.log("-----------#")

// TypeScript Arrow Function [let myFunction = (arg1: Type1): ReturnType => expression;]
console.log("#-----------#")

let addition = (a:number,b:number) :number => a+b;
let result:number = addition(9,8);
console.log(result);

let join = (str1:string,str2:string) : string => str1 + " " + str2;
let joinResult:string = join("Bhushan","Jai HO");
console.log(joinResult);
console.log("#-----------#")

let multiply3 = (a:number, b:number) => {
    let multi = a*b;
    return multi;
}
 let divide1 = (a:number, b:number) => {
         a/b;       // undefined out put
 }
 console.log(multiply3(2,9));
 console.log(divide1(9,2));
 console.log("#-----------#")

 // Arrow Function With No Argument
 let sayHello = ():string => "Hello Typescript";
 console.log(sayHello);

 // Arrow Function With One Argument
 let calSquare = (x:number):number => x*x;
 console.log(calSquare(5));
 console.log("#-----------#")

 function Person (this:any){
  this.name="Bhushan";
  this.age=35

  this.sayName = function() {
    console.log(this.age);

    let innerFunc =(): void => {
      console.log(this.age);
      console.log(this.name);
    }
    innerFunc();
  }
}
let y = new (Person as any)();
y.sayName();
console.log("#-----------#")

let age:number = 10;
let human :() => void = (age <18) ?
    () => console.log("Child") :
    () => console.log("Adult");

function sum (num1:number, num2:number, num3?:number) :number {
    if(typeof num3 === "undefined")
    {
        return num1 + num2;
    }
    return num1+num2+num3;
}
 let result1:number = sum(5,10);
console.log(result1);
console.log("#-----------#")

// Don't pass optional argument
let result2: number = sum(5, 10);
console.log(`Sum without optional argument: ${result2}`);

// Pass optional argument
result2 = sum(5, 10, 15);
console.log(`Sum with optional argument: ${result2}`);
console.log("#-----------#")

// Default parameter
function greet2(name:string = "Guest"):void {
    console.log(`Hello, ${name}`);
}
greet2();
console.log("#-----------#")

function add(x:number=3, y:number=5):number{
    return x+y;
}
let result3:number = add(9,1);
console.log(`Sum of 9 and 1: ${result3}`)

result3 = add(8);
console.log(result3)
result3 = add();
console.log(result3)
console.log("#-----------#")

// Default Parameters Should Come After Required Parameters
function sum1(x: number, y: number, z: number = 10): number {
    return x + y + z;
}
let result4: number = sum(5, 15);
console.log(`5 + 15 + 10 = ${result4}`);

// Pass argument to z
result4 = sum(5, 15, 13);
console.log(`5 + 15 + 13 = ${result4}`);

function sum2(x:number=1, y:number=x+1, z:number=x+y){
    console.log(x+y+z);
}
sum2();
console.log("#-----------#")

// function overloading
function add1(val1:number, val2:number): number;

function add1(val1:string, val2:string): string;

function add1(val1:any, val2:any): any {
    if (typeof val1 === "number" && typeof val2 === "number") {
        return val1 + val2;
    }
    else if (typeof val1 === "string" && typeof val2 === "string") {
        return val1 + val2;
    }
    throw new Error("Invalid arguments");
}
let sum3 = add1(5,9);
console.log(sum3);

let concatenate = add1("Winter", " is coming!");
console.log(concatenate);
console.log("#-----------#")

function greet3(): string;
function greet3(name: string): string;
function greet3(name: string, age: number): string;

function greet3(name?: string, age?: number): string {
    if (name !== undefined && age !== undefined) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else if (name !== undefined) {
        return `Hello, ${name}!`;
    } else {
        return "Hello!";
    }
}

let message1: string = greet3();
console.log(message1);

message1 = greet3("Bhushan");
console.log(message1);

message1 = greet3("Mayur", 35);
console.log(message1);