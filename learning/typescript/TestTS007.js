"use strict";
// TypeScript Object Type
// Defining Object Types -- 1. Inline Object Types
let user = {
    name: "Bhushan",
    age: 90
};
console.log(user);
let user1 = {
    name1: "Mayur",
    age1: 90
};
console.log(user1);
let user2 = {
    name2: "Tom",
    age2: 28
};
console.log(user2);
let user4 = { name: "Alice", age: 25 };
let user5 = { name: "Bob" };
let user6 = { name: "qaz" };
console.log(user4);
console.log(user5);
console.log(user6);
// Object Type as Function Parameter
function greet(user) {
    console.log(`Hello, ${user.name}. You are ${user.age} years old.`);
}
greet({ name: "Lala jee", age: 90 });
let subScore = {
    math: 90,
    science: 80,
    language: 70
};
console.log(subScore);
let results = {
    LoginTest: "Passed",
    AddBeneficiaryTest: "Passed",
    FundTransferTest: "Failed"
};
let statusCodes = {
    LoginAPI: 200,
    UserAPI: 201,
    DeleteUserAPI: 204
};
console.log(statusCodes);
let emp = {
    empName: "Bhushan",
    department: "QA",
    empId: 1902845,
    salary: 50000
};
console.log(emp);
let loginData = {
    username: "admin",
    password: "admin123",
    statusCode: 200,
    browser: "Chrome",
    executionTime: 5
};
console.log(loginData);
let admin = {
    name: "Lalu",
    role: "CM420"
};
console.log(admin);
// TypeScript Constructors
class test {
    name;
    email;
    phone;
    test;
    role;
    constructor(name, email, mobile, exp, role) {
        this.name = name;
        this.email = email;
        this.phone = mobile;
        this.test = exp;
    }
}
class Test1 {
    name;
    email;
    phone;
    exp;
    role;
    constructor(name, email, mobile, exp, role) {
        this.name = name;
        this.email = email;
        this.phone = mobile;
        this.exp = exp;
        this.role = role;
    }
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Email ID: ${this.email}`);
        console.log(`Phone Number: ${this.phone}`);
        console.log(`Experience: ${this.exp}`);
        if (this.role) {
            console.log(`Role: ${this.role}`);
        }
    }
}
let emp1 = {
    email: "bhushan@test.com",
    phone: 9876543210,
    exp: 5
};
var obj = new Test1("Bhushan", emp1.email, emp1.phone, emp1.exp);
//console.log(obj);
obj.display();
let obj1 = new Test1("lala jee", "test123@qaz.com", 9080701002, 7, "devops");
obj1.display();
