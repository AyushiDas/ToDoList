document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("add-task-button");
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("tasks");
  
    // Function to add a new task with a timestamp
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const timestamp = getFormattedTimestamp();
        const newTask = document.createElement("li");
        newTask.innerHTML = `
          <div>${taskText}</div>
          <div class="timestamp">${timestamp}</div>
          <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
      }
    }
  
    // Function to delete a task
    function deleteTask(event) {
      const button = event.target;
      if (button.classList.contains("delete-button")) {
        const listItem = button.parentElement;
        taskList.removeChild(listItem);
      }
    }
  
    // Event listener for adding a task
    addTaskButton.addEventListener("click", addTask);
  
    // Event listener for handling the "Enter" key to add a task
    taskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    // Event delegation for the delete button clicks
    taskList.addEventListener("click", deleteTask);
  
    // Function to get the formatted timestamp (e.g., "2023-09-05 10:00 AM")
    function getFormattedTimestamp() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const amOrPm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
  
      return `${year}-${month}-${day} ${formattedHours}:${minutes} ${amOrPm}`;
    }
  });
  
  