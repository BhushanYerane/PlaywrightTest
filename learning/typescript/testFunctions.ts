// Function Declaration → Semicolon NOT needed
function welcomeUser() {
    console.log("Hello, without Semicolon");
}
welcomeUser();

// Also valid (semicolon optional)
function printMessage() {
    console.log("Hello no SemiColon");
};
printMessage();

// Function Expression → Semicolon needed
let showGreeting = function () {
    console.log("Hello, Semicolon");
};
showGreeting();

// Arrow Function → Semicolon needed
const displayGreeting = () => {
    console.log("Hello, Semicolon");
};
displayGreeting();

// Class Declaration → Semicolon NOT needed
class Employee {
    sayHi() {
        console.log("Hi, Semicolon");
    }
}

const employeeObj = new Employee();
employeeObj.sayHi();

// Method Inside Object → No Semicolon after method
const employeeDetails = {
    name: "Bhushan",
    sayName() {
        console.log(this.name);
    }
};
employeeDetails.sayName();
