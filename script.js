function courseMessage(course) {

    alert(
        "You selected the " +
        course +
        " course."
    );
}


function registerStudent(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    alert(
        "Registration successful!\n\n" +
        "Student: " + name +
        "\nCourse: " + course
    );

}
function loginStudent(event) {

    event.preventDefault();

    let studentId =
        document.getElementById("studentId").value;

    let password =
        document.getElementById("password").value;


    if (
        studentId === "student123" &&
        password === "12345"
    ) {

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Student ID or Password.");

    }
}


function logout() {

    window.location.href = "login.html";

}
function showAdminMessage(section) {

    alert(
        "You selected: " + section
    );

}


function adminLogout() {

    window.location.href = "index.html";

}
function adminLogin(event) {

    event.preventDefault();

    let username =
        document.getElementById("adminUsername").value;

    let password =
        document.getElementById("adminPassword").value;


    if (
        username === "admin" &&
        password === "admin123"
    ) {

        window.location.href = "admin.html";

    } else {

        alert("Invalid admin username or password.");

    }

}
// Student list

let students =
    JSON.parse(localStorage.getItem("students")) || [];


// Add Student

function addStudent(event) {

    event.preventDefault();


    let name =
        document.getElementById("studentName").value;

    let id =
        document.getElementById("studentId").value;

    let email =
        document.getElementById("studentEmail").value;

    let course =
        document.getElementById("studentCourse").value;


    let student = {

        name: name,
        id: id,
        email: email,
        course: course

    };


    students.push(student);


    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );


    document.querySelector("form").reset();


    displayStudents();

}


// Display Students

function displayStudents() {

    let table =
        document.getElementById("studentTable");


    if (!table) {
        return;
    }


    table.innerHTML = "";


    students.forEach(function(student, index) {

        let row = table.insertRow();


        row.innerHTML = `

            <td>${student.name}</td>

            <td>${student.id}</td>

            <td>${student.email}</td>

            <td>${student.course}</td>

            <td>
                <button
                    onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>

        `;

    });

}


// Delete Student

function deleteStudent(index) {

    students.splice(index, 1);


    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );


    displayStudents();

}


// Display students when page opens

displayStudents();
// ===============================
// STUDENT RESULTS
// ===============================

let results =
    JSON.parse(localStorage.getItem("results")) || [];


// Add Result

function addResult(event) {

    event.preventDefault();


    let studentId =
        document.getElementById("resultStudentId").value;

    let subject =
        document.getElementById("subject").value;

    let marks =
        Number(document.getElementById("marks").value);


    let grade;


    if (marks >= 90) {
        grade = "A+";
    }
    else if (marks >= 80) {
        grade = "A";
    }
    else if (marks >= 70) {
        grade = "B";
    }
    else if (marks >= 60) {
        grade = "C";
    }
    else if (marks >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }


    let result = {

        studentId: studentId,

        subject: subject,

        marks: marks,

        grade: grade

    };


    results.push(result);


    localStorage.setItem(
        "results",
        JSON.stringify(results)
    );


    document.querySelector("form").reset();


    displayResults();

}


// Display Results

function displayResults() {

    let table =
        document.getElementById("resultsTable");


    if (!table) {
        return;
    }


    table.innerHTML = "";


    results.forEach(function(result, index) {

        let row = table.insertRow();


        row.innerHTML = `

            <td>${result.studentId}</td>

            <td>${result.subject}</td>

            <td>${result.marks}</td>

            <td>${result.grade}</td>

            <td>
                <button
                    onclick="deleteResult(${index})">
                    Delete
                </button>
            </td>

        `;

    });

}


// Delete Result

function deleteResult(index) {

    results.splice(index, 1);


    localStorage.setItem(
        "results",
        JSON.stringify(results)
    );


    displayResults();

}


// Load Results

displayResults();
// ===============================
// SHOW STUDENT RESULTS
// ===============================

function displayMyResults() {

    let resultBox =
        document.getElementById("myResults");


    if (!resultBox) {
        return;
    }


    let studentId = "student123";


    let studentResults =
        results.filter(function(result) {

            return result.studentId === studentId;

        });


    if (studentResults.length === 0) {

        resultBox.innerHTML =
            "<p>No results available.</p>";

        return;
    }


    resultBox.innerHTML = "";


    studentResults.forEach(function(result) {

        let resultItem =
            document.createElement("p");


        resultItem.innerHTML =
            result.subject +
            " : " +
            result.marks +
            "/100 (" +
            result.grade +
            ")";


        resultBox.appendChild(resultItem);

    });

}


displayMyResults();