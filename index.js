const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");

  const task = taskInput.value;
  console.log(task);

  if (task) {
    taskList.append(createTaskElement(task));
    taskInput.value = "";
  }
});

function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task;
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  return li;
}

function createButton(text, className) {
  const btn = document.createElement("span");
  btn.textContent = text;
  btn.className = className;
  return btn;
}

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      deleteTask(event.target.parentElement);
    } else if (event.target.classList.contains("edit-btn")) {
      editTask(event.target.parentElement);
    }
  });
  
  function deleteTask(taskItem) {
    if (confirm("Estás segura / seguro de borrar este elemento?")) {
      taskItem.remove();
    }
  }
  
  function editTask(taskItem) {
    const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
    if (newTask !== null) {
      taskItem.firstChild.textContent = newTask;
    }
  }

  const themeToggleButton = document.getElementById("toggle-theme-btn");

const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const theme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});

function storeTaskInLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) => {
      taskList.appendChild(createTaskElement(task));
    });
  }

if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
}