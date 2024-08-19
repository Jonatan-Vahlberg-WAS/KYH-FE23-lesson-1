"use strict";
// Type decaleration
const students2 = [
    {
        fullName: "Jonatan V",
        dateOfBirth: new Date("1996-12-26 18:00"),
        courses: ["AM2", "TS"],
    },
    {
        fullName: "John D",
        dateOfBirth: new Date("1993-12-26 18:00"),
        courses: ["TS"],
        expelled: true,
    },
    {
        fullName: "Pelle S",
        dateOfBirth: new Date("1998-12-26 18:00"),
        courses: ["AM2", "TS", "HTML/CSS"],
        expelled: false,
        optEmailAddress: "pelle.svanslos@kyh.com"
    }
];
// getallStudentsFromCourse
function getAllStudentsFromCourseAlias(course, students) {
    return students.filter(student => student.courses.includes(course));
}
const am2Students2 = getAllStudentsFromCourseAlias("AM2", students2);
const tsStudents2 = getAllStudentsFromCourseAlias("TS", students2);
console.log("Students taking FE23 - AM2", am2Students2.length);
console.log("Students taking FE23 - Typescript", tsStudents2.length);
function mailAllStudents(students, mail, signature) {
    students.filter(student => student.optEmailAddress)
        .forEach(student => {
        console.log(`Sending mail to ${student.optEmailAddress}`);
        console.log(`Mail: ${mail}`);
        if (signature) {
            console.log(`Signature: ${signature}`);
        }
    });
}
mailAllStudents(am2Students2, "Welcome back! :)", "// Jonatan Vahlberg");
mailAllStudents(tsStudents2, "Welcome back! :)");
