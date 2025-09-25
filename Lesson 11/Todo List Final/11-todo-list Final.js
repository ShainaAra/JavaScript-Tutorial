const todoList = [{
    name: 'make dinner',
    dueDate: '2025-09-25'
}, {
    name: 'wash dishes',
    dueDate: '2025-09-25'
}]; 

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
   
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i]; 

        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; //shortcut
        
        //generating the HTML
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>      
        `;
        todoListHTML += html; // combine html together
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo () {
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;  

    const dateInputElement = document.querySelector(' js-due-date-input'); 
    
    const dueDate = dateInputElement.value; 

    todoList.push({
        //name: name,
        //dueDate: dueDate
        //shorthand property syntax, if the property and the variable name are the same
        name,
        dueDate
    });

    //reset the text in the text box
    inputElement.value = '';

    renderTodoList();
}