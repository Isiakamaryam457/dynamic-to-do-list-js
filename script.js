document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // ✅ Load tasks from localStorage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't resave to localStorage
  }

  // ✅ Add task (to DOM and optionally to localStorage)
  function addTask(taskText, save = true) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    removeButton.onclick = function () {
      taskList.removeChild(li);

      // ✅ Remove from localStorage
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  // ✅ Event listeners
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
    addTask(taskText); // default save = true
    taskInput.value = '';
  });

  taskInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
      addTask(taskText);
      taskInput.value = '';
    }
  });

  // ✅ Load tasks on startup
  loadTasks();
});
