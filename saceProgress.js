let subjectplaceholder = localStorage.getItem('takenSubjectsStorage')
let currentSubjects = []
if (subjectplaceholder){
    currentSubjects = JSON.parse(subjectplaceholder);
}
let litsubjects = []
let litcredits = 0, pointsplaceholder = 0, numeracySubjects = [], numeracyCredits = 0, creditsNum = 0
let subjectsForPoints = []
let grades = ["E-",
    "E","E+","D-","D","D+","C-","C","C+","B-","B","B+","A-","A","A+"

]
let lettergrade 
for(let i = 0; i< currentSubjects.length; i++){
    if (currentSubjects[i].gpa >= 7){
    creditsNum += currentSubjects[i].numSemesters *10   
    pointsplaceholder =  currentSubjects[i].numSemesters * 10
    }else{
        pointsplaceholder = 0
    }
    if (currentSubjects[i].gpa == 8 && currentSubjects[i].numAssignments == 0){
        lettergrade = "Assumed C (No Grade Yet)"
        
       
    } else{
        lettergrade = grades[parseInt(currentSubjects[i].gpa)]
       
    }
    subjectsForPoints.push({
        name: currentSubjects[i].name,
        points: pointsplaceholder,
        gpa: currentSubjects[i].gpa,
        lettergpa: lettergrade
    });
    

    if(currentSubjects[i].name === "English" || currentSubjects[i].name === "Essential English" ||currentSubjects[i].name === "English as an Additional Language" || currentSubjects[i].name === "English Literary Studies"){
       if (currentSubjects[i].gpa >= 7){
             litcredits += currentSubjects[i].numSemesters * 10
          
       }
       litsubjects.push({
        name: currentSubjects[i].name,
        points: pointsplaceholder,
        gpa: currentSubjects[i].gpa,
        lettergpa: lettergrade
    });

    }if(currentSubjects[i].name === "Essential Mathematics" || currentSubjects[i].name === "General Mathematics" ||currentSubjects[i].name === "Mathematical Methods" || currentSubjects[i].name === "Specialist Mathematics"){
        if (currentSubjects[i].gpa >= 7){
                numeracyCredits += currentSubjects[i].numSemesters * 10
                
     }
    numeracySubjects.push({
            name: currentSubjects[i].name,
            points: pointsplaceholder,
            gpa: currentSubjects[i].gpa,
            lettergpa: lettergrade
        });
    }
}

console.log(litsubjects)

function toggleContent(contentElement) {
    if (contentElement.style.display === "none") {
        contentElement.style.display = "block";
    } else {
        contentElement.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    
    var collapsible = document.querySelector(".collapsible");
    var content = document.querySelector(".content");
    var dynamicText = document.getElementById("dynamicText");
    content.style.display = "none";
    dynamicText.textContent = ""; 
    collapsible.innerHTML = "Literacy (need 20): " + litcredits;
    if (litcredits>=20){
        collapsible.style.backgroundColor = "green";
    }else{
        collapsible.style.backgroundColor = "red";
    }
    collapsible.addEventListener("click", function () {
                if (content.style.display === "none") {
                    content.style.display = "block";
                    
                  
                    dynamicText.innerHTML = "";

                    litsubjects.forEach(function (subject) {
                                
                            let listItem = document.createElement("p");
                            listItem.textContent = `${subject.name}: ${subject.points} credits | GPA: ${subject.lettergpa} | Raw GPA: ${subject.gpa}`;
                            listItem.style.color = getColorForGPA(subject.gpa);
                            dynamicText.appendChild(listItem); 
                        }
                    );


                } else {
                    content.style.display = "none";
                    dynamicText.textContent = "";  
                }
            }
        );
    }
);

    document.addEventListener('DOMContentLoaded', function () {

    var collapsible = document.querySelector(".collapsiblenumeracy");
    var content = document.querySelector(".contentnumeracy");
    var dynamicText = document.getElementById("dynamicTextnumeracy");
    collapsible.innerHTML = "Numeracy (need 10): " + numeracyCredits;
    if (numeracyCredits>=10){
        collapsible.style.backgroundColor = "green";
    }else{
        collapsible.style.backgroundColor = "red";
    }
    collapsible.addEventListener("click", function () {
        // Toggle content visibility
        if (content.style.display === "none") {
            content.style.display = "block";
            
            // Clear the previous content
            dynamicText.innerHTML = "";

            
            numeracySubjects.forEach(function (subject) {
                
                let listItem = document.createElement("p");
                listItem.textContent = `${subject.name}: ${subject.points} credits | GPA: ${subject.lettergpa} | Raw GPA: ${subject.gpa}`;
                listItem.style.color = getColorForGPA(subject.gpa);
                dynamicText.appendChild(listItem); 
            });


        } else {
            content.style.display = "none";
            dynamicText.textContent = "";  // Clear the content when collapsing
        }
    });
    });

    document.addEventListener('DOMContentLoaded', function () {

    var collapsible = document.querySelector(".collapsibleOveralPoints");
    var content = document.querySelector(".contentPoints");
    var dynamicText = document.getElementById("dynamicTextPoints");
    collapsible.innerHTML = "Stage 1 or 2 subjects (at least 120 Credits): " + creditsNum;
    if (numeracyCredits>=120){
        collapsible.style.backgroundColor = "green";
    }else{
        collapsible.style.backgroundColor = "red";
    }
    collapsible.addEventListener("click", function () {
        // Toggle content visibility
        if (content.style.display === "none") {
            content.style.display = "block";
            
            // Clear the previous content
            dynamicText.innerHTML = "";

            
             
             subjectsForPoints.forEach(function (subject) {
                
                let listItem = document.createElement("p");
                listItem.textContent = `${subject.name}: ${subject.points} credits | GPA: ${subject.lettergpa} | Raw GPA: ${subject.gpa}`;
                listItem.style.color = getColorForGPA(subject.gpa);
                dynamicText.appendChild(listItem); 
            
            });


        } else {
            content.style.display = "none";
            dynamicText.textContent = "";  
        }
    });
    });

function getColorForGPA(gpa) {
        if (gpa < 7) {
            return 'red'; 
        }
    }