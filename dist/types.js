"use strict";
// Type decaleration
function introduceStudent(name, age, isStudent, courses) {
    let introduction = `Name: ${name}`;
    introduction += `\nAge: ${age}`;
    introduction += `\nIs student: ${isStudent ? "Yes" : "No"}`;
    introduction += `\nCourses: ${courses.join(", ")}`;
    return introduction;
}
const student1 = {
    fullName: "Jonatan V",
    dateOfBirth: new Date("1996-12-26 18:00"),
    courses: [
        "FE23 - Typescript",
        "FE23 - AM2",
    ],
    expelled: false,
};
function listStudents(students) {
    students.map(student => {
        console.log(student.fullName);
    });
}
listStudents([student1]);
// introduceAllStudents except expelled
// getallStudentsFromCourse 
