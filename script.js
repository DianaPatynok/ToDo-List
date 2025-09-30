const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const sortBtn = document.querySelector(".sort-btn");

//Local Storage
function saveDate(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks(){
  listContainer.innerHTML = localStorage.getItem("data");
}

function addTask(){
  if(inputBox.value === ""){
    alert("You must write something!")
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.classList.add("fade-in-up");
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = "";
  saveDate()
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveDate()
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); 
    saveDate()
  }
}, false);

sortBtn.addEventListener("click", () =>{
  let tasks = Array.from(listContainer.querySelectorAll("li"));
   tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));

  listContainer.innerHTML = "";
  tasks.forEach(task => listContainer.appendChild(task));
  saveDate()
});

showTasks();
