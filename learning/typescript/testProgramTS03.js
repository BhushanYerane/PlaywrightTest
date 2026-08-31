"use strict";
console.log("\n========== Employee Access Automation ==========\n");
// Employee IDs
const employeeIds = [101, 102, 103, 104, 105];
// forEach()
console.log("Employee IDs:");
employeeIds.forEach(function (id) {
    console.log(`Employee ID: ${id}`);
});
console.log("-----------------------------------");
// Modify array data
let departments = [
    "Finance",
    "HR",
    "IT",
    "Support",
    "Admin"
];
function addDepartmentPrefix(department, index, arr) {
    arr[index] = `Department - ${department}`;
}
departments.forEach(addDepartmentPrefix);
console.log(departments);
console.log("-----------------------------------");
// Arrow Function
let employees = [
    "John",
    "Sara",
    "Michael",
    "David"
];
employees.forEach(employee => {
    console.log(`Sending onboarding mail to ${employee}`);
});
console.log("-----------------------------------");
// continue simulation using forEach
const loginAttempts = [1, 2, 3, 4, 5];
loginAttempts.forEach(attempt => {
    if (attempt < 3) {
        return;
    }
    console.log(`Valid login attempt: ${attempt}`);
});
console.log("-----------------------------------");
// Set
const activeProjects = new Set(["Payroll", "CRM", "ERP", "Support"]);
console.log("Active Projects:");
activeProjects.forEach(project => {
    console.log(project);
});
console.log("-----------------------------------");
// Map
const employeeStatus = new Map();
employeeStatus.set("EMP101", "Active");
employeeStatus.set("EMP102", "Inactive");
employeeStatus.set("EMP103", "Active");
employeeStatus.forEach((status, employeeId) => {
    console.log(`${employeeId} -> ${status}`);
});
console.log("-----------------------------------");
// Traditional for loop
const tickets = [
    "INC1001",
    "INC1002",
    "INC1003"
];
console.log("Processing Tickets:");
for (let i = 0; i < tickets.length; i++) {
    console.log(tickets[i]);
}
console.log("-----------------------------------");
// break
console.log("Server Health Check:");
for (let server = 1; server <= 5; server++) {
    if (server === 4) {
        console.log("Critical issue detected!");
        break;
    }
    console.log(`Server ${server} is healthy`);
}
console.log("-----------------------------------");
// continue
console.log("Processing Records:");
for (let record = 1; record <= 10; record++) {
    if (record % 2 === 0) {
        continue;
    }
    console.log(`Processed Record ${record}`);
}
console.log("-----------------------------------");
// switch
let requestType = "PASSWORD_RESET";
switch (requestType) {
    case "ACCESS_REQUEST":
        console.log("Route to Access Team");
        break;
    case "PASSWORD_RESET":
        console.log("Route to Service Desk");
        break;
    case "ACCOUNT_LOCK":
        console.log("Route to Operations Team");
        break;
    default:
        console.log("Unknown Request");
}
console.log("-----------------------------------");
// while
let pendingTickets = 1;
while (pendingTickets <= 5) {
    console.log(`Resolving Ticket #${pendingTickets}`);
    pendingTickets++;
}
console.log("-----------------------------------");
// do while
let retryCount = 1;
do {
    console.log(`Attempting API Connection - Try ${retryCount}`);
    retryCount++;
} while (retryCount <= 3);
console.log("-----------------------------------");
console.log("Automation Completed Successfully");
