"use strict";
// Type decaleration
function introduceStudent(student) {
    let introduction = `Name: ${student.fullName}`;
    introduction += `\nDOB: ${student.dateOfBirth}`;
    introduction += `\nCourses: ${student.courses.join(", ")}`;
    return introduction;
}
const students = [
    {
        fullName: "Jonatan V",
        dateOfBirth: new Date("1996-12-26 18:00"),
        courses: [
            "FE23 - Typescript",
            "FE23 - AM2",
        ],
        expelled: false,
    },
    {
        fullName: "John D",
        dateOfBirth: new Date("1993-12-26 18:00"),
        courses: [
            "FE23 - Typescript",
        ],
        expelled: true,
    },
    {
        fullName: "Pelle S",
        dateOfBirth: new Date("1998-12-26 18:00"),
        courses: [
            "FE23 - Typescript",
            "FE23 - AM2",
        ],
        expelled: false,
    }
];
function listStudents(students) {
    students.map(student => {
        console.log(student.fullName);
    });
}
// listStudents([student1])
// introduceAllStudents except expelled
function introduceAllStudents(students) {
    students
        .filter(student => !student.expelled)
        .forEach(student => {
        console.log(introduceStudent(student));
        console.log("\n\n");
    });
}
introduceAllStudents(students);
// getallStudentsFromCourse
function getAllStudentsFromCourse(course, students) {
    return students.filter(student => student.courses.includes(course));
}
const am2Students = getAllStudentsFromCourse("FE23 - AM2", students);
const tsStudents = getAllStudentsFromCourse("FE23 - Typescript", students);
console.log("Students taking FE23 - AM2", am2Students.length);
console.log("Students taking FE23 - Typescript", tsStudents.length);
