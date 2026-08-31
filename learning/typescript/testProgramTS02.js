"use strict";
function findLargest(a, b) {
    return a > b ? a : b;
}
let largeNum = findLargest(10, 30);
console.log(largeNum);
function factorial(n) {
    let fact = 1;
    for (let i = 0; i < n; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(7));
// Regular function 
let multiply1 = function (x, y) {
    return x * y;
};
// Arrow function
let multiply2 = (x, y) => x * y;
console.log(multiply1(10, 30));
console.log(multiply2(10, 30));
