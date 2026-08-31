// TypeScript Object Type
// Defining Object Types -- 1. Inline Object Types

let user: {name:string,age:number} ={
    name:"Bhushan",
    age:90
};
console.log(user);

// Using Type Alias
type person ={
    name1:string,
    age1:number
}
let user1:person = {
    name1:"Mayur",
    age1:90
};
console.log(user1);

// Using Interface
interface person1 {
    name2:string;
    age2:number;
}
let user2:person1 = { 
    name2: "Tom",
    age2: 28 
};
console.log(user2);

//
type User3 = { name: string; age?: number };
type Person = { name: string; age?: number };

let user4: Person = { name: "Alice", age: 25 };
let user5: Person = { name: "Bob" };
let user6:User3 = {name:"qaz"};
console.log(user4);
console.log(user5);
console.log(user6);

// Object Type as Function Parameter
function greet (user:{
        name:string,
        age:number
    }) {
        console.log(`Hello, ${user.name}. You are ${user.age} years old.`);
    }
greet({name:"Lala jee",age:90});

// Define Object With Index Signature
type scores = {[subject:string]:number};
let subScore: scores= {
    math:90,
    science:80,
    language:70
};
console.log(subScore);

type TestResults = { [testCase: string]: string; };
let results: TestResults = {
    LoginTest: "Passed",
    AddBeneficiaryTest: "Passed",
    FundTransferTest: "Failed"
};

type ApiStatus = {[endpoint: string]: number;
};
let statusCodes: ApiStatus = {
    LoginAPI: 200,
    UserAPI: 201,
    DeleteUserAPI: 204
};
console.log(statusCodes);

type Test = {[name: string]: string | number;
    empName: string;
    department: string;
    empId: number;
    salary: number;
};
let emp: Test = {
    empName: "Bhushan",
    department: "QA",
    empId: 1902845,
    salary: 50000
};
console.log(emp);

type TestData = {[key: string]: string | number;
    username: string;
    password: string;
    statusCode: number;
};
let loginData: TestData = {
    username: "admin",
    password: "admin123",
    statusCode: 200,
    browser: "Chrome",
    executionTime: 5
};
console.log(loginData);

// Combining Object Types with & (Intersection Types)
type User = { name: string };
type Admin = { role: string };

type Adminuser = User & Admin;
let admin:Adminuser ={
    name:"Lalu",
    role:"CM420"
};
console.log(admin);

// TypeScript Constructors
class test{
    name:string;
    email:string;
    phone:number;
    test: string|number;
    role?:string

    constructor (name:string,email:string,mobile:number,exp:string|number,role:string)
    {
        this.name = name;
        this.email = email;
        this.phone = mobile;
        this.test = exp;
    }
}

// constructor and intersection/union
type Experience = {
    exp: string | number;
};
type Contact = {
    email: string;
    phone: number;
};
type EmployeeDetails = Experience & Contact; // Intersection Type (&)

class Test1 implements EmployeeDetails {
    name: string;
    email: string;
    phone: number;
    exp: string | number;
    role?:string

    constructor(
        name: string,
        email: string,
        mobile: number,
        exp: string | number,
        role?: string
    ) {
        this.name = name;
        this.email = email;
        this.phone = mobile;
        this.exp = exp;
        this.role = role;
    }

    display():void {
       console.log(`Name: ${this.name}`);
       console.log(`Email ID: ${this.email}`);
       console.log(`Phone Number: ${this.phone}`);
       console.log(`Experience: ${this.exp}`);
       
       if (this.role) {
            console.log(`Role: ${this.role}`);
        }
    }
}
let emp1: EmployeeDetails = {
    email: "bhushan@test.com",
    phone: 9876543210,
    exp: 5
};
var obj = new Test1("Bhushan",emp1.email,emp1.phone,emp1.exp);
//console.log(obj);
obj.display();
let obj1 = new Test1("lala jee","test123@qaz.com",9080701002,7,"devops");
obj1.display();
