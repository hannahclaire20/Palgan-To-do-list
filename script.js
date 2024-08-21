// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // Do nothing if input is empty

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create a delete button for the task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  // Append delete button to the list item
  li.appendChild(deleteBtn);

  // Append the new list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";

  // Add event listener to delete the task
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
  });
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Add event listener to handle the "Enter" key
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});