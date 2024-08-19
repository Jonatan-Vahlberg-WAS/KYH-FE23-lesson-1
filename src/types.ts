// Type decaleration

type Student = {
    fullName: string;
    dateOfBirth: Date;
    courses: string[];
    expelled: boolean;
}

function introduceStudent(name: string, age: number, isStudent: boolean, courses: string[]): string {
    let introduction = `Name: ${name}`
    introduction += `\nAge: ${age}`
    introduction += `\nIs student: ${isStudent ? "Yes" : "No"}`
    introduction += `\nCourses: ${courses.join(", ")}`
    return introduction
}



const student1: Student = {
    fullName: "Jonatan V",
    dateOfBirth: new Date("1996-12-26 18:00"),
    courses: [
        "FE23 - Typescript",
        "FE23 - AM2",
    ],
    expelled: false,
}

function listStudents(students: Student[]) {
    students.map(student => {
        console.log(student.fullName)
    })
}

listStudents([student1])


// introduceAllStudents except expelled

// getallStudentsFromCourse 
