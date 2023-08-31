let todos = [
    {
        id: 0, name: 'Walk Dog', completed: false, due: '09/03/23',
    },
    {
        id: 1, name: 'Do Homework', completed: false, due: '09/10/23',
    },
    {
        id: 2, name: 'Wash dishes', completed: true, due: '09/01/23',
    },
    {
        id: 3, name: 'Clean room', completed: false, due: '09/08/23',
    },
]

const button = document.getElementById('addBtn')
const todoList = document.getElementById('todosList')

function showTodos(todos){
    todoList.innerHTML = '';

    todos.forEach((todo) =>{
        let item = document.createElement('li');
        let todoText = document.createTextNode(todo.name);
        item.append(todoText);

        todoList.append(item);
    })
}

showTodos(todos);

//let newTodo = "";

function addTodo() {
    let newText = document.querySelector('#inputTodo').value;
    let newTodo = {id: 6, name: newText, completed: false, due: '09/02/23'}
    //todos = [...todos, newTodo]
    todos.push(newTodo);
    showTodos(todos);
    newText = '';
}

console.log(todos)

function removeTodo() {
    todos.splice();
}



button.addEventListener("click", addTodo)