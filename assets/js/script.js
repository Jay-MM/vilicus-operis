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

// Load existing data from local storage when the page loads
$(document).ready(function() {
  const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
  savedProjects.forEach(function(project) {
    renderProjectData(project.name, project.type, project.hourlyRate, project.dueDate);
  });
});

// Function to save projects to local storage
function saveProjectsToLocalStorage() {
  const projects = [];
  projectDisplay.find('tr').each(function() {
    const cells = $(this).find('td');
    const project = {
      name: cells.eq(0).text(),
      type: cells.eq(1).text(),
      hourlyRate: parseFloat(cells.eq(2).text().replace('$', '')),
      dueDate: cells.eq(3).text()
    };
    projects.push(project);
  });
  localStorage.setItem('projects', JSON.stringify(projects));
}


// handle appending data into DOM
function renderProjectData(name, type, hourlyRate, dueDate) {
  // show data in table
    // create a tr(table row)
  const tr = $('<tr>')

    // create td(cell) for each piece of data && append tds into tr
  $('<td>').addClass('text-center').text(name).appendTo(tr);
  $('<td>').addClass('text-center').text(type).appendTo(tr);
  $('<td>').addClass('text-center').text('$' + hourlyRate).appendTo(tr);
  $('<td>').addClass('text-center').text(dueDate).appendTo(tr);
  
  // td for days until dueDate 
  const daysLeft = dayjs(dueDate).diff(today, 'day')
  $('<td>').addClass('text-center').text(daysLeft).appendTo(tr);
  
  // td for  potential earnings ($ = hourlyRate * 8)
  const potentialEarnings = (parseFloat(hourlyRate) * 8) * daysLeft
  $('<td>').addClass('text-center').text('$' + potentialEarnings).appendTo(tr);
  
  // delete button
  const deleteProjectBtnn = $('<td>').addClass('p-2 delete-project-btn text-center').text('X').appendTo(tr);

  // append into tbody
  projectDisplay.append(tr);

// Save projects to local storage after rendering
saveProjectsToLocalStorage();

}
// handle project deletion
function handleDeleteProject(e) {
  console.log(e.target);
  const btnClicked = $(e.target);
  btnClicked.closest('tr').remove();

  saveProjectsToLocalStorage();

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

  saveProjectsToLocalStorage();
}
// handle current time display
currentTime.text(today.format("ddd , MMMM DD YYYY :: h:mm:ss a"))

// datepicker using jqueryUI
dueDateInput.datepicker({
  showAnim: "slideDown",
  dateFormat: "mm-dd-yy",
  minDate:1, 
});
// add event listners 
projectForm.on('submit', handleSubmit);
projectDisplay.on('click', '.delete-project-btn', handleDeleteProject);