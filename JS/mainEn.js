let education = document.getElementById('nav-education');
let training = document.getElementById('nav-training');
let experience = document.getElementById('nav-experience');

let title = document.getElementById('section2-default')
let dl1 = document.getElementById('dl1');
let dl2 = document.getElementById('dl2');
let dl3 = document.getElementById('dl3');

education.onclick = revealEducation;

function revealEducation() {
    dl1.classList.remove('hidden');
    education.style.backgroundColor = "rgb(31, 31, 160)"
    education.style.color = "rgb(234, 234, 255)"
    training.style.backgroundColor = "rgba(166, 166, 223, 0.801)"
    training.style.color = "black"
    experience.style.backgroundColor = "rgba(166, 166, 223, 0.801)"
    experience.style.color = "black"
    title.classList.remove('section2-default')
    title.classList.add('hidden');
    dl2.classList.add('hidden')
    dl3.classList.add('hidden')
}

training.onclick = revealTraining;

function revealTraining() {
    dl2.classList.remove('hidden');
    training.style.backgroundColor = "rgb(31, 31, 160)"
    training.style.color = "rgb(234, 234, 255)"
    experience.style.backgroundColor = "rgba(166, 166, 223, 0.801)"
    experience.style.color = "black"
    education.style.backgroundColor = "rgba(166, 166, 223, 0.801)"
    education.style.color = "black"
    title.classList.remove('section2-default')
    title.classList.add('hidden');
    dl1.classList.add('hidden')
    dl3.classList.add('hidden')
}

experience.onclick = revealExperience;

function revealExperience() {
    dl3.classList.remove('hidden');
    experience.style.backgroundColor = "rgb(31, 31, 160)"
    experience.style.color = "rgb(234, 234, 255)"
    education.style.backgroundColor = "rgba(166, 166, 223, 0.801)"
    education.style.color = "black"
    training.style.backgroundColor = "rgba(166, 166, 223, 0.801)"
    training.style.color = "black"
    title.classList.remove('section2-default')
    title.classList.add('hidden');
    dl2.classList.add('hidden')
    dl1.classList.add('hidden')
}