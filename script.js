document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTask.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `${taskText} <button class="delete">Delete</button>`;
            taskList.appendChild(taskItem);

            taskItem.querySelector(".delete").addEventListener("click", function () {
                taskItem.remove();
            });

            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask.click();
        }
    });
});
