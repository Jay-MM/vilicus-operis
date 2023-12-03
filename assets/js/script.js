// select elements from DOM
const currentTime = $('#current-time')
const projectForm = $('#project-form')
const projectNameInput = $('#project-name-input');
const projectTypeInput = $('#project-type-input');
const hourlyRateInput = $('#hourly-rate-input');
const dueDateInput = $('#due-date-input')
const projectModal = $('#project-modal')


function renderProjectData(name, type, hourlyRate, dueDate) {
  console.log(name, type, hourlyRate, dueDate)
  // show data in table
    // create a tr(table row)
    // create td(cell) for each piece of data
    // append tds into tr
    // append into tbody
}
// handleSubmit from modal form
function handleSubmit(e) {
  e.preventDefault()
  // get data from inputs
  const name = projectNameInput.val().trim()
  const type =  projectTypeInput.val().trim()
  const hourlyRate = hourlyRateInput.val().trim()
  const dueDate = dueDateInput.val().trim()

  

  renderProjectData(name, type, hourlyRate, dueDate)
  

  // hide modal
projectModal.modal('hide')

  // clear inputs
  projectNameInput.val('')
  projectTypeInput.val('')
  hourlyRateInput.val('')
  dueDateInput.val('')
}

// add event listners 
projectForm.on('submit', handleSubmit);
// handle current time display
currentTime.text(moment().format("ddd , MMMM Do YYYY :: h:mm:ss a"))

// datepicker using jqueryUI
dueDateInput.datepicker({
  showAnim: "slideDown",
  dateFormat: "y-mm-d",
  minDate: 1, 
});
// handle parsing data unto DOM
// handle project deletion 
