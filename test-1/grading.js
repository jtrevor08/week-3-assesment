function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

function calculateGrade(average) {
    if (average >= 80) {
        return 'A';
    } else if (average >= 70) {
        return 'B';
    }   else if (average >= 60) {
        return 'C';
    } else if (average >= 50) {
        return 'D';
    }else {
        return 'E';
    }
    }

function getvalidMark(subject) {
    let mark;

    while (true) {
        let input = prompt(`Enter the mark for ${subject}:`);

        if (input === null || input.trim() === "") {
            alert("Input cannot be empty. Please enter a valid mark.");
            continue;
        }

        return mark;
    }}

let studentName='';

while (studentName.trim() === '') {
    studentName = prompt("Enter the student's name:");
    if (studentName.trim() === '') {
        alert("Student name cannot be empty. Please enter a valid name.");
    }
}

let courseName = '';
while (courseName.trim() === '') {
    courseName = prompt("Enter the course name:") || "";
    if (courseName.trim() === '') {
        alert("Course name cannot be empty. Please enter a valid course name.");
    }
}

let mark1 = getvalidMark("Subject 1");
let mark2 = getvalidMark("Subject 2");
let mark3 = getvalidMark("Subject 3");

let average = calculateAverage(mark1, mark2, mark3);
let grade = calculateGrade(average);

console.log(`Student Name: ${studentName}`);
console.log(`Course Name: ${courseName}`);
console.log(`Marks: ${mark1}, ${mark2}, ${mark3}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Grade: ${grade}`);

alert(`Student Name: ${studentName}\nCourse Name: ${courseName}\nMarks: ${mark1}, ${mark2}, ${mark3}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`);