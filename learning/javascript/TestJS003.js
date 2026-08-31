// Functions // https://www.programiz.com/javascript/library
function greet() {
    console.log("Hello Greet");
}
var displayPI = function() {
    console.log("PI-3.14");
}

function name(nam) {
    console.log(`Hello ${nam}`);
}

function addNumbers(num1,num2){
    var sum = num1 + num2;
    console.log(`Sum: ${sum}`)
 }

 //a function expression is a way to store functions in variables
 function findSquare(num1){
    return num1*num1;
 }

// Any code written in the function after the return statement is not executed.
 function display() {
    console.log("This will be executed.");
    return "Returning from function.";
    console.log("This will not be executed.");
 }

 let squareRoot = Math.sqrt(121);
 console.log("Square Root is: ",squareRoot);

 let power = Math.pow(9,3);
 console.log("9 to the power of 3 is", power);

 let band = "lala ji ki Jai HO";
 let bandUpper = band.toUpperCase();
 console.log(`Favorite Band: ${bandUpper}`);

function greet(name = "Guest"){
    return `Hello ${name}`;
}
//
greet();
displayPI();

name("Bhushan");
name("Lala JEE");

addNumbers(5,9);

// store a function in the square variable
let square = findSquare(9);
console.log(`Square: ${square}`)

let message = display();
console.log(message);

console.log(greet());

// JavaScript object is a variable that can store multiple data in key-value pairs.
var Employee = {
    firstName:"Bhushan",
    EmployeeID: "1098236",
    Department: "IT Asset",
    Designation: "QA Manual" };
 console.log(Employee);
 console.log(Employee.EmployeeID);
 console.log(Employee["Designation"]);

// JavaScript Object Operations
// 1. Modify Object Properties
var person = {
    name: "Bobby",
    hobby: "Dancing",
    activity: "running",
    interest: "hiking"
    };
person.hobby = "Singing";
console.log(person);

// 2. Add Object Properties
var display = {
    name:"ABABACC",
    city:"POQA",
    address:"chinchwade",
    country:"India",
    planet:"Earth"
};
display.address = "Pimpri-Chinchwad";
display.area = "Yamina Nagar";
display.pin = 411064;
console.log(display);

// 3. Delete Object Properties
const employee1 = {
    name: "Tony",
    position: "Officer",
    salary: 30000,
    status:"inactive"};
 console.log(employee1);

 delete employee1.status;
 console.log(employee1);

 // JavaScript Object Methods
 var EmployeeDetails = {
     Name: "Bhushan Yerane",
     EmployeeID: 1902845,
     Designation: "Consultant",
     Department: "Engineering",
     Status: "Active",
     Salary: 45000,

     YearSal: function () {
         var annual = this.Salary * 12;
         console.log("Annual Salary: ₹" + annual);
     },

     MonthlySal: function () {
         console.log("Monthly Salary: ₹" + this.Salary);
     },

     EmployeeInfo: function () {
         console.log("----- Employee Details -----");
         console.log("Name: " + this.Name);
         console.log("Employee ID: " + this.EmployeeID);
         console.log("Designation: " + this.Designation);
         console.log("Department: " + this.Department);
         console.log("Salary: ₹" + this.Salary);
     },

     SalaryHike: function (percentage) {
         var increasedSalary = this.Salary + (this.Salary * percentage / 100);
         console.log("Salary after " + percentage + "% hike: ₹" + increasedSalary);
     }
 };

 // Display complete object
 console.log(EmployeeDetails);
 console.log("----------------------------");

 // Display employee details
 EmployeeDetails.EmployeeInfo();
 console.log("----------------------------");

 // Display monthly salary
 EmployeeDetails.MonthlySal();
 console.log("----------------------------");

 // Display yearly salary
 EmployeeDetails.YearSal();
 console.log("----------------------------");

 // Calculate salary after hike
 EmployeeDetails.SalaryHike(12);
 console.log("----------------------------");

 var SalaryDetails = {
     employeeID: 1001,
     employeeName: "Lala Ji",
     basicSalary: 45000,
     hra: 10100,
     bonus: 5500,

     getGrossSalary: function() {
         var totalSalary = this.basicSalary+this.hra+this.bonus;
         return totalSalary;
     },
     displayDetails: function() {
         console.log("Employee ID:", this.employeeId);
         console.log("Employee Name:", this.employeeName);
         console.log("Gross Salary:", this.getGrossSalary());
     },
     updateBonus: function(newBonus) {
         this.bonus = newBonus;
         console.log("Bonus updated to:", this.bonus);
     }
 };
 console.log(SalaryDetails.employeeName);
 SalaryDetails.displayDetails();
 SalaryDetails.updateBonus(8500);
 console.log("Updated Gross Salary:", SalaryDetails.getGrossSalary());

let meta = {
    companyName: "Meta",
    founderName: "Mark Zuckerberg",
    apps: {
        whatsapp: {
            category: "Messaging",
            technology: "Erlang, C++, Java, React Native",
            getInfo: function () {
                return `WhatsApp is a ${this.category} app built using ${this.technology}.`;
            }
        },
        instagram: {
            category: "Photo & Video Sharing",
            technology: "Python (Django), React, Java",
            getInfo: function () {
                return `Instagram is a ${this.category} platform built using ${this.technology}.`;
            }
        },
        facebook: {
            category: "Social Networking",
            technology: "PHP (Hack), React, JavaScript",

            getInfo: function () {
                return `Facebook is a ${this.category} platform built using ${this.technology}.`;
            }
        }
    },
    showAllApps: function () {
        console.log(`${this.companyName} owns:`);
        for (let app in this.apps) {
            console.log(`- ${app}`);
        }
    },
    getCompanyInfo: function () {
        return `${this.companyName} was founded by ${this.founderName}.`;
    }
};

// Function Calls
meta.showAllApps();
console.log(meta.getCompanyInfo());

console.log(meta.apps.whatsapp.getInfo());
console.log(meta.apps.instagram.getInfo());
console.log(meta.apps.facebook.getInfo());