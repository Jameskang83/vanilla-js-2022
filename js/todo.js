
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement.parentNode;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));
    saveToDos();
}

function lineThrough(event) {
    const item = event.target.parentElement;
    const check = JSON.parse(localStorage.getItem(TODOS_KEY));
    const checkId = check.find(({id}) => id == parseInt(item.id));

    if (checkId.check === 1) {
        item.style.textDecorationLine = "";
        item.style.color = "";
        event.target.style.color = "";
        checkId.check = 0;
    } else {
        item.style.textDecorationLine = "line-through";
        item.style.color = "gray";
        event.target.style.color = "gray";
        checkId.check = 1;
    }
    toDos = check;
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = `□ ${newTodo.text}`;
    span.classList.add("item");
    const button = document.createElement("button");
    button.classList.add("delete");
    button.innerHTML = `<i id="trash" class="fas fa-trash"></i>`;
    
    const iDelete = button.querySelector("#trash");
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
 
    if (newTodo.check === 1) {
        li.style.textDecorationLine = "line-through";
        li.style.color = "gray";
        span.style.color = "gray";
    }
    iDelete.addEventListener("click", deleteToDo);
    span.addEventListener("click", lineThrough);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        check: 0
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
} 

