var studyButton = document.querySelector('.study-button');
studyButton.addEventListener('click', function () {
  studyButton.classList.toggle('study-button-active');
})

var meditateButton = document.querySelector('.meditate-button');
meditateButton.addEventListener('click', function () {
  meditateButton.classList.toggle('meditate-button-active');
})

var exerciseButton = document.querySelector('.exercise-button');
exerciseButton.addEventListener('click', function () {
  exerciseButton.classList.toggle('exercise-button-active');
})
