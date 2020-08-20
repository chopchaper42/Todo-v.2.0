// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");


loadEventListeners(); // Load all event listeners

function loadEventListeners() { // Load all event listeners
    form.addEventListener("submit", addTask); // Add task event
    taskList.addEventListener("click", removeTask); // Remove task event
    clearBtn.addEventListener('click', clearTasks); // Clear all tasks
    filter.addEventListener('keyup', filterTasks); // Filter tasks

}

function addTask(e) { // Add Task
    if (!taskInput.value) { // Add Task
        alert("add a task");
    }

    const li = document.createElement("li"); // Create <li> element
    const link = document.createElement("a"); // Create new link element

    li.className = "collection-item"; // Add a class
    li.appendChild(document.createTextNode(taskInput.value)); // Create text node & append to li

    link.className = "delete-item secondary-content"; // Add task
    link.innerHTML = "<i class=\"fa fa-remove\"></i>"; // Add icon html

    li.appendChild(link); // Append link to li

    taskList.appendChild(li); // Append <li> to <ul>
    taskInput.value = ""; // Clear input

    e.preventDefault();
}

function removeTask(e) { // Remove Task
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();

        }
    }

}

function clearTasks(e) { // Clear tasks
    if (confirm("Are you sure to delete ALL tasks?")) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }

}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }

    })

}