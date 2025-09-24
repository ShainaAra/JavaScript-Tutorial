//create array to store todos
const todoList = ['make dinner', 'wash dishes']; //no values inside called empty array

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';


    //generating the HTML
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html; // combine html together
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo () {
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;  //value prperty represents the text in the textbox

    todoList.push(name);
    console.log(todoList); 

    //reset the text in the text box
    inputElement.value = '';

    renderTodoList();
}