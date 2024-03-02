// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
        //Create a new card element and add the classes `card`, `project-card`, `draggable`, and `my-3`. Also add a `data-project-id` attribute and set it to the project id.
        const taskCard = $("<div>");
        taskCard.addClass("card, project-card draggable my-3");
        taskCard.attr("data-project-id",project.id);

        const cardHeader = $("<h4>");
        cardHeader.addClass("card-header h4");
        cardHeader.text(task.name);

        const cardBody = $("<div>");
        cardBody.addClass("card-body");

        const cardTypePara = $("<p>");
        cardTypePara.addClass("card-text");
        cardTypePara.text(task.type);

        const cardDuePara = $("<p>");
        cardDuePara.addClass("card-text");
        cardDuePara.text(task.dueDate);

        const cardDeleteBtn = $("<button>");
        cardDeleteBtn.addClass("btn btn-danger delete");
        cardDeleteBtn.attr("data-project-id",task.id);
        cardDeleteBtn.text("Delete");

        if (project.dueDate && task.status !== "done") {
          const now = dayjs();
          const taskDueDate = dayjs(task.dueDate, "DD/MM/YYYY");
      
          if (now.isSame(taskDueDate, "day")) {
            taskCard.addClass("bg-warning text-white");
          } else if (now.isAfter(taskDueDate)) {
            taskCard.addClass("bg-danger text-white");
            cardDeleteBtn.addClass("border-light");
          }
        }
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
