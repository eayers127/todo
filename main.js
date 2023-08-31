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

const addButton = document.getElementById('addBtn')
const removeButton = document.getElementById('removeBtn')
const todoList = document.getElementById('todosList')

function showTodos(todos){
    todoList.innerHTML = '';

    todos.forEach((todo) =>{
        let item = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        let todoText = document.createTextNode(todo.name);
        item.append(todoText);
        item.append(checkbox);

        todoList.append(item);

        // if(checkbox.checked){
        //     todo.completed = true;
        // }else{
        //     todo.completed = false;
        // }
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
    todos.pop();
    showTodos(todos);
}



addButton.addEventListener("click", addTodo)
removeButton.addEventListener("click", removeTodo)