
const container = document.querySelector(".container");
const desc = document.getElementById("description");
const priority = document.getElementById("priority");

// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
const showRed = document.createElement("button");
const showGray = document.createElement("button");
const showAll = document.createElement("button");
container.appendChild(showRed);
container.appendChild(document.createElement("br"));
container.appendChild(showGray);
container.appendChild(document.createElement("br"));
container.appendChild(showAll);
showRed.textContent = "Show only important";
showGray.textContent = "Show only not important";
showAll.textContent = "Show All";

function displayTasks(tasks) {
  for (block of tasks){
    const newTask = document.createElement("div");
    newTask.classList.add("item");

    newTask.textContent = block[0];
    if (block[1] == 1){
      newTask.style.backgroundColor = "red";
      newTask.classList.add("important");
    }
    else {
      newTask.style.backgroundColor = "grey";
      newTask.classList.add("unimportant");
    }
    container.appendChild(newTask);
  }
}

function showUnimportant() {
  const items = document.querySelectorAll(".item"); 

  items.forEach(item => {
    if (item.classList.contains("unimportant")){
      item.style.display = "block";   
    } else {
      item.style.display = "none"; 
    }
  });
}

function showImportant() {
  const items = document.querySelectorAll(".item"); 

  items.forEach(item => {
    if (item.classList.contains("important")) {
      item.style.display = "block";   
    } else {
      item.style.display = "none"; 
    }
  });
}

function showAllTask() {
  const items = document.querySelectorAll(".item"); 

  items.forEach(item => {
    item.style.display = "block";
  })
}
  
function addItem() {
  // 1- Create a new task
  // TODO
  //  2- Set the description from the text field
  // TODO
      const taskName = desc.value;
  // 3- Set the priority from select field
  // TODO
    let selectedPriority = priority.value;
    if (selectedPriority == "High"){
      selectedPriority = 1;
    }
    else {
      selectedPriority = 0;
    }
  // 4- Add the new object to the array
  // TODO
  tasks.push([taskName, selectedPriority])
  displayTasks(tasks);
  desc.value = "";
  console.log(tasks);
  tasks.length = 0;
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

displayTasks(tasks);

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
showRed.addEventListener("click", showImportant);
showGray.addEventListener("click", showUnimportant);
showAll.addEventListener("click", showAllTask);
