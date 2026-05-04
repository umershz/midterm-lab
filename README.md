📌 Student Task Manager Web App

A simple web-based Task Management System built using HTML, CSS, and JavaScript.
It allows students to add, view, filter, and sort tasks, along with fetching external data using a mock API.

🚀 Features
➕ Add tasks (Task Name, Subject, Due Date)
📋 View tasks in a structured table
🔍 Filter tasks by subject
📅 Sort tasks by due date
🌐 Fetch and display data using a mock API
🎨 Clean, responsive and centered UI design
🛠️ Technologies Used
HTML5 (Structure)
CSS3 (Styling + Responsive Design)
JavaScript (DOM + ES6 + API handling)
Fetch API (Mock Data Integration)
📁 Project Structure
Student-Task-Manager/
│
├── index.html        # Main structure of the app
├── style.css         # Styling and UI design
├── script.js         # JavaScript logic (CRUD, filter, sort, API)
└── README.md         # Project documentation
📌 How to Run the Project
Download or clone the repository
Open the folder in VS Code or any editor
Open index.html in a browser
Start using the Task Manager
🧑‍💻 How It Works
1. Add Task

Users enter:

Task Name
Subject
Due Date

The task is stored in a JavaScript array and displayed dynamically in the task table.

2. View Tasks

All added tasks are displayed in a structured table using DOM manipulation.

3. Filter Tasks

Users can filter tasks based on subject:

Math
CS
Physics

This helps in viewing subject-specific tasks only.

4. Sort Tasks

Tasks can be sorted by due date in ascending order for better organization.

5. API Integration

The application fetches mock data from:

https://jsonplaceholder.typicode.com/todos

This demonstrates real-world API integration using JavaScript Fetch API.

🎨 UI Design Overview
Centered layout for better readability
Card-style sections for clear separation
Color-coded containers for distinction:
Blue → Add Task
Green → Filter
Orange → Task List
Purple → API Data
Responsive design for mobile and desktop
📱 Responsive Design

The application is fully responsive and adapts to different screen sizes using media queries.

📚 Concepts Covered
Event Handling in JavaScript
Array Manipulation
DOM Manipulation
ES6 Features (Arrow functions, destructuring)
API Fetching (GET requests)
Responsive Web Design
UI/UX Principles
📌 Learning Outcome

This project helped in understanding:

How front-end applications are structured
How JavaScript interacts with the DOM
How APIs are integrated into web applications
How filtering and sorting logic works in real apps
⚠️ Notes
Mock API is used for demonstration purposes only
No backend or database is connected
All data resets on page refresh
👨‍🎓 Author

Student Task Manager Project
Built for Web Technologies Lab Assignment

📜 License

This project is for educational purposes only.
