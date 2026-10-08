// Get the elements from the page
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// to Add a task
function addTask() {
  const text = taskInput.value;

  if (text === "") {
    return;
  }
 else{
   // to create list items, text and the delete button
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-slate-100 rounded-lg px-4 py-3 mb-2";

  const taskText = document.createElement("span");
  taskText.textContent = text;
  taskText.className = "cursor-pointer";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "text-red-700 border border-red-300 rounded-lg px-3 py-1 text-sm";

  // Click the text: add or remove the line
  taskText.addEventListener("click", function () {
    taskText.classList.toggle("line-through");
  });

  // Click Delete: remove the task
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Put everything on the page
  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
 }
 
}

// to Run addTask when Add is clicked
addBtn.addEventListener("click", addTask);