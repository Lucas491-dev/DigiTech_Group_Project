const taskTable = document.getElementById("taskTable");
const gradeSection = document.getElementById("gradeSection");
const gradedTable = document.getElementById("gradedTable");
const subjectDisplay = document.getElementById("subjectDisplay");
const taskNameDisplay = document.getElementById("taskNameDisplay");
const dueDateDisplay = document.getElementById("dueDateDisplay");
const notesDisplay = document.getElementById("notesDisplay");
const gradeInput = document.getElementById("gradeInput");
const saveGradeButton = document.getElementById("saveGradeButton");
let tasks = JSON.parse(localStorage.getItem('assessments')) || []; // get the assessments from script.js
let gradedTasks = JSON.parse(localStorage.getItem('gradedTasks')) || []; // make new object for the tasks once graded: a task once graded goes in here and leaves 'assessments'
let selectedTaskIndex = null;
let selectedSubject
let userSubjects
let subjectplaceholder = localStorage.getItem('takenSubjectsStorage')
if (subjectplaceholder){
    userSubjects = JSON.parse(subjectplaceholder);
}

function makeTable() { // print out assessment table, exactly the same as script.js (im too lazy to put it in the html)
    taskTable.innerHTML = `
        <tr>
            <th>Subject:</th>
            <th>Task:</th>
            <th>Due Date:</th>
            <th>Notes:</th>
            <th>Grade</th>
        </tr>`;

    tasks.forEach((task, index) => { // fill the task table
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${task.subject}</td>
                <td>${task.taskName}</td>
                <td>${task.taskDue}</td>
                <td>${task.taskInfo}</td>
                <td><button class='button is-primary' data-index="${index}">Grade</button></td>`; // only get that tasks index for the selected task.

        row.querySelector("button").addEventListener("click", () => showGradeSection(task, index)); // the selected index is transferred into showGradeSection function, and the task as well obviously
        taskTable.appendChild(row);
    });
}

function showGradeSection(task, index) {
    selectedTaskIndex = index;
    subjectDisplay.textContent = task.subject;
    taskNameDisplay.textContent = task.taskName;
    dueDateDisplay.textContent = task.taskDue;
    notesDisplay.textContent = task.taskInfo;   
    // the grade section fields are filled out. subjectDisplay and others are from the HTML. there is probably a better way to do this but im lazy
    selectedSubject = task.subject;
}

saveGradeButton.addEventListener("click", () => {
    

    const grade = gradeInput.value;
    const gpaPlaceholder = 14 - gradeInput.selectedIndex 
    calculateGPA(gpaPlaceholder)
    //this is to check later on if the subject actually goes to ones sace (if they fail or not)

    //this was lucas btw


    if (grade && selectedTaskIndex !== null) { // if there is a grade and a task in the grade section, the grade for that task goes to addGradedTask()
        const task = tasks[selectedTaskIndex];
        addGradedTask(task, grade);
       

        tasks.splice(selectedTaskIndex, 1); // deletes task from table
        localStorage.setItem('assessments', JSON.stringify(tasks));  // after task is deleted localStorage gets updated - localStorage can only save strings hence JSON stringify

        makeTable(); // redoes table with updated tasks
        gradeInput.value = ""; // resets grade input to blank again
    } else {
        alert("Please enter a grade.");
    }
});

function addGradedTask(task, grade) {
    const gradedTask = {
        ...task, // the ... is a spread operator and it puts all the task fields into the grade table i think - I was stuck on this bit for awhile chatgpt did that line
        grade
    };
    gradedTasks.push(gradedTask);
    localStorage.setItem('gradedTasks', JSON.stringify(gradedTasks));

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${gradedTask.subject}</td>
        <td>${gradedTask.taskName}</td>
        <td>${gradedTask.taskDue}</td>
        <td>${gradedTask.taskInfo}</td>
        <td>${gradedTask.grade}</td>
    `;
    gradedTable.appendChild(row); 
    location.reload();
}

function loadGradedTasks() {
    gradedTable.innerHTML = ''; // clear the table first to avoid duplicate entries on reload

    gradedTasks.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task.subject}</td>
            <td>${task.taskName}</td>
            <td>${task.taskDue}</td>
            <td>${task.taskInfo}</td>
            <td>${task.grade}</td>
            <td><button class="deleteGradeButton button is-danger" data-index="${index}">Delete</button></td>
        `;
        gradedTable.appendChild(row);

        const deleteButton = row.querySelector(".deleteGradeButton"); //query selector before the button is a little freaky- it means that for only this function the button will do that, it didnt work noramlly for some reaosn
        deleteButton.addEventListener("click", () => {
            deleteGradedTask(index);  // call the delete function with the correct index/task
        });
    });
}

function deleteGradedTask(index) {
    gradedTasks.splice(index, 1); // remove the task from the object
    localStorage.setItem('gradedTasks', JSON.stringify(gradedTasks)); // Update local storage
    loadGradedTasks(); // reload the table to reflect changes
}

// ensure the tables are populated when the page loads-this is the same as just running the functions immediately in the js but i prefer this, its a little cleaner and easier to keep track of.
window.onload = () => {
    makeTable();
    loadGradedTasks();
};

function calculateGPA(gpaPlaceholder) {
    //this goes through and adds the gpa on a 15 scale
    const subject = userSubjects.find(s => s.name === selectedSubject);
        subject.numAssignments++;
        subject.gpa = parseFloat((((subject.gpa * (subject.numAssignments - 1)) + gpaPlaceholder) / subject.numAssignments).toFixed(2));
        localStorage.setItem('takenSubjectsStorage', JSON.stringify(userSubjects));
}
