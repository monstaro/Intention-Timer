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



var startButton = document.querySelector('.start-button')
var siteLeft = document.querySelector('.site-left-main')

startButton.addEventListener('click', displayActivity)


function displayActivity() {
    var secondsInput = document.querySelector('.seconds').value;
    var minutesInput = document.querySelector('.minute').value;
    var accomplishInput = document.querySelector('.question').value;
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