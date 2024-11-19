let btn = document.getElementById("generate-resume");

btn.addEventListener("click", function(evt) {
    evt.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let education = document.getElementById("education").value;
let skills = document.getElementById("skills").value;

let resumeDiv = document.getElementById("resume");
   resumeDiv.innerHTML = `
    <h2>${name}</h2>
    <h3>Email</h3>
    <p>Email address: ${email}</p>
    <h3>Phone</h3>
    <p>Phone Number: ${phone}</p>
    <h3>Education</h3>
    <p>Educational Background: ${education}</p>
    <h3>Skills</h3>
    <p>Programming Languages: ${skills}</p>
   `; 
});