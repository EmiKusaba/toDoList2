// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
let arrayOfTodos = []
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => arrayOfTodos = json);
}
//log
const logTodos = () => {
  console.log(arrayOfTodos)
}

//populateTodos
let index = 0
const populateTodos = () => {
  let toDos = document.getElementById('todo-list')

//clear all the item from the list
while (toDos.firstChild) {
  toDos.removeChild(toDos.firstChild)
}
const toDoSlice = arrayOfTodos.slice(index, index + 10)

if (index > arrayOfTodos.length) {
  index = 0
}
index += 10
for (i = 0; i < toDoSlice.length; i++) {
  let newListElement = document.createElement("li")
  newListElement.innerHTML = toDoSlice[i].title
  toDos.appendChild(newListElement);
  }
}
  //complete or Incomplete

  // if (arrayOfTodos[i].completed) {
  //   newList.classList.add("complete");
  // } else {
  //   newList.classList.add("incomplete");
  // }

//find userID
//findID
const findID = () => {
  let toDos = document.getElementById('todo-list');
  toDos.innerHTML = "";

  let id = document.getElementById('user-id').value
  console.log(id)
  let filtered = arrayOfTodos.filter(x => x.userId == id)
  for (let i = 0; i < filtered.length; ++i) {
    let newList = document.createElement('li')
    newList.innerHTML = filtered[i].title
    toDos.appendChild(newList)    
  }
}

//find complete
const filterComplete = () => {
  let toDos = document.getElementById('todo-list');
  toDos.innerHTML = "";

  let filtered = arrayOfTodos.filter(x => x.completed)
  for (let i = 0; i < filtered.length; ++i) {
    let newList = document.createElement('li')
    newList.innerHTML = filtered[i].title
    toDos.appendChild(newList)    
  }
} 

//find Incomplete
const filterIncomplete = () => {
  let toDos = document.getElementById('todo-list');
  toDos.innerHTML = "";
  let filtered = arrayOfTodos.filter(x => !x.completed)
for(i=0; i < filtered.length; i++){
  let newList = document.createElement('li')
  newList.innerHTML = filtered[i].title
  toDos.appendChild(newList)
}
}