var historyLog = [];
function addTodo(){
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value.trim();
    var prioritySelect = document.getElementById("priority-select");
    var priority = prioritySelect.value;
    if(todoText !== ""){
        var todoList;
        if(priority === "important"){
            todoList = document.getElementById("important-list");
        }else{
            todoList = document.getElementById("not-important-list");
        }
        var todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        var todoTextSpan = document.createElement("span");
        todoTextSpan.textContent = todoText;
        todoTextSpan.onclick = toggleComplete;
        var deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = deleteTodo;
        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
        var action = {
            action:'Add',
            todoText:todoText,
            priority:priority,
            time:new Date().toLocaleString()
        };
        historyLog.push(action);
        updateHistoryView();
        todoInput.value = "";
    }
}
function toggleComplete(){
    this.classList.toggle("completed");
}
function deleteTodo(){
    this.parentElement.remove();
}