//JavaScript Getter and Setter
//get - to define a getter method to get the property value
//set - to define a setter method to set the property value

let Student = {
    firstName: "Mounika Ji"
};
Object.defineProperty(Student, "getName", {
    get: function() {
        return this.firstName;
    }
});

Object.defineProperty(Student, "changeName", {
    set: function(value) {
        this.firstName = value;
    }
});
console.log(Student.firstName);
Student.changeName = "Sarah";

console.log(Student.firstName);
console.log(Student.getName);

//
class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }
    get balance() {
        return `Current Balance: ₹${this._balance}`;
    }
    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative");
            return;
        }
        this._balance = amount;
    }
}

let account = new BankAccount(5000);
console.log(account.balance);

account.balance = 7500;
console.log(account.balance);
account.balance = -1000;

class Temperature {
    constructor(celsius){
        this._celsius = celsius;
    }
    get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(value) {
    this._celsius = ((value - 32) * 5) / 9;
    }
}
 var temp = new Temperature(25);
 console.log(temp.fahrenheit);
 temp.fahrenheit = 95;
 console.log(temp.fahrenheit);

// Arrays
let number = [10, 30, 40, 60, 80]
console.log(number[0]);
console.log(number[4]);

// add element
// 1. Using the push() Method
let fruits = ['Apple', 'Banana','Guava','Kiwi'];
console.log(fruits);
fruits.push("Raspberry");
fruits.push("Yellow passion fruit");
fruits[2] = "pomegranate"; // it change array and replace item
console.log(fruits);

//2. Using the unshift() Method
let colours =['Red','Orange','Yellow','Green']
console.log(colours);
colours.unshift("Pink");
console.log(colours);

//Remove Elements From an Array
let numbers = [1, 2, 3, 4, 5];
numbers.push(9);
numbers.unshift(0);
console.log(numbers);
numbers.splice(2, 1);  // remove one element:starting from index 2
console.log(numbers);

// Create an array using the new keyword.
var array1 = new Array(4,9,16,25,36,49);
console.log(array1);
console.log(`Array has length ${array1.length}`)

// Remove elements from an array using pop()-last and shift()-first methods.
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];
dailyActivities.pop();
dailyActivities.push("Wake up");
console.log(dailyActivities);
dailyActivities.shift();
console.log(dailyActivities);
/*In JavaScript, arrays are a type of object. However,
  Arrays use numbered indexes to access elements.
  Objects use named indexes (keys) to access values.
*/

// multidimensional array
// declare three arrays
let student1 = ['Jack', 25];
let student2 = ['Sara', 49];
let student3 = ['Peter', 81];

let studentsData = [student1, student2, student3];
console.log(studentsData);

console.log(studentsData[0]);
console.log(studentsData[0][0]);
console.log(studentsData[2][1]);

// JavaScript String
//Single quotes and double quotes are practically the same, and you can use either of the two.
//Backticks are generally used when you need to insert variables or expressions into a string

// strings example
let name1 = 'Peter';
let name2 = "Jack";
//let result = `The names are ${name1} and ${name2}`;
let result = `The names are "${name1}" and "${name2}"`; // Insert a quote inside another quote. "<text>" valid
console.log(result);

// Access String Characters
let string1 = "QPWZMOMZWPQ";
console.log(string1.length);

//1. Using Indexes
console.log(string1[2]);

//2. Using the charAt() Method
console.log(string1.charAt(9));

// 1. JavaScript Strings are Immutable
// 2. JavaScript Strings are Case-Sensitive

let message = "hello";
message[0] = "H";
console.log(message);

message = "Helloi";
console.log(message);

let msg1 = "H";
let msg2 = "h";
console.log(msg1 == msg2);

// String Methods
let text1 = "hello";
let text2 = "world";
let text3 = "     JavaScript    ";
let test4 = "Hello World JavaScript";

// concatenate two strings
let result1 = text1.concat(' ', text2);
console.log(result1);  // hello world

// convert the text to uppercase
let result2 = text1.toUpperCase();
console.log(result2);  // HELLO

// remove whitespace from the string
let result3 = text3.trim();
console.log(result3);  // JavaScript

// convert the string to an array
let result4 = text1.split();
console.log(result4);  // [ 'hello' ]
let result6 = test4.split(" ");
console.log(result6);
console.log(result6[2]);

// slice the string
let result5= text1.slice(1, 3);
console.log(result5);  // el

// JavaScript String Objects
let value1 = "hello";
let value2 = new String("hello");

console.log(value1);  // hello
console.log(value2);  // [String: 'hello']

console.log(typeof(value1));  // string
console.log(typeof(value2));  // object

let value3 = 123;
let value4 = false;

let result7 = String(value3);
let result8 = String(value4);
console.log(value3,"--",value4);
console.log(typeof(result8));

// Escape char insert double quotes inside string
let name = "My name is \"Peter\".";
console.log(name);

// 1. Multiline in code but not in the output.
// use the + operator
let message1 = "This is a long message " +
    "that spans across multiple lines " +
    "in the code.";

// use the \ operator
let message2 = "This is a long message \
that spans across multiple lines \
in the code.";

console.log(message2);
console.log(message1);
console.log(message2);
