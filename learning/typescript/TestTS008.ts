// Map Set in Typescript
//let mapName = new Map<KeyType,ValueType>(); 

let idStudents : Map<number,string> = new Map();
idStudents.set(101, "Bhushan");
idStudents.set(102,"Rahul");
idStudents.set(103,"Dolly");
idStudents.set(104,"Soli");

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
let testResults = new Map<string, string>();
testResults.set("Login Test", "Passed");
testResults.set("Registration Test", "Failed");
testResults.set("Fund Transfer Test", "Passed");

console.log(testResults.get("Login Test"));
for(let [test, name] of testResults)
{
    console.log(test,name);
}

console.log("----------------------")
// Map Object
// // Create an empty Map
let map = new Map<object, object>();

let obj1 = {
    name:"Bhushan",
    email:"bhushan@test.com",
    id:461619,
    mobile:908980
};
let obj2 = {
    role: "QA Automation",
    experience: 5
};
map.set(obj1,obj2);
console.log(map);

// we can use like this
type Employee = {
    name: string;
    email: string;
};
type Details = {
    role: string;
    exp: number;
};

let empMap = new Map<Employee, Details>();
empMap.set(
    {
        name: "Bhushan",
        email: "bhushan@test.com"
    },
    {
        role: "QA Automation",
        exp: 5
    }
);

// Union Type
type Experience = string | number;

// Object Types
type Contact = {
    email: string;
    phone: number;
};
type Job = {
    role: string;
    exp: Experience;
};

// Intersection Type
type EmployeeDetails = Contact & Job;
class EmployeeDetail {
    constructor(
        public name: string,
        public details: EmployeeDetails
    ) {}

    // Function
    display(): void {
        console.log(`
        Name : ${this.name}
        Email: ${this.details.email}
        Phone: ${this.details.phone}
        Role : ${this.details.role}
        Exp  : ${this.details.exp}`);
    }
}

// Objects
const employees: EmployeeDetail[] = [
    new EmployeeDetail("Bhushan", 
        {
        email: "bhushan@test.com",
        phone: 9876543210,
        role: "QA Automation",
        exp: 5
        }
    ),
    new EmployeeDetail("Rahul",
        {
        email: "rahul@test.com",
        phone: 9876501234,
        role: "DevOps",
        exp: "7 Years"
        }
    ),
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

console.log("--------------------")
// Set
// a built-in object that stores unique values of any type, ensuring that no duplicate values are allowed
let nums = new Set<number>();
nums.add(10);
nums.add(11);
nums.add(12);
nums.add(10);
nums.add(13);
console.log(nums);

const set1 = new Set<string>(["A","B","C","Z","A"])
console.log(set1);

// Create a Set of any type (mixed types)
const anySet = new Set<any>([1, "hello", { count: true }]);
console.log(anySet); 


console.log(set1.values()); 
console.log(nums.has(13));
nums.delete(13);
console.log(nums.has(13));

for(let value of set1){
    console.log(value);
}

// TypeScript WeakSet