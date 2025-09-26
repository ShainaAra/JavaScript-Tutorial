const todoList = [{
    name: 'make dinner',
    dueDate: '2025-09-18'
}, {
    name: 'wash dishes',
    dueDate: '2025-09-19'
}];

renderTodoList();

function renderTodoList() { // regular function becuase its easy to read and enable hoisting
    let todoListHTML = '';
            //passing a function into another function, => use arrow function
    todoList.forEach((todoObject, index) => {

        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
                " class="delete-todo-button">Delete</button> 
        `;
        todoListHTML += html;
    }) ;


    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
    //name: name,   
    //dueDate: dueDate,
    name,
    dueDate
    });

    inputElement.value = '';

    renderTodoList();
}