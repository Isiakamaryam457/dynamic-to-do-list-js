// ensuring the DOMContentLoaded - whole pageloads before an event is triggered
document.addEventListener('DOMContentLoaded', () => {

   const addButton = document.getElementById('add-task-btn');
   const taskInput = document.getElementById('task-input');
   const taskList = document.getElementById('task-list');

   // creating the addTask function
   function addTask() {
    const taskText = taskInput.value.trim();

   // setting the alert text if taskText is empty
    if (taskText === '') {
      alert("please enter a task.");
      return;
    }
   // creating the list element for the task text
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // adding a remove button to remove tasks
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

  // removing tasks when the remove button is clicked
    removeButton.onclick = function() {
      taskList.removeChild(li);
    };
// appending the remove button to the list and taskList
    li.appendChild(removeButton);
    taskList.appendChild(li);

// clearing out the input after adding task
    taskInput.value = '';
   };
  //triggering the addButton on click
   addButton.addEventListener('click', addTask);

  //adding the enter button functionality to submit a task
   taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
  addTask()
});

