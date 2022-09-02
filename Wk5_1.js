class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
    console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new Student('Tom', 'Sawyer', '6235555555', 'A');
let student2 = new Student('Sally', 'Smith', '4805555555', 'B');
let student3 = new Student('Jyn', 'Cassian', '6025555555', 'D');
let student4 = new Student('Bob', 'Builder', '8085555555', 'B');

student1.introduce();
student2.introduce();
student3.introduce();
student4.introduce();


