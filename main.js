var studyButton = document.querySelector('.study-button');
studyButton.addEventListener('click', function() {
    studyButton.classList.toggle('study-button-active');
})

var meditateButton = document.querySelector('.meditate-button');
meditateButton.addEventListener('click', function() {
    meditateButton.classList.toggle('meditate-button-active');
})

var exerciseButton = document.querySelector('.exercise-button');
exerciseButton.addEventListener('click', function() {
    exerciseButton.classList.toggle('exercise-button-active');
})



var startButton = document.querySelector('.start-activity-button')
var startTimer = document.querySelector('.start-timer-button')
var siteLeft = document.querySelector('.site-left-main')

startButton.addEventListener('click', displayError)
studyButton.addEventListener('click', changeTimerStudy)

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

function displayError() {
    // var categoryError = document.querySelector('.category-error');
    var activityInput = document.querySelector('.activity-input').value;
    var descriptionError = document.querySelector('.description-error')
    var minutesInput = document.querySelector('.minutes-input');
    var secondsInput = document.querySelector('.seconds-input');
    if (activityInput === "") {
        descriptionError.classList.add('description-error-active');
        activityInput.classList.add('value-error-active');

    } else {
        displayActivity();
    }
}


function changeTimerStudy() {
    startTimer.classList.toggle('study-timer-button')
}



// --------------------------------------------------------------------------
//
// var categoryValue = "";
// var study = document.querySelector('.study-button');
// var meditate = document.querySelector('.meditate-button');
// var exercise = document.querySelector('.exercise-button');
// var categoryButtons = document.querySelector('.category-buttons');
// var startButton = document.querySelector('.start-activity-button');
// var descriptionError = document.querySelector('.description-error');
// var minutesError = document.querySelector('.minutes-error');
// var secondsError = document.querySelector('.seconds-error');
// var activityValue = document.querySelector('.activity-input').innerText;
// var minutesValue = document.querySelector('.minutes-input').innerText;
// var secondsValue = document.querySelector('.seconds-input').innerText;
//
// function errorMessages() {
//   if (categoryValue === "") {
//     categoryButtons.classList.add('category-buttons-error');
//   }
//   elseif (activityValue === "") {
//     descriptionError.classList.add('description-error-active');
//     activityValue.classList.add('value-error-active');
//   }
//   elseif (minutesValue === "") {
//     minutesError.classList.add('description-error-active');
//     minutesValue.classList.add('value-error-active');
//   }
//   elseif (secondsValue === "") {
//     secondsError.classList.add('.description-error-active');
//     secondsValue.classList.add('value-error-active');
//   }
// }
//
// startButton.addEventListener('click', function () {
//   if (categoryValue === "", activityValue === "", minutesValue === "", secondsValue === "") {
//     errorMessages();
//   }
// }
//
// --------------------------------------------------------------------------
