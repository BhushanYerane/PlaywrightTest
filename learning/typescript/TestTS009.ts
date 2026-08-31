//TypeScript classes
//it provide a blueprint for creating objects with predefined properties and methods.
class Student {
    name: string;
    age: number;
    standard: number | string;
    rollNumber: number;
    school: string;
    city: string;
    percentage: number;

    constructor(name: string,standard: number | string,age: number,rollNumber: number,school: string,city: string,percentage: number) {
        this.name = name;
        this.standard = standard;
        this.age = age;
        this.rollNumber = rollNumber;
        this.school = school;
        this.city = city;
        this.percentage = percentage;
    }

    displayStudent(): void {
        console.log(` Student Details
            -------------------------
            Name       : ${this.name}
            Age        : ${this.age}
            Class      : ${this.standard}
            Roll No.   : ${this.rollNumber}
            School     : ${this.school}
            City       : ${this.city}
            Percentage : ${this.percentage}%
        `);
    }

    isPassed(): void {
        console.log(
            `${this.name} has ${this.percentage >= 35 ? "Passed ✅" : "Failed ❌"}`
        );
    }
}

const student1 = new Student("Bhushan","10th",14,101,"ABC High School","Pune",88.5);
const student2 = new Student("Lala JEE",7,10,102,"XYZ Public School","Mumbai",30);

student1.displayStudent();
student1.isPassed();

student2.displayStudent();
student2.isPassed();
