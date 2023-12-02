// select elements from DOM
const currentTimeEl = $('#current-time')
const projectFormEl = $('#project-form')
const projectNameInputEl = $('#project-name-input');
const projectTypeInputEl = $('#project-type-input');
const hourlyRateInputEl = $('#hourly-rate-input');
const dueDateInputEl = $('#due-date-input')
// handle current time display
currentTimeEl.text(moment().format("ddd , MMMM Do YYYY, h:mm:ss a"))

console.log(dueDateInputEl, projectFormEl, projectNameInputEl, projectTypeInputEl, hourlyRateInputEl )
// handleSubmit from modal form
// handle parsing data unto DOM
// handle project deletion 

// add event listners 