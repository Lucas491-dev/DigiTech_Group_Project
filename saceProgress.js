let subjectplaceholder = localStorage.getItem('takenSubjectsStorage')
let currentSubjects = []
if (subjectplaceholder){
    currentSubjects = JSON.parse(subjectplaceholder);
}
let litsubjects = []
let litcredits = 0

let numeracySubjects = []
let numeracyCredits = 0
let creditsNum = 0
let subjectsForPoints = []
for(let i = 0; i< currentSubjects.length; i++){
    creditsNum += currentSubjects[i].numSemesters *10
    subjectsForPoints.push({[currentSubjects[i].name]:currentSubjects[i].numSemesters * 10 })
    if(currentSubjects[i].name === "English" || currentSubjects[i].name === "Essential English" ||currentSubjects[i].name === "English as an Additional Language" || currentSubjects[i].name === "English Literary Studies"){
        litcredits += currentSubjects[i].numSemesters * 10
        litsubjects.push({[currentSubjects[i].name]:currentSubjects[i].numSemesters * 10 })
        
    }if(currentSubjects[i].name === "Essential Mathematics" || currentSubjects[i].name === "General Mathematics" ||currentSubjects[i].name === "Mathematical Methods" || currentSubjects[i].name === "Specialist Mathematics"){
    numeracyCredits += currentSubjects[i].numSemesters * 10
    numeracySubjects.push({[currentSubjects[i].name]:currentSubjects[i].numSemesters * 10 })
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
  // Set the button's initial content
  collapsible.innerHTML = "Literacy (need 20): " + litcredits;
  if (litcredits>=20){
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

          // Loop through litsubjects and add each item to dynamicText
          litsubjects.forEach(function (subject) {
              // Extract key and value from the subject object
              for (let [subjectName, credits] of Object.entries(subject)) {
                  let listItem = document.createElement("p");
                  listItem.textContent = `${subjectName}: ${credits} credits`;
                  dynamicText.appendChild(listItem); // Add each item as a paragraph
              }
          });

      } else {
          content.style.display = "none";
          dynamicText.textContent = "";  // Clear the content when collapsing
      }
  });
});

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
                
                for (let [subjectName, credits] of Object.entries(subject)) {
                    let listItem = document.createElement("p");
                    listItem.textContent = `${subjectName}: ${credits} credits`;
                    dynamicText.appendChild(listItem); 
                }
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
                
                for (let [subjectName, credits] of Object.entries(subject)) {
                    let listItem = document.createElement("p");
                    listItem.textContent = `${subjectName}: ${credits} credits`;
                    dynamicText.appendChild(listItem); 
                }
            });

        } else {
            content.style.display = "none";
            dynamicText.textContent = "";  
        }
    });
    });

