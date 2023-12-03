// select elements from DOM
const currentTime = $('#current-time')
const projectForm = $('#project-form')
const projectNameInput = $('#project-name-input');
const projectTypeInput = $('#project-type-input');
const hourlyRateInput = $('#hourly-rate-input');
const dueDateInput = $('#due-date-input')
// handle current time display
currentTime.text(moment().format("ddd , MMMM Do YYYY :: h:mm:ss a"))

// datepicker using jqueryUI
dueDateInput.datepicker({
  showAnim: "slideDown",
  dateFormat: "y-mm-d",
  minDate: 1, 
});
// handleSubmit from modal form
// handle parsing data unto DOM
// handle project deletion 

// add event listners 