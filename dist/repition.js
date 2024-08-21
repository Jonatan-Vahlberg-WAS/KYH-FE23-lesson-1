"use strict";
//! Primary types
// string, number, boolean, undefined, null, symbol, any
// array string[] boolean[] {...}[]
//! functions
// Typed params or kwargs
function add2(a, b) {
    return a + b;
}
add2(0, 1);
//Typed returns
function divide2(a, b) {
    if (b === 0) {
        return NaN;
    }
    return a / b;
}
//void returns
function manipulateArr(array) {
    return;
}
const l1 = {
    area: 200,
    address: "ABC vägen 123",
    postalCode: 11122,
    hasBalcony: false,
};
const l2 = {
    area: 200,
    address: "ABC vägen 123",
    postalCode: 11122,
    hasBalcony: false,
    type: "appartment",
    agent: "CA",
    hasWindows: undefined // or boolean
};
const currentStudents = [];
//Steg 2: Lägg till nya studenter
function addStudent(data) {
    const potentialId = Math.floor(Math.random() * 80000);
    const hasOverlappingId = currentStudents.some(student => student.id === potentialId);
    if (hasOverlappingId) {
        return addStudent(data);
    }
    const newStudent = Object.assign(Object.assign({}, data), { id: potentialId, courses: [] });
    currentStudents.push(newStudent);
}
addStudent({
    fullName: "Micke f",
    dateOfBirth: new Date(),
    emailAddress: "micke.f@kyh.com",
});
addStudent({
    fullName: "Sara k",
    dateOfBirth: new Date(),
    emailAddress: "sara.k@kyh.com"
});
//steg 3 Uppdatera studentinformation
function updateStudentInfo(id, updatedData) {
    const studentIndex = currentStudents.findIndex(s => s.id === id);
    if (studentIndex === -1) {
        return console.log("ERROR: Student not found");
    }
    currentStudents[studentIndex] = Object.assign(Object.assign({}, currentStudents[studentIndex]), updatedData);
}
updateStudentInfo(currentStudents[0].id, {
    fullName: "Micke F",
    dateOfBirth: new Date("1990-10-01"),
    emailAddress: "micke.f@kyh.com",
});
updateStudentInfo(245, {
    fullName: "Micke F",
    dateOfBirth: new Date("1990-10-01"),
    emailAddress: "micke.f@kyh.com",
});
//Steg 4: Hantera kursanmälningar
function manageCourseEnrollment(id, course, action) {
    const studentIndex = currentStudents.findIndex(s => s.id === id);
    if (studentIndex === -1) {
        return console.log("ERROR: Student not found");
    }
    const courseIndex = currentStudents[studentIndex].courses.findIndex(c => c === course);
    if (action === "ADD") {
        if (courseIndex !== -1) {
            return console.log("ERROR: Student is allready enrolled in course");
        }
        currentStudents[studentIndex].courses.push(course);
    }
    else if (action === "REMOVE") {
        if (courseIndex === -1) {
            return console.log("ERROR: Student is not enrolled in course and cannot be removed from it");
        }
        currentStudents[studentIndex].courses.splice(courseIndex, 1);
    }
}
manageCourseEnrollment(currentStudents[1].id, "HTML/CSS", "ADD");
manageCourseEnrollment(currentStudents[1].id, "HTML/CSS", "ADD");
manageCourseEnrollment(currentStudents[1].id, "HTML/CSS", "REMOVE");
manageCourseEnrollment(currentStudents[1].id, "HTML/CSS", "REMOVE");
function expellStudent(id) {
    const studentIndex = currentStudents.findIndex(s => s.id === id);
    const student = currentStudents[studentIndex];
    if (studentIndex === -1) {
        return console.log("ERROR: Student not found");
    }
    currentStudents.splice(studentIndex, 1);
    console.log(`Student ${student.fullName} has been expelled`);
}
expellStudent(currentStudents[1].id);
expellStudent(8999);
currentStudents.forEach(student => {
    console.log("\n");
    console.table(student);
});
