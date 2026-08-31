"use strict";
// Map Set in Typescript
//let mapName = new Map<KeyType,ValueType>(); 
let idStudents = new Map();
idStudents.set(101, "Bhushan");
idStudents.set(102, "Rahul");
idStudents.set(103, "Dolly");
idStudents.set(104, "Soli");
console.log(idStudents);
console.log(idStudents.size);
console.log(idStudents.get(103));
console.log(idStudents.has(102));
idStudents.delete(104);
console.log(idStudents.has(104));
for (let key of idStudents.keys()) {
    console.log(key);
}
for (let value of idStudents.values()) {
    console.log(value);
}
//
let testResults = new Map();
testResults.set("Login Test", "Passed");
testResults.set("Registration Test", "Failed");
testResults.set("Fund Transfer Test", "Passed");
console.log(testResults.get("Login Test"));
for (let [test, name] of testResults) {
    console.log(test, name);
}
console.log("----------------------");
// Map Object
// // Create an empty Map
let map = new Map();
let obj1 = {
    name: "Bhushan",
    email: "bhushan@test.com",
    id: 461619,
    mobile: 908980
};
let obj2 = {
    role: "QA Automation",
    experience: 5
};
map.set(obj1, obj2);
console.log(map);
let empMap = new Map();
empMap.set({
    name: "Bhushan",
    email: "bhushan@test.com"
}, {
    role: "QA Automation",
    exp: 5
});
class EmployeeDetail {
    name;
    details;
    constructor(name, details) {
        this.name = name;
        this.details = details;
    }
    // Function
    display() {
        console.log(`
        Name : ${this.name}
        Email: ${this.details.email}
        Phone: ${this.details.phone}
        Role : ${this.details.role}
        Exp  : ${this.details.exp}`);
    }
}
// Objects
const employees = [
    new EmployeeDetail("Bhushan", {
        email: "bhushan@test.com",
        phone: 9876543210,
        role: "QA Automation",
        exp: 5
    }),
    new EmployeeDetail("Rahul", {
        email: "rahul@test.com",
        phone: 9876501234,
        role: "DevOps",
        exp: "7 Years"
    }),
    new EmployeeDetail("Pradeep", {
        email: "pradeep@test.com",
        phone: 9876511111,
        role: "Manager",
        exp: 12
    })
];
// map()
employees.map(emp => emp.display());
// TypeScript weakmap
console.log("--------------------");
// Set
// a built-in object that stores unique values of any type, ensuring that no duplicate values are allowed
let nums = new Set();
nums.add(10);
nums.add(11);
nums.add(12);
nums.add(10);
nums.add(13);
console.log(nums);
const set1 = new Set(["A", "B", "C", "Z", "A"]);
console.log(set1);
// Create a Set of any type (mixed types)
const anySet = new Set([1, "hello", { count: true }]);
console.log(anySet);
console.log(set1.values());
console.log(nums.has(13));
nums.delete(13);
console.log(nums.has(13));
for (let value of set1) {
    console.log(value);
}
