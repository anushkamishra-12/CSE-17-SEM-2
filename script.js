
let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
  let name = document.getElementById("name").value;
  let course = document.getElementById("course").value;
  let age = document.getElementById("age").value;

  if (name === "" || course === "" || age === "") {
    alert("Please fill all fields");
    return;
  }

  students.push({ name, course, age });

  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("name").value = "";
  document.getElementById("course").value = "";
  document.getElementById("age").value = "";

  displayStudents();
}

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

function displayStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    list.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>${student.age}</td>
        <td><button onclick="deleteStudent(${index})">Delete</button></td>
      </tr>
    `;
  });
}

displayStudents();