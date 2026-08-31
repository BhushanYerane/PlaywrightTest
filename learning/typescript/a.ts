// TypeScript: Array.map() in detail
// map() creates a new array by calling a function on every element in the original array.
// It does NOT change the original array.

const numbers: number[] = [1, 2, 3, 4, 5];

const doubled = numbers.map((value) => value * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]

// Syntax:
// array.map(callbackFn(currentValue, index, array), thisArg?)
// callbackFn receives:
// 1. currentValue: the item being processed
// 2. index: the index of the current item
// 3. array: the full array
// return value: a new array with the transformed values

const names = ["Alice", "Bob", "Charlie"];

const upperNames = names.map((name, index) => {
  return `${index + 1}. ${name.toUpperCase()}`;
});

console.log(upperNames); // ["1. ALICE", "2. BOB", "3. CHARLIE"]

// Type inference in TypeScript
const prices = [10, 20, 30];
const taxedPrices: number[] = prices.map((price) => price * 1.18);
console.log(taxedPrices); // [11.8, 23.6, 35.4]

// Mapping objects
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const userNames: string[] = users.map((user) => user.name);
console.log(userNames); // ["Alice", "Bob"]

// Why map is useful
// - transform data without mutating original array
// - convert one shape into another
// - produce derived values for rendering, APIs, calculations, etc.

// Example: convert string numbers to numbers
const numericStrings = ["10", "20", "30"];
const numbersFromStrings = numericStrings.map((value) => Number(value));
console.log(numbersFromStrings); // [10, 20, 30]

// Important notes:
// - map always returns a new array of the same length
// - it does not skip items unless callback logic does
// - if you need to filter, use filter(); if you need to reduce, use reduce()

// Example with optional thisArg (less common in TS, but valid)
const obj = {
  multiplier: 5,
};

const multiplied = numbers.map(function (n) {
  return n * this.multiplier;
}, obj);

console.log(multiplied); // [5, 10, 15, 20, 25]

// Summary:
// map() is used to transform each element of an array and produce a new array.
// It's one of the most common and powerful array methods in TypeScript and JavaScript.
