const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box after adding the task
    saveData(); // Save the updated list to localStorage
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save the updated list to localStorage
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the updated list to localStorage
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Load the saved tasks when the page is loaded