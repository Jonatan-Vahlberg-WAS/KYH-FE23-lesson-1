"use strict";
const fullName2 = "Jonatan";
const age2 = 27;
const isStudent2 = false;
const courses2 = [
    "FE23 - Typescript",
    "FE23 - AM2",
];
function introduce(name, age, isStudent, courses) {
    let introduction = `Name: ${name}`;
    introduction += `\nAge: ${age}`;
    introduction += `\nIs student: ${isStudent ? "Yes" : "No"}`;
    introduction += `\nCourses: ${courses.join(", ")}`;
    return introduction;
}
console.log(introduce(fullName2, age2, isStudent2, courses2));
/*
Skapa en funktion addCourse som tar en kurs (sträng) som argument och lägger till kursen i listan av kurser.
*/
function addCourse(course, courses) {
    courses.push(course);
}
addCourse("FE24 - Typescript", courses2);
console.log(introduce(fullName2, age2, isStudent2, courses2));
// Skapa en funktion listCourses som returnerar en sträng med alla kurser separerade med kommatecken.
function listCourses(courses) {
    return `${courses.join(", ")}`;
}
console.log(listCourses(courses2));
