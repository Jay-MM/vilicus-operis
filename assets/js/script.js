// select elements from DOM
const currentTime = $('#current-time')
const projectForm = $('#project-form')
const projectNameInput = $('#project-name-input');
const projectTypeInput = $('#project-type-input');
const hourlyRateInput = $('#hourly-rate-input');
const dueDateInput = $('#due-date-input')
const projectModal = $('#project-modal')
const projectDisplay = $('#project-display')

const today = dayjs()

// handle appending data into DOM
function renderProjectData(name, type, hourlyRate, dueDate) {
  // show data in table
    // create a tr(table row)
  const tr = $('<tr>')

    // create td(cell) for each piece of data && append tds into tr
  $('<td>').text(name).appendTo(tr);
  $('<td>').text(type).appendTo(tr);
  $('<td>').text('$' + hourlyRate).appendTo(tr);
  $('<td>').text(dueDate).appendTo(tr);

  
  // td for days until dueDate 
  const daysLeft = dayjs(dueDate).diff(today, 'day')
  $('<td>').text(daysLeft).appendTo(tr);
  
    // td for  potential earnings ($ = hourlyRate * 8)
const potentialEarnings = (parseFloat(hourlyRate) * 8) * daysLeft
  $('<td>').text('$' + potentialEarnings).appendTo(tr);

    // append into tbody
  projectDisplay.append(tr);
}
// handleSubmit from modal form
function handleSubmit(e) {
  e.preventDefault()
  // get data from inputs
  const name = projectNameInput.val().trim()
  const type =  projectTypeInput.val().trim()
  const hourlyRate = hourlyRateInput.val().trim()
  const dueDate = dueDateInput.val().trim()

  // Check if dueDate is a valid date
  if (dayjs(dueDate).isValid()) {
    renderProjectData(name, type, hourlyRate, dueDate)
  } else {
    console.error(`Invalid date: ${dueDate} (use mm-dd-yy format)`);
  }

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
currentTime.text(today.format("ddd , MMMM DD YYYY :: h:mm:ss a"))

// datepicker using jqueryUI
dueDateInput.datepicker({
  showAnim: "slideDown",
  dateFormat: "mm-dd-yy",
  minDate:1, 
});
// handle project deletion