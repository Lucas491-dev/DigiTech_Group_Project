let userSubjects
let subjectplaceholder = localStorage.getItem('takenSubjectsStorage')
if (subjectplaceholder){
    userSubjects = JSON.parse(subjectplaceholder);
}
let tasks = JSON.parse(localStorage.getItem('assessments')) || []; //make assesement obnkecyt for local storage yipeee

const subjectList = document.getElementById("subjectList");
const selectedSubject = document.getElementById("selectedSubject");
const dropdown = document.getElementById("subjectDropdown");
const addTaskButton = document.getElementById("addTaskButton");
const taskNameInput = document.getElementById("taskName");
const taskInfoInput = document.getElementById("taskInfo");
const taskDueInput = document.getElementById("taskDue");
const taskTable = document.getElementById("taskTable");


for (let i = 0; i < userSubjects.length; i++) { //each subject gets a dropdown thank u bulma for the copy paste
    const subject = userSubjects[i];
    const item = document.createElement("a");
    item.classList.add("dropdown-item");
    item.textContent = subject.name;

    item.addEventListener("click", () => {
        selectedSubject.textContent = subject.name;
        dropdown.classList.remove("is-active");
    });

    subjectList.appendChild(item);
}

dropdown.querySelector(".dropdown-trigger button").addEventListener("click", () => {  //is active is just is dropdown on or not.
    dropdown.classList.toggle("is-active");
});

addTaskButton.addEventListener("click", () => {
    const subject = selectedSubject.textContent; //idk WHY .TRIM IS NEEDED BUT IT DOESNT WORK OTHERWISE 
    const taskName = taskNameInput.value.trim();
    const taskDue = taskDueInput.value.trim();
    const taskInfo = taskInfoInput.value.trim();

    if (subject === "Select Subject" || !taskName) {
        alert("Please select a subject and input an assessment name.");
        return; //return so it returns to the strary otherwise the task gets incomplete fields 
    }

    const newTask = { subject, taskName, taskDue, taskInfo };
    tasks.push(newTask); //task gets all the ifno required

    // Save to local storage
    localStorage.setItem('assessments', JSON.stringify(tasks));

    makeTable();

    taskNameInput.value = ""; //reset task input fields
    taskDueInput.value = "";
    taskInfoInput.value = "";
});


function makeTable() { //print the task table
    taskTable.innerHTML = `
        <tr>
            <th>Subject:</th>
            <th>Task:</th>
            <th>Due Date:</th>
            <th>Notes:</th>
        </tr>`;

    for (let i = 0; i < tasks.length; i++) { //print for each task
        const task = tasks[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task.subject}</td>
            <td>${task.taskName}</td>
            <td>${task.taskDue}</td>
            <td>${task.taskInfo}</td>`;
        taskTable.appendChild(row);
    }
}

window.onload = makeTable;
