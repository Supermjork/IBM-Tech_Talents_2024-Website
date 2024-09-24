// Constants declared for:
// Input Button
// Task List area
const taskInput = document.querySelector("#new-task input");
const taskSection = document.querySelector(".tasks");

// Listener for Enter Key (Adding a new task)
taskInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter")
    {
        createTask();
    }
});

// OnClick even for adding
document.querySelector("#push").onclick = function()
{
    createTask();
}

// Function to actually create the task
function createTask() {
    if (taskInput.value.length == 0)
    {
        alert("The task field is empty.\nEnter a Task Name and try again.");
    }
    else
    {
        // Insert HTML to page
        taskSection.innerHTML +=
        '<div class="task">\
        <label id = "taskname">\
        <input onclick="updateTask(this)" type="checkbox" id="check-task">\
        <p>' + 
        taskInput.value +
        '</p>\
        </label>\
        <div class="delete">\
        <i class="uil uil-trash"></i>\
        </div>\
        </div>';

        var current_tasks = document.querySelectorAll(".delete");

        for (var i = 0; i < current_tasks.length; i++)
        {
            current_tasks[i].onclick = function ()
            {
                this.parentNode.remove();
            }
        }

        taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");
    }
}

function updateTask(task)
{
    let taskItem = task.parentElement.lastElementChild;

    if (task.checked)
    {
        taskItem.classList.add("checked");
    }
    else
    {
        taskItem.classList.remove("checked");
    }
}

