// Script to style the navigation-skills section

let education = document.getElementById('nav-education');
let training = document.getElementById('nav-training');
let experience = document.getElementById('nav-experience');
let homeBtn = document.getElementById('nav-home');
let personalInfoButt = document.getElementById('nav-personal-info')

let home = document.getElementById('name')
let dl1 = document.getElementById('dl1');
let dl2 = document.getElementById('dl2');
let dl3 = document.getElementById('dl3');
let personalInfo = document.getElementById('personal-info');

education.onclick = revealEducation;
training.onclick = revealTraining;
experience.onclick = revealExperience;

function revealEducation() {
    contentReveal(dl1, dl2, dl3, education, training, experience, homeBtn, home, personalInfo, personalInfoButt)
}

function revealTraining() {
    contentReveal(dl2, dl1, dl3, training, experience, education, homeBtn, home, personalInfo, personalInfoButt)
}

function revealExperience() {
    contentReveal(dl3, dl1, dl2, experience, education, training, homeBtn, home, personalInfo, personalInfoButt)
}

function contentReveal(firstSect, secondSect, thirdSect, firstButt, secondButt, thirdButt, homeBtn, home, personalInfo, personalInfoButt){
    firstSect.classList.remove('hidden');
    secondSect.classList.add('hidden');
    thirdSect.classList.add('hidden');

    firstButt.style.backgroundColor = "#1976D2";
    firstButt.style.color = "rgb(234, 234, 255)";
    firstButt.style.height = "60px"

    secondButt.style.backgroundColor = "";
    secondButt.style.color = "";
    secondButt.style.height = "";
    secondButt.classList.add('navigation-skills-style');
    

    thirdButt.style.backgroundColor = "";
    thirdButt.style.color = "";
    thirdButt.style.height = "";
    thirdButt.classList.add('navigation-skills-style');

    homeBtn.style.backgroundColor = "";
    homeBtn.style.color = "";
    homeBtn.style.height = "";
    homeBtn.classList.add('navigation-skills-style');

    personalInfoButt.style.backgroundColor = "";
    personalInfoButt.style.color = "";
    personalInfoButt.style.height = "";
    personalInfoButt.classList.add('navigation-skills-style');    

    home.classList.remove('name');
    home.classList.add('hidden');

    personalInfo.classList.remove('personal-information-items');
    personalInfo.classList.add('hidden');


}

// Script to style the main-navigation section

homeBtn.onclick = handleHomeButton;
personalInfoButt.onclick = handlePersonalInfoButton;

function handleHomeButton() {

    deleteHistorySection();

    homeBtn.style.backgroundColor = "#1976D2";
    homeBtn.style.color = "rgb(234, 234, 255)";
    homeBtn.style.height = "60px";

    personalInfoButt.style.backgroundColor = "";
    personalInfoButt.style.color = "";
    personalInfoButt.style.height = "";
    personalInfoButt.classList.add('navigation-skills-style');

    home.classList.remove('hidden');
    home.classList.add('name');

    personalInfo.classList.remove('personal-information-items');
    personalInfo.classList.add('hidden');
}

function handlePersonalInfoButton(){

    deleteHistorySection();

    personalInfoButt.style.backgroundColor = "#1976D2";
    personalInfoButt.style.color = "rgb(234, 234, 255)";
    personalInfoButt.style.height = "60px";

    homeBtn.style.backgroundColor = "";
    homeBtn.style.color = "";
    homeBtn.style.height = "";
    homeBtn.classList.add('navigation-skills-style');

    personalInfo.classList.remove('hidden');
    personalInfo.classList.add('personal-information-items');

    home.classList.remove('name');
    home.classList.add('hidden');

}

function deleteHistorySection(){
    dl1.classList.add('hidden');
    dl2.classList.add('hidden');
    dl3.classList.add('hidden');
    
    education.style.backgroundColor = "";
    education.style.color = "";
    education.style.height = "";
    education.classList.add('navigation-skills-style');

    training.style.backgroundColor = "";
    training.style.color = "";
    training.style.height = "";
    training.classList.add('navigation-skills-style');
    
    experience.style.backgroundColor = "";
    experience.style.color = "";
    experience.style.height = "";
    experience.classList.add('navigation-skills-style');
}