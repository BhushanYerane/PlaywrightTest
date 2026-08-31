// JavaScript Program to Create Objects in Different Ways
// program to create JavaScript object using object literal
var person = {
    name: 'Bhushan',
    age: 38,
    hobbies: ['reading', 'games', 'coding'],

    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};
console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

// Create an Object using Instance of Object Directly
var employee = new Object({
    name:"priyanka",
    empID:3087,
    hobbies:['reading','paintings','coding'],
    display:function() {
        console.log("Hobby: ",this.hobbies[2]);
    },
    score: {
           maths: 90,
           science: 80,
           social_science: 85
        }
});
employee.display();
console.log(employee.score.social_science);

// Create an object using Constructor Function
function Teacher() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello.');
    },
    this.score = {
        maths: 90,
        science: 80,
        economics: 100
    }
}
const teacher = new Teacher();
// accessing the object value
teacher.greet();
console.log(teacher.score.economics);

// JavaScript this Keyword
let person1 = {
    name: "Bhushan",
    empID: 123455,
    introduce: function () {
         console.log(`My name is ${this.name} and My ID is ${this.empID}.`);
     }
};
person1.introduce();

let student1 = {
    name: "Lala Jee",
    subject: ['Math', 'Science', 'Languages', 'Economics'],
    class: 10
};
student1.display = function() {
    console.log(`My Name is ${this.name}. I name in class ${this.class} and I like ${this.subject[3]} Subject`)
};
student1.display();

function Student2() {
    this.Name = "Bhushan Lala",
    this.Age = 14,
    this.RollNo = 65,
    this.Class = 8,
    this.Subject = ['Math', 'Science', 'Languages','Social Science'],
    this.Address = "D-1355, Blue Ocean, Yamuna Nagar, Nigadi, Pimpri-Chinchwade, Pune, Inida, Earth, Milky Way"
}
    Student2.prototype.display = function () {
    console.log("Name:", this.Name);
    console.log("Age:", this.Age);
    console.log("Roll No:", this.RollNo);
    console.log("Class:", this.Class);
    };
let student = new Student2();
console.log(student.Name);
console.log(student.Subject[2]);

console.log("----------------------------")

// another way to declear
class Student3 {
    constructor() {
        this.Name = "Bhushan Lala";
        this.Age = 14;
        this.RollNo = 65;
        this.Class = 8;
        this.Subject = ['Math', 'Science', 'Languages', 'Social Science'];
        this.Address = "D-1355, Blue Ocean, Yamuna Nagar, Nigadi, Pimpri-Chinchwad, Pune, India, Earth, Milky Way";
    }

    display() {
        console.log(`Name: ${this.Name}`);
        console.log(`Age: ${this.Age}`);
    }
}
var student2 = new Student3();
//console.log(student2.Name);
console.log(student2.Subject[2]);
student2.display();
// constructor function with parameters
function Person (person_name, person_age, person_gender) {
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return (`Hi ${this.name}`);
    }
}
var person2 = new Person("John", 23, "male");
let person3 = new Person("Sam", 25, "female");

console.log(person2.name);
console.log(person3.name);

//
let person4= {
    Name: "Sam"
};
function Person(){
    this.Name
}
let p1 = new Person();
let p2 = new Person();
p1.age = 22;
p1.greet1 = function() {
    return "Hello Lala";
}
console.log(p1.age);
console.log(p1.greet1());

console.log(p2.age);

//
// use object lateral assign person object to student variable
let person5 = {
    name: "Sam"
}
console.log(person5.name);
let student3 = person5;

// change the property of student object
student3.name = "John";
student3.greet = function () {
    return "hello";
}
console.log(person5.name);
console.log(person5.greet());

// use Object() constructor to create object
// use String() constructor to create string object
// use Number() constructor to create number object
// use Boolean() constructor to create boolean object
const person6 = new Object({ name: "John", age: 30 });
const name = new String ("John");
const number = new Number (57);
const count = new Boolean(true);

console.log(person6);
console.log(name);
console.log(number);
console.log(count);