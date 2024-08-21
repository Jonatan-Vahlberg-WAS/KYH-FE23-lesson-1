

//! Primary types

// string, number, boolean, undefined, null, symbol, any

// array string[] boolean[] {...}[]

//! functions

// Typed params or kwargs
function add2(a: number, b: number) {
    return a + b;
}

add2(0,1)

//Typed returns
function divide2(a: number, b: number): number {
    if(b === 0) {
        return NaN
    }
    return a / b;
}

//void returns
function manipulateArr(array: any[]) {
    return 
}

//! Types

type Listing = {
    area: number;
    address: string;
    postalCode: number;
    hasBalcony: boolean;
}

const l1: Listing = {
    area: 200,
    address: "ABC vägen 123",
    postalCode: 11122,
    hasBalcony: false,
}

type CorperationAgent = "CA"

type PrivateAgent = "PA"

// Type aliases


type ListingType = "appartment" | "villa";

type ListingAgent = CorperationAgent | PrivateAgent

// optional

type UpdatedListing = {
    area: number;
    address: string;
    postalCode: number;
    hasBalcony: boolean;
    type: ListingType,
    agent: ListingAgent,
    hasWindows: undefined | boolean;
    backyardArea?: number;
}

const l2: UpdatedListing = {
    area: 200,
    address: "ABC vägen 123",
    postalCode: 11122,
    hasBalcony: false,
    type: "appartment",
    agent: "CA",
    hasWindows: undefined // or boolean

}


// Task
//Steg 1: Introducera ett unikt ID för studenter och typen StudentData
type StudentData = {
    fullName: string;
    dateOfBirth: Date;
    emailAddress?: string;
}

type Student = StudentData & {
    id: number;
    courses: Course[];
    expelled?: boolean;

}

const currentStudents: Student[] = []

//Steg 2: Lägg till nya studenter
function addStudent(data: StudentData){
    const potentialId = Math.floor(Math.random() * 80000);
    const hasOverlappingId = currentStudents.some(student => student.id === potentialId)
    if(hasOverlappingId) {
        return addStudent(data)
    }
    const newStudent: Student = {
        ...data,
        id: potentialId,
        courses: []
    }
    currentStudents.push(newStudent)
}

addStudent({
    fullName: "Micke f",
    dateOfBirth: new Date(),
    emailAddress: "micke.f@kyh.com",
})

addStudent({
    fullName: "Sara k",
    dateOfBirth: new Date(),
    emailAddress: "sara.k@kyh.com"
})


//steg 3 Uppdatera studentinformation

function updateStudentInfo(id: number, updatedData: StudentData) {
    const studentIndex = currentStudents.findIndex(s => s.id === id);
    
    if(studentIndex === -1) {
        return console.log("ERROR: Student not found")
    }

    currentStudents[studentIndex] = {
        ...currentStudents[studentIndex],
        ...updatedData
    }

}

updateStudentInfo(currentStudents[0].id, {
    fullName: "Micke F",
    dateOfBirth: new Date("1990-10-01"),
    emailAddress: "micke.f@kyh.com",
})

updateStudentInfo(245, {
    fullName: "Micke F",
    dateOfBirth: new Date("1990-10-01"),
    emailAddress: "micke.f@kyh.com",
})


//Steg 4: Hantera kursanmälningar

function manageCourseEnrollment(id: number, course: Course, action: "ADD" | "REMOVE") {
    const studentIndex = currentStudents.findIndex(s => s.id === id);
    
    if(studentIndex === -1) {
        return console.log("ERROR: Student not found")
    }

    const courseIndex = currentStudents[studentIndex].courses.findIndex(c => c === course);

    if(action === "ADD"){
        if(courseIndex !== -1) {
            return console.log("ERROR: Student is allready enrolled in course")
        }
        currentStudents[studentIndex].courses.push(course)
    }
    else if(action === "REMOVE") {
        if(courseIndex === -1) {
            return console.log("ERROR: Student is not enrolled in course and cannot be removed from it")
        }
        currentStudents[studentIndex].courses.splice(courseIndex, 1)
    }

}

manageCourseEnrollment(currentStudents[1].id, "HTML/CSS", "ADD")
manageCourseEnrollment(currentStudents[1].id, "HTML/CSS", "ADD")
manageCourseEnrollment(currentStudents[1].id, "HTML/CSS", "REMOVE")
manageCourseEnrollment(currentStudents[1].id, "HTML/CSS", "REMOVE")


function expellStudent(id: number) {
    const studentIndex = currentStudents.findIndex(s => s.id === id);
    const student = currentStudents[studentIndex]
    
    if(studentIndex === -1) {
        return console.log("ERROR: Student not found")
    }

    currentStudents.splice(studentIndex, 1)
    console.log(`Student ${student.fullName} has been expelled`)

}

expellStudent(currentStudents[1].id)
expellStudent(8999)

currentStudents.forEach(student => {
    console.log("\n")
    console.table(student)
})