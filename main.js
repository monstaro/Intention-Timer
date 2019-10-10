var studyButton = document.querySelector('.study-button');
studyButton.addEventListener('click', function() {
    studyButton.classList.toggle('study-button-active');
    meditateButton.classList.remove('meditate-button-active');
    exerciseButton.classList.remove('exercise-button-active');
    categoryValue = studyButton.value;
})

var meditateButton = document.querySelector('.meditate-button');
meditateButton.addEventListener('click', function() {
    meditateButton.classList.toggle('meditate-button-active');
    studyButton.classList.remove('study-button-active');
    exerciseButton.classList.remove('exercise-button-active');
    categoryValue = meditateButton.value;
})

var exerciseButton = document.querySelector('.exercise-button');
exerciseButton.addEventListener('click', function() {
    exerciseButton.classList.toggle('exercise-button-active');
    meditateButton.classList.remove('meditate-button-active');
    studyButton.classList.remove('study-button-active');
    categoryValue = exerciseButton.value;
})



var startButton = document.querySelector('.start-activity-button');
var startTimer = document.querySelector('.start-timer-button');
var siteLeft = document.querySelector('.site-left-main');
var categoryValue = "";


startButton.addEventListener('click', displayError)
    // studyButton.addEventListener('click', changeTimerStudy)

function displayActivity() {
    var secondsInput = document.querySelector('.seconds-input').value;
    var minutesInput = document.querySelector('.minutes-input').value;
    var accomplishInput = document.querySelector('.activity-input').value;
    console.log(accomplishInput, secondsInput, minutesInput);
    siteLeft.innerHTML = `<h2 class="new-activity">Current Activity</h2>
                            <section class="site-left-box">
                            <p class="start-timer-goal">${accomplishInput} </p>
                            <p class="start-timer-counter">${minutesInput}:${secondsInput} </p>
                            <div class="start-timer-section">
                            <button class="start-timer-button">START</button>
                            </div>
                            </section>
    `
}


// function displayError() {
//     var activityInput = document.querySelector('.activity-input').value;
//     var descriptionError = document.querySelector('.description-error')
//     var minutesInput = document.querySelector('.minutes-input');
//     var secondsInput = document.querySelector('.seconds-input');
//     if (activityInput === "") {
//         descriptionError.classList.add('description-error-active')
//     } else {
//         displayActivity();
//     }
// }

function displayError() {
    var activityInput = document.querySelector('.activity-input').value;
    var minutesInput = document.querySelector('.minutes-input').value;
    var secondsInput = document.querySelector('.seconds-input').value;
    var activityError = document.querySelector('.activity-error')
    var minutesError = document.querySelector('.minutes-error');
    var secondsError = document.querySelector('.seconds-error');
    var categoryError = document.querySelector('.category-error');
    if (activityInput === "") {
        activityError.classList.add('activity-error-active')
    }
    if (categoryValue === "") {
        categoryError.classList.add('category-error-active')
    }
    if (minutesInput === "") {
        minutesError.classList.add('minutes-error-active')
    }
    if (secondsInput === "") {
        secondsError.classList.add('seconds-error-active')
    } else {
        displayActivity();
    }
}




// function changeTimerStudy() {
//     startTimer.classList.toggle('study-timer-button')
// }