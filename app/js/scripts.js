const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

document.querySelector(`.js-add-todo-button`).addEventListener('click', () => {
    addTodo();
});

function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, date } = todoObject;
        const html = `
        <div>${index + 1}.</div>
        <div class="todo-name">${name}</div>
        <div class="todo-date">${date}</div>
        <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
        " class="delete-todo-button">
            Delete
        </button>
        `;
        todoListHTML += html;
    });

    document.querySelector(`.js-todo-list`).innerHTML = todoListHTML;

    saveTodoList();
}

renderTodoList();

function addTodo() {
    const inputTodoNameElement = document.querySelector(`.js-todo-name`);

    const inputTodoDateElement = document.querySelector(`.js-todo-date`);

    const name = inputTodoNameElement.value;

    const date = inputTodoDateElement.value;

    todoList.push({ name, date });

    console.log(todoList);

    inputTodoNameElement.value = '';

    renderTodoList();

    saveTodoList();
}

function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
