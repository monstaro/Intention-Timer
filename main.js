var startButton = document.querySelector('.start-activity-button');
var siteLeft = document.querySelector('.site-left-main');
var categoryValue = "";
var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var activityInput = document.querySelector('.activity-input');
var activityError = document.querySelector('.activity-error')
var minutesError = document.querySelector('.minutes-error');
var secondsError = document.querySelector('.seconds-error');
var categoryError = document.querySelector('.category-error');
var numbers = /^[0-9]+$/;

startButton.addEventListener('click', displayError);
// minutesInput.addEventListener('input', checkNumMin);
// secondsInput.addEventListener('input', checkNumSec);


studyButton.addEventListener('click', function() {
    studyButton.classList.toggle('study-button-active');
    meditateButton.classList.remove('meditate-button-active');
    exerciseButton.classList.remove('exercise-button-active');
    categoryValue = studyButton.value;
    console.log('hey')

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


function displayError() {
    var activityInputValue = activityInput.value;
    var minutesInputValue = minutesInput.value;
    var secondsInputValue = secondsInput.value;
    var noError = true;
    if (activityInputValue === "") {
        activityError.classList.add('activity-error-active')
        noError = false;
    }
    if (activityInputValue !== "") {
        activityError.classList.remove('activity-error-active')
    }
    if (categoryValue === "") {
        categoryError.classList.add('category-error-active')
        noError = false;
    }
    if (categoryValue !== "") {
        categoryError.classList.remove('category-error-active')
    }
    if (minutesInputValue === "") {
        minutesError.classList.add('minutes-error-active')
        noError = false;
    }
    if (minutesInputValue !== "") {
        minutesError.classList.remove('minutes-error-active')
    }
    if (secondsInputValue === "") {
        secondsError.classList.add('seconds-error-active')
        noError = false;
    }
    if (secondsInputValue !== "") {
        secondsError.classList.remove('seconds-error-active')
    }
    if (noError) {
        displayActivity();
    }
}

function displayActivity() {
    var secondsInputValue = secondsInput.value;
    var minutesInputValue = minutesInput.value;
    var secondsInputDisplay = secondsInputValue;
    var minutesInputDisplay = minutesInputValue;
    var activityInputValue = activityInput.value;
    if (secondsInputValue.toString().length === 1) {
      secondsInputDisplay = `0${secondsInputValue}`
    }
    if (minutesInputValue.toString().length === 1) {
      minutesInputDisplay = `0${minutesInputValue}`
    }
    siteLeft.innerHTML = `<h2 class="new-activity">Current Activity</h2>
                            <section class="site-left-box">
                            <p class="start-timer-goal">${activityInputValue} </p>
                            <p class="start-timer-counter">${minutesInputDisplay}:${secondsInputDisplay} </p>
                            <div class="start-timer-section">
                            <button class="start-timer-button">START</button>
                            </div>
                            </section>
    `
    var startTimer = document.querySelector('.start-timer-button');
    if (categoryValue === "Study") {
        startTimer.classList.toggle('study-timer-button')
    }
    if (categoryValue === "Meditate") {
        startTimer.classList.toggle('meditate-timer-button')
    } else if (categoryValue === "Exercise") {
        startTimer.classList.toggle('exercise-timer-button')
    }
    startTimer.addEventListener('click', function() {
      startCountdown(secondsInputValue, minutesInputValue);
    })
}




function startCountdown(secondsInputValue, minutesInputValue) {
  var timer = document.querySelector('.start-timer-counter')
    secondsInputValue--
    if (secondsInputValue === -1 && minutesInputValue > 0) {
        minutesInputValue--
        secondsInputValue = 59
    }
    var minutesInputNumber = minutesInputValue
    var secondsInputNumber = secondsInputValue
    if (minutesInputValue.toString().length === 1) {
      minutesInputNumber = `0${minutesInputValue}`
    }
    if (secondsInputValue.toString().length === 1) {
      secondsInputNumber = `0${secondsInputValue}`
    }
    timer.innerText = `${minutesInputNumber}:${secondsInputNumber}`
    if (secondsInputValue === 0 && minutesInputValue === 0) {
        return
    }
    if (secondsInputValue > -1 && minutesInputValue > -1) {
        setTimeout(function() {
            startCountdown(secondsInputValue, minutesInputValue)
        }, 1000);
    }
}
