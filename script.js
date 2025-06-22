document.addEventListener("DOMContentLoaded", () => {
  // Prompt user for full task details and validate status input
  function getTaskDetails(task) {
    const taskTitle = prompt(`Enter the title for Task ${task}:`);
    const taskDescription = prompt(`Enter the description for Task ${task}:`);

    let taskStatus = prompt(
      `Enter the status for Task ${task} (todo, doing, done):`
    );

    // Change status to lowercase
    taskStatus = taskStatus.toLowerCase();

    // Loop until a valid status is entered
    while (!["todo", "doing", "done"].includes(taskStatus)) {
      alert("Invalid status! Please enter one of: todo, doing, done.");
      taskStatus = prompt(
        `Enter the status for Task ${task} (todo, doing, done):`
      ).toLowerCase();
    }

    return {
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    };
  }

  // Capture task details
  const FirstTask = getTaskDetails(1);
  const SecondTask = getTaskDetails(2);

  const allTasks = [FirstTask, SecondTask];

  const completedTasks = allTasks.filter((task) => task.status === "done");

  if (completedTasks.length > 0) {
    completedTasks.forEach((task) => {
      console.log(`Title: "${task.title}", Status: "done"`);
    });
  } else {
    console.log("No tasks completed, let's get to work!");
  }
});
