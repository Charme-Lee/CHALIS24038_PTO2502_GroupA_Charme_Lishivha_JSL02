# JSL02 Project: Kanban (Task Manager)

## 🚀 Task Input and Status Validation System

💡*This project is a continuation of JSL01*

## 📋 Overview

This project presents a visually precise Kanban board designed to closely reflect the original Figma design specifications. The user interface features clearly defined task columns, a static sidebar for streamlined navigation, and a cohesive visual theme that ensures a polished and professional experience across both desktop and mobile platforms.

The application is a responsive, browser-based task manager that enables users to visually organize and monitor tasks through three workflow stages: TODO, DOING, and DONE. With its clean layout and interactive prompt-based task input, it provides an intuitive and accessible entry point to effective task management.

## ✨ Features

- ✅ Responsive layout with a three-column Kanban board
- ✅ Console logs completed (`done`) tasks only
- ✅ Friendly fallback message if no tasks are completed
- ✅ Sidebar with custom branding and intuitive navigation
- ✅ Case-insensitive status input (e.g., `todo`,`Doing`, `DONE`)
- ✅ Alerts and re-prompting for invalid statuses
- ✅ Semantic HTML and well-commented JavaScript for easy maintenance
- ✅Favicon Assets – SVG Icons

## 🛠️ Technologies Used

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

## ⚙️ Set up instructions

<!-- ⚡*No Set up needed* -->

a. **Clone the Repository**

```bash
git clone
https://github.com/Charme-Lee/CHALIS24038_PTO2502_GroupA_Charme_Lishivha_JSL02.git
```

b. **Open the Project Folder**

```bash
cd
CHALIS24038_PTO2502_GroupA_Charme_Lishivha_JSL02
```

c. **Launch the App**

- Use a Live Server extension in your IDE for ease of use.
  Alternatively,
- Open index.html file directly from your web browser (i.e. Drag and drop the file onto the browser)

## Expected Outcome

A functional task entry system that ensures accurate data collection, validation, and structured storage while maintaining clean and well-documented code for easy future modifications.

**Prompt Input Example**

- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

  ![title prompt](./explainer-images/title%20prompt.png)

**Invalid status**

- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

  ![invalid status](./explainer-images/invalid%20status.png)

**Console log**

- When there is a completed task:

  ![invalid status](./explainer-images/completed%20task%20log.png)

- When there are no completed tasks:

  ![invalid status](./explainer-images/no%20completed%20tasks%20log.png)
