// TypeScript Interface
interface Person {
    name: string;
    mobile: number;
    email: string;
}
let person: Person = {
    name: "lala jee",
    mobile: 12345,
    email: "lalaJEE12@qatest.com"
};
console.log(person);

// Interface with Union
type ID = number | string;
type EmpMobile = number;
type EmailID = string;

interface EmpUser {
    id: ID;
    empPhNum: EmpMobile;
    emailid: EmailID;
}
let empDetails: EmpUser = {
    id: "FS1011",
    empPhNum: 98120,
    emailid: "qasw@qatest.com"
};
console.log(empDetails);

// Intersection with Interface
interface PersonInfo {
    name: string;
    age: number;
}
interface ContactInfo {
    mobile: number;
    email: string;
}
type Employee = PersonInfo & ContactInfo;
let employee: Employee = {
    name: "Bhushan",
    age: 35,
    mobile: 9876543210,
    email: "bhushan@test.com"
};
console.log(employee);

interface Car {
    brand: string;
    model: string;
    color?: string; 
    type?: string;
}
let myCar: Car = { brand: "Toyota", model: "Corolla",type:"SUV" };
let anotherCar: Car = { brand: "Honda", model: "Civic", color: "Red" };
let car: Car = { brand: "Nissan ", model: "PathFinder"};
console.log(myCar);
console.log(anotherCar);
console.log(car);

//Interface for Function Types
interface AddFunction {
    (a: number, b: number): number;
}

// String
interface GreetFunction {
    (name:string): string;
}
const greet: GreetFunction = (name) => {
    return `Hello ${name}`;
};
console.log(greet("Bhushan"));

let add:AddFunction = (x,y) => {
    return x+y;
}
console.log(add(10, 20));

interface LoginFunction {
    (username: string, password: string): boolean;
}
const login: LoginFunction = (user, pass) => {
    return user === "admin" && pass === "admin123";
};
console.log(login("admin", "admin123"));

// with and without interface function
 function add1(a:number,b:number) {
    return a+b;
 }

 interface Addfun {
    (a:number,b:number):number;
 }
 let addFun: Addfun = (a,b) => a+b;

 console.log(addFun(10,10));
 console.log(add1(10,15));

 interface display {
    (name:string):string;
 }
 let show:display = (name) => `Hello ${name}! "GoodBye"`;
 console.log(show("Lala JEE"));

 // Interfaces with TypeScript Classes
 interface Animal {
    name:string;
    sound:string;
    makeSound():void;
 }
 class Dog implements Animal {
    name:string;
    sound: string;

    constructor(name:string,sound:string){
        this.name = name;
        this.sound = sound;
    }
    makeSound(): void {
        console.log(`${this.name} says: ${this.sound}`);
    }
 }
class Cat implements Animal {
    name: string;
    sound: string;

    constructor(name:string, sound:string){
        this.name = name;
        this.sound = sound;
    }
    makeSound(): void {
    console.log(`${this.name} says: ${this.sound}`);
    }
}

 let dog = new Dog("Buddy","woof oof");
 dog.makeSound();

 let cat = new Cat("Mini","Meow");
 cat.makeSound();

 // Define a payment interface with an amount and a method
interface IPayment {
    amount: number;
    processPayment(): string;
}
class TestPayment implements IPayment {
    amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }
    processPayment() {
        return `Payment of $${this.amount} processed in test mode.`;
    }
}
const testPayment = new TestPayment(100);
console.log(testPayment.processPayment());