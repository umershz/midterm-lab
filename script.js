const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const filter = document.getElementById("filter");

let tasks = [];

// Add Task
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("taskName").value;
    const subject = document.getElementById("subject").value;
    const dueDate = document.getElementById("dueDate").value;

    const task = { name, subject, dueDate }; // ES6 object shorthand
    tasks.push(task);

    displayTasks(tasks);
    form.reset();
});

// Display Tasks
const displayTasks = (taskArray) => {
    taskList.innerHTML = "";

    taskArray.forEach(({ name, subject, dueDate }) => { // destructuring
        const row = `
            <tr>
                <td>${name}</td>
                <td>${subject}</td>
                <td>${dueDate}</td>
            </tr>
        `;
        taskList.innerHTML += row;
    });
};

// Fake API
fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res => res.json())
    .then(data => {
        const apiList = document.getElementById("apiData");

        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            apiList.appendChild(li);
        });
    })
    .catch(err => console.log(err));

    // Filter
filter.addEventListener("change", () => {
    const value = filter.value;

    if (value === "All") {
        displayTasks(tasks);
    } else {
        const filtered = tasks.filter(t => t.subject === value);
        displayTasks(filtered);
    }
});

// Sort
const sortTasks = () => {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    displayTasks(tasks);
};