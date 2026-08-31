console.log("=== JAVASCRIPT STRING METHODS DEMO ===\n");

// Sample string
let text = "  Hello World JavaScript  ";

console.log("Original String:", `"${text}"`);
console.log("Length:", text.length);

console.log("\n=== ACCESSING CHARACTERS ===");

// Using index
console.log("text[2] =", text[2]);

// Using charAt()
console.log("text.charAt(2) =", text.charAt(2));

// Last character
console.log("Last Character =", text[text.length - 1]);

console.log("\n=== STRING IMMUTABILITY ===");

let message = "hello";

console.log("Before:", message);

message[0] = "H"; // Does not work
console.log("After message[0]='H':", message);

message = "Hello"; // Reassign works
console.log("After reassign:", message);

console.log("\n=== CASE SENSITIVITY ===");

let str1 = "Hello";
let str2 = "hello";

console.log("str1 == str2 ?", str1 == str2);

console.log("\n=== CASE CONVERSION ===");

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log("\n=== TRIM ===");

console.log("Before Trim:", `"${text}"`);
console.log("After Trim :", `"${text.trim()}"`);

console.log("\n=== CONCAT ===");

let firstName = "John";
let lastName = "Doe";

let fullName = firstName.concat(" ", lastName);

console.log(fullName);

console.log("\n=== INCLUDES ===");

console.log(text.includes("World"));
console.log(text.includes("Python"));

console.log("\n=== STARTSWITH / ENDSWITH ===");

let course = "JavaScript";

console.log(course.startsWith("Java"));
console.log(course.endsWith("Script"));

console.log("\n=== INDEXOF ===");

console.log(course.indexOf("Script"));
console.log(course.indexOf("Java"));

console.log("\n=== REPLACE ===");

let sentence = "I love Java";
let newSentence = sentence.replace("Java", "JavaScript");

console.log(sentence);
console.log(newSentence);

console.log("\n=== SLICE ===");

let language = "JavaScript";

console.log(language.slice(0, 4)); // Java
console.log(language.slice(4));    // Script
console.log(language.slice(-6));   // Script

console.log("\n=== SUBSTRING ===");

console.log(language.substring(0, 4));

console.log("\n=== SPLIT ===");

let skills = "HTML,CSS,JavaScript,React";

let skillsArray = skills.split(",");

console.log(skillsArray);
console.log("First Skill:", skillsArray[0]);

console.log("\n=== REPEAT ===");

console.log("Hi ".repeat(3));

console.log("\n=== CHARCODEAT ===");

console.log("A =", "A".charCodeAt(0));
console.log("a =", "a".charCodeAt(0));

console.log("\n=== STRING SEARCH ===");

let paragraph = "JavaScript is easy. JavaScript is powerful.";

console.log(paragraph.indexOf("JavaScript"));
console.log(paragraph.lastIndexOf("JavaScript"));

console.log("\n=== TEMPLATE LITERALS ===");

let student = "Bhushan";
let score = 95;

console.log(`Student ${student} scored ${score}%`);

console.log("\n=== STRING TO ARRAY OF CHARACTERS ===");

let word = "HELLO";

console.log(word.split(""));

console.log("\n=== STRING OBJECT VS STRING PRIMITIVE ===");

let value1 = "hello";
let value2 = new String("hello");

console.log(value1);
console.log(value2);

console.log(typeof value1);
console.log(typeof value2);

console.log("\n=== TYPE CONVERSION TO STRING ===");

let num = 123;
let boolValue = false;

console.log(String(num));
console.log(String(boolValue));

console.log("\n=== ESCAPE CHARACTERS ===");

let quote = "My name is \"Peter\".";
console.log(quote);

console.log("\n=== MULTILINE STRING ===");

let multiline = `This is line 1
This is line 2
This is line 3`;

console.log(multiline);

console.log("\n=== END OF DEMO")