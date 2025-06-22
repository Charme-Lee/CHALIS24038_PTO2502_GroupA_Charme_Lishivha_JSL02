document.addEventListener("DOMContentLoaded", () => {
  // Prompt user for full task details and validate status input
  function getTaskDetails(taskNumber) {
    const taskTitle = prompt(`Enter the title for Task ${taskNumber}:`);
    const taskDescription = prompt(
      `Enter the description for Task ${taskNumber}:`
    );

    let taskStatus = prompt(
      `Enter the status for Task ${taskNumber} (todo, doing, done):`
    );

    // Change status to lowercase
    taskStatus = taskStatus.toLowerCase();

    // Loop until a valid status is entered
    while (!["todo", "doing", "done"].includes(taskStatus)) {
      alert("Invalid status! Please enter one of: todo, doing, done.");
      taskStatus = prompt(
        `Enter the status for Task ${taskNumber} (todo, doing, done):`
      ).toLowerCase();
    }

    return {
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    };
  }

  // Capture task details
  const firstTask = getTaskDetails(1);
  const secondTask = getTaskDetails(2);

  const allTasks = [firstTask, secondTask];

  const completedTasks = allTasks.filter((task) => task.status === "done");

  if (completedTasks.length > 0) {
    completedTasks.forEach((task) => {
      console.log(`Title: "${task.title}", Status: "done"`);
    });
  } else {
    console.log("No tasks completed, let's get to work!");
  }
});
