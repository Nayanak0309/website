function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <span class="deleteBtn" onclick="deleteTask(this)">Delete</span>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";  // Clear input
}

function deleteTask(btn) {
    btn.parentElement.remove();
}
