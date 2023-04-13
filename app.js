// ## **Part 1**

// For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

// As a user, you should be able to:

// - Add a new todo (by submitting a form)
// - Mark a todo as completed (cross out the text of the todo)
// - Remove a todo

// ## **Part 2**

// Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.
const toDoList = document.querySelector('form');
const input = document.querySelector('#todo');
const ul = document.querySelector('#list');
const todos = document.querySelectorAll('li');
const toDoArray = JSON.parse(localStorage.getItem("todos")) || [];

//add items from local storage so when page refreshes task list is still there


console.log(toDoArray);

// adding task to list
toDoList.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value);
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value + " ";
    newTodo.classList.add('toDos')
    ul.appendChild(newTodo);
    input.value = "";

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    newTodo.appendChild(removeButton)

    toDoArray.push({newTodo: newTodo.innerText});
    localStorage.setItem("todos", JSON.stringify(toDoArray))
})


// adding line through or removing task
ul.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.add('completed');
    } else if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});






