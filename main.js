var startButton = document.querySelector('.start-activity-button');
var siteLeft = document.querySelector('.site-left-main');
var categoryValue = "";
var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var startTimer = document.querySelector('.start-timer-button');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var numbers = /^[0-9]+$/;

startButton.addEventListener('click', displayError);
// minutesInput.addEventListener('input', checkNumMin);
// secondsInput.addEventListener('input', checkNumSec);

studyButton.addEventListener('click', function() {
    studyButton.classList.toggle('study-button-active');
    meditateButton.classList.remove('meditate-button-active');
    exerciseButton.classList.remove('exercise-button-active');
    categoryValue = studyButton.value;

})

meditateButton.addEventListener('click', function() {
    meditateButton.classList.toggle('meditate-button-active');
    studyButton.classList.remove('study-button-active');
    exerciseButton.classList.remove('exercise-button-active');
    categoryValue = meditateButton.value;
})

exerciseButton.addEventListener('click', function() {
    exerciseButton.classList.toggle('exercise-button-active');
    meditateButton.classList.remove('meditate-button-active');
    studyButton.classList.remove('study-button-active');
    categoryValue = exerciseButton.value;
})

function displayActivity() {
    var secondsInput = document.querySelector('.seconds-input').value;
    var minutesInput = document.querySelector('.minutes-input').value;
    var accomplishInput = document.querySelector('.activity-input').value;
    siteLeft.innerHTML = `<h2 class="new-activity">Current Activity</h2>
                            <section class="site-left-box">
                            <p class="start-timer-goal">${accomplishInput} </p>
                            <p class="start-timer-counter">${minutesInput}:${secondsInput} </p>
                            <div class="start-timer-section">
                            <button class="start-timer-button">START</button>
                            </div>
                            </section>
    `
    startTimer = document.querySelector('.start-timer-button');
    if (categoryValue === "Study") {
        startTimer.classList.add('study-timer-button')
    }
    if (categoryValue === "Meditate") {
        startTimer.classList.add('meditate-timer-button')
    } else if (categoryValue === "Exercise") {
        startTimer.classList.add('exercise-timer-button')
    }
}

function displayError() {
    var activityInput = document.querySelector('.activity-input').value;
    var minutesInput = document.querySelector('.minutes-input').value;
    var secondsInput = document.querySelector('.seconds-input').value;
    var activityError = document.querySelector('.activity-error')
    var minutesError = document.querySelector('.minutes-error');
    var secondsError = document.querySelector('.seconds-error');
    var categoryError = document.querySelector('.category-error');
    var noError = true;
    if (activityInput === "") {
        activityError.classList.add('activity-error-active')
        noError = false;
    }
    if (categoryValue === "") {
        categoryError.classList.add('category-error-active')
        noError = false;
    }
    if (minutesInput === "") {
        minutesError.classList.add('minutes-error-active')
        noError = false;
    }
    if (secondsInput === "") {
        secondsError.classList.add('seconds-error-active')
        noError = false;
    }
    if (noError) {
        displayActivity();
    }
}



function checkNumMin() {
    if (minutesInput.value.match(numbers)) {
        var bool = false;
    } else {
        minutesInput.value = ""
    }
}


function checkNumSec() {
    if (secondsInput.value.match(numbers)) {
        var bool = false;
    } else {
        secondsInput.value = ""
    }
}