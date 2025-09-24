//create array to store todos
const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
}]; //no values inside called empty array

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    //generating the HTML
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; //shortcut
        
        const html = `
            <p>
                ${name} ${dueDate}
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button>
            </p>
        `;
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