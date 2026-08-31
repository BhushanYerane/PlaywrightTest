"use strict";
let emp = {
    employeeId: 101,
    name: "Bhushan"
};
console.log(emp.employeeId);
emp.name = "Rahul";
// emp.employeeId = 1001;       connot assign as it is readonly
console.log(emp);
