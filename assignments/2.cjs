const fs = require("fs");

const file = "attendance.txt";


function addStudent(name) {
    fs.appendFileSync(file, name + "\n");
    console.log("Student added successfully!");
}

function showStudents() {
    if (!fs.existsSync(file)) {
        console.log("No attendance record found.");
        return;
    }

    const data = fs.readFileSync(file, "utf8");

    console.log("\nStudent Attendance List:");
    console.log(data);
}


function updateStudent(oldName, newName) {
    if (!fs.existsSync(file)) {
        console.log("File not found.");
        return;
    }

    let students = fs.readFileSync(file, "utf8")
        .split("\n")
        .filter(name => name !== "");

    const index = students.indexOf(oldName);

    if (index !== -1) {
        students[index] = newName;
        fs.writeFileSync(file, students.join("\n") + "\n");
        console.log("Student name updated successfully!");
    } else {
        console.log("Student not found.");
    }
}

function deleteStudent(name) {
    if (!fs.existsSync(file)) {
        console.log("File not found.");
        return;
    }

    let students = fs.readFileSync(file, "utf8")
        .split("\n")
        .filter(student => student !== "");

    students = students.filter(student => student !== name);

    fs.writeFileSync(file, students.join("\n") + "\n");

    console.log("Student deleted successfully!");
}



addStudent("Harshit");
addStudent("Rahul");
addStudent("Aman");

showStudents();

updateStudent("Rahul", "Rohit");

showStudents();

deleteStudent("Aman");

showStudents();